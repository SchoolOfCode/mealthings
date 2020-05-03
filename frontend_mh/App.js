import React, { useEffect, useReducer, useMemo } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "./screens/Loginpage";
import RegisterScreen from "./screens/RegisterScreen";
import RegisterScreen2 from "./screens/RegisterScreen2";
import HomeScreen2 from "./screens/HomeScreen2";
import Goals from "./screens/Goals";
import SplashSuccess from "./screens/SplashSuccess";
import Allergies from "./screens/Allergies";
import Preferences from "./screens/DietaryPreference";
import ShoppingList from "./screens/ShoppingList";
import NewRecipe from "./screens/NewRecipe";
import TodaysRecipe from "./screens/TodaysRecipe";
import YourStats from "./screens/YourStats";
import SplashScreenDrink from "./screens/SplashScreenDrink";
import SplashScreenExerciseSlow from "./screens/SplashScreenExerciseSlow";
import SplashScreenExerciseQuick from "./screens/SplashScreenExerciseQuick";
import LandingPage from "./screens/Landingpage";
import mealplanner from "./screens/Mealplanner";
const Stack = createStackNavigator();
export const AuthContext = React.createContext();

async function storeItem(key, item) {
  try {
    await AsyncStorage.setItem(key, item);
    console.log("Stored item", item, "in Asyncstorage!");
    return true;
  } catch (err) {
    console.log("Error in storeItem:", err);
    return false;
  }
}

export default function App({ navigation }) {
  const [state, dispatch] = useReducer(
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
        case "LOGIN_FAILURE":
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
            loggedIn: true,
            token: action.token,
            finishedCheckingServer: true,
          };
        case "SIGN_OUT":
          try {
            AsyncStorage.removeItem("token");
            console.log("Removed JWT on signout");
          } catch (err) {
            console.log(err);
          }
          return {
            ...prevState,
            isSignout: true,
            token: null,
            loggedIn: false,
            finishedCheckingServer: true,
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

  useEffect(() => {
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
          }
        );
        const replyJson = await reply.json();
        if (replyJson.success || (reply.status > 199 && reply.status < 250)) {
          // If yes, auto go through to LandingPage. Set loggedIn state to true. Possibly useContext for it.
          dispatch({ type: "RESTORE_TOKEN_SUCCESS", token: token });
        } else {
          // If JWT is not verified, stay on Hello screen. Delete incorrect JWT. STRETCH GOAL show small popup saying you are not logged in.
          AsyncStorage.removeItem("token", (err) => console.log("userId", err));
          dispatch({ type: "RESTORE_TOKEN_FAILURE" });
        }
      } else {
        dispatch({ type: "RESTORE_TOKEN_FAILURE" });
      }
    };
    onLoad();
  }, []);

  const authContext = useMemo(
    () => ({
      logIn: async (email_address, password) => {
        // Send POST request with email and password, and wait for server response
        const loginResponse = await fetch(
          `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email_address, password }),
          }
        );
        const loginResponseJson = await loginResponse.json();
        console.log(
          "fetch response in logIn:",
          JSON.stringify(loginResponse),
          loginResponseJson
        );
        // If server returns true and with JWT
        if (loginResponseJson.success || loginResponse.status == 200) {
          // Save JWT to local AsyncStorage
          const itemWasStored = storeItem("token", loginResponseJson.token);
          if (!itemWasStored) {
            console.log("AsyncLocalstorage failed.");
          }
          // Set logged in to true
          dispatch({ type: "SIGN_IN", token: loginResponse.token });
        } else {
          // If server return false
          // Tell user incorrect password
          Alert.alert(
            `Oops!`,
            "Could not verify email and password.",
            [{ text: "Dismiss", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
          dispatch({ type: "LOGIN_FAILURE" });
        }
      },

      logOut: () => dispatch({ type: "SIGN_OUT" }),

      register: async (dataPlus) => {
        console.log("dataPlus in register function:", dataPlus);
        const postResponse = await fetch(
          `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...dataPlus }),
          }
        );
        const postResponseJson = await postResponse.json();
        if (!postResponseJson.success) {
          console.log(
            "postResponse",
            JSON.stringify(postResponse),
            postResponseJson
          );
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
          }
        }
      },
    }),
    []
  );

  return state.finishedCheckingServer ? (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <NavigationContainer>
        <AuthContext.Provider value={authContext}>
          <Stack.Navigator>
            {state.loggedIn ? (
              <>
                <Stack.Screen
                  name="LandingPage"
                  component={LandingPage}
                  options={{ title: "LandingPage" }}
                />
                <Stack.Screen
                  name="Goals"
                  component={Goals}
                  options={{ title: "Goals" }}
                />
                <Stack.Screen
                  name="Allergies"
                  component={Allergies}
                  options={{ title: "Allergies" }}
                />
                <Stack.Screen
                  name="Preferences"
                  component={Preferences}
                  options={{ title: "Preferences" }}
                />
                <Stack.Screen
                  name="ShoppingList"
                  component={ShoppingList}
                  options={{ title: "Shopping List" }}
                />
                <Stack.Screen
                  name="NewRecipe"
                  component={NewRecipe}
                  options={{ title: "Add a new recipe" }}
                />
                <Stack.Screen
                  name="TodaysRecipe"
                  component={TodaysRecipe}
                  options={{ title: "Today's recipe" }}
                />
                <Stack.Screen
                  name="YourStats"
                  component={YourStats}
                  options={{ title: "Your stats" }}
                />
                <Stack.Screen
                  name="SplashScreenDrink"
                  component={SplashScreenDrink}
                  options={{ title: "Grab some water!" }}
                />
                <Stack.Screen
                  name="SplashScreenExerciseSlow"
                  component={SplashScreenExerciseSlow}
                  options={{ title: "Alert" }}
                />
                <Stack.Screen
                  name="SplashScreenExerciseQuick"
                  component={SplashScreenExerciseQuick}
                  options={{ title: "Alert" }}
                />
                <Stack.Screen
                  name="Mealplanner"
                  component={mealplanner}
                  options={{ title: "Meal Planner" }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Home2"
                  component={HomeScreen2}
                  options={{ title: "Home" }}
                />
                <Stack.Screen
                  name="LoginPage"
                  component={LoginPage}
                  options={{ title: "Login" }}
                />
                <Stack.Screen
                  name="Register1"
                  component={RegisterScreen}
                  options={{ title: "Sign Up" }}
                />
                <Stack.Screen
                  name="Register2"
                  component={RegisterScreen2}
                  options={{ title: "Sign Up" }}
                />
                <Stack.Screen
                  name="SplashSuccess"
                  component={SplashSuccess}
                  options={{ title: "Splash Success" }}
                />
              </>
            )}
          </Stack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
