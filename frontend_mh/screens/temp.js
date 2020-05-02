import React from "react";
import AsyncStorage from "@react-native-community/async-storage";

const AuthContext = React.createContext();

async function storeItem(key, item) {
  try {
    await AsyncStorage.setItem(key, item);
    return true;
  } catch (err) {
    console.log("Error in storeItem:", err);
    return false;
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN_SUCCESS":
          return {
            ...prevState,
            token: action.token,
            loggedIn: true,
            finishedCheckingServer: true,
          };
        case "RESTORE_TOKEN_FAILURE":
          return {
            ...prevState,
            token: null,
            loggedIn: false,
            finishedCheckingServer: true,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            token: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            token: null,
          };
      }
    },
    {
      isSignout: false,
      token: null,
      loggedIn: false,
      finishedCheckingServer: false,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const onLoad = async () => {
      let token;
      try {
        token = await AsyncStorage.getItem("token");
      } catch (err) {
        console.log("No JWT found");
        dispatch({ type: "RESTORE_TOKEN_FAILURE" });
      }
      if (token) {
        const reply = await fetch(
          `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer" + " " + token,
            },
            body: {},
          }
        );
        if (reply.success) {
          // If yes, auto go through to LandingPage. Set loggedIn state to true. Possibly useContext for it.
          dispatch({ type: "RESTORE_TOKEN_SUCCESS", token: token });
          // navigation.navigate("LandingPage"); // Possibly unneeded?
        } else {
          // If JWT is not verified, stay on Hello screen. Delete incorrect JWT. STRETCH GOAL show small popup saying you are not logged in.
          AsyncStorage.removeItem("token", (err) => console.log("userId", err));
          dispatch({ type: "RESTORE_TOKEN_FAILURE" });
          // navigation.navigate("HomeScreen"); // Send to where user can choose to login or register.
        }
      } else {
        dispatch({ type: "RESTORE_TOKEN_FAILURE" });
      }
    };
    onLoad();
  }, []);

  const authContext = React.useMemo(
    () => ({
      LogIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },

      signOut: () => dispatch({ type: "SIGN_OUT" }),

      register: async (dataPlus) => {
        console.log("dataPlus in register function:", dataPlus);
        const postResponse = await fetch(
          `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: { ...dataPlus },
          }
        );
        if (!postResponse.success) {
          Alert.alert(
            `Error! Status code ${postResponse.status}`,
            postResponse.message,
            [{ text: "Dismiss", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        } else {
          // If success, save JWT to AsyncLocalStorage, set Login to be true. Redirect to next page (Allergies).
          const didStoreItem = storeItem("token", postResponse.token);
          if (didStoreItem) {
            dispatch({ type: "SIGN_IN", token: postResponse.token });
            navigation.navigate("Allergies");
          }
        }
        // navigation.navigate("Goals", { dataPlus });
      },
    }),
    []
  );
}
