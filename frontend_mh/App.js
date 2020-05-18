import React, { useEffect, useReducer, useMemo } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage,
  Alert,
} from "react-native";
import * as Font from "expo-font";
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
import Mealplanner from "./screens/Mealplanner";
import { AWS_PATH } from "./config/index";

import { notify, initnotify, getToken } from "expo-push-notification-helper";
import { newChannel } from "expo-push-notification-helper";

// function tokenOperator() {
//   initnotify().then(async (data) => {
//     if (data) {
//       await getToken();
//       console.log(await getToken());
//       console.log("token is working so far");
//     } else {
//       Alert.alert("please grant this app notification permission in settings.");
//     }
//   });

//   async function PNotification() {
//     let userID = await getToken();
//     console.log("working so far" + (await getToken()));
//     const token = await userID;

//     fetch("https://exp.host/--/api/v2/push/send", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "accept-encoding": "gzip, deflate",
//         host: "exp.host",
//       },
//       body: JSON.stringify({
//         to: token,
//         title: "Meal Things",
//         body: "Time to reenergise those electrolytes",
//         largeIcon: "../assets/images/newLogo.png",
//         priority: "high",
//         sound: "default",
//         channelId: "default",
//       }),
//     })
//       .then((response) => response.json())

//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   setInterval(PNotification, 30000);

//   async function RNotification() {
//     let userID = await getToken();
//     console.log("working so far" + (await getToken()));
//     const token = await userID;

//     fetch("https://exp.host/--/api/v2/push/send", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "accept-encoding": "gzip, deflate",
//         host: "exp.host",
//       },
//       body: JSON.stringify({
//         to: token,
//         title: "Meal Things",
//         body: "Time for a run",
//         priority: "high",
//         sound: "default",
//         channelId: "default",
//       }),
//     })
//       .then((response) => response.json())

//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   setInterval(RNotification, 1200000);
// }
// tokenOperator();

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

async function getFonts() {
  await Font.loadAsync({
    "Muli-Medium": {
      uri: require("./assets/fonts/Muli-VariableFont_wght.ttf"),
    },
    "Muli-Bold": {
      uri: require("./assets/fonts/Muli-Bold.ttf"),
    },
  });
}
export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN_SUCCESS":
          return {
            ...prevState,
            isSignout: false,
            token: action.token,
            loggedIn: true,
            finishedCheckingServer: true,
            userID: action.userID,
            recipeList: null,
          };
        case "RESTORE_TOKEN_FAILURE":
          return {
            ...prevState,
            isSignout: false,
            token: null,
            loggedIn: false,
            finishedCheckingServer: true,
            userID: null,
            recipes: null,
          };
        case "LOGIN_FAILURE":
          return {
            ...prevState,
            isSignout: false,
            token: null,
            loggedIn: false,
            finishedCheckingServer: true,
            userID: null,
            recipeList: null,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            loggedIn: true,
            token: action.token,
            finishedCheckingServer: true,
            userID: action.userID,
            recipeList: null,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            token: null,
            loggedIn: false,
            finishedCheckingServer: true,
            userID: null,
            recipeList: null,
          };
        case "SET_RECIPES":
          return {
            ...prevState,
            recipeList: action.recipes,
          };
        case "SET_INGREDIENTSLIST":
          return {
            ...prevState,
            ingredientsList: action.ingredientsList,
          };
      }
    },
    {
      isSignout: false,
      token: null,
      loggedIn: false,
      finishedCheckingServer: false,
      userID: null,
      recipeList: null,
      ingredientsList: null,
    }
  );

  async function logIn(email_address, password) {
    // Send POST request with email and password, and wait for server response
    const loginResponse = await fetch(`${AWS_PATH}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address, password }),
    });
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
      dispatch({
        type: "SIGN_IN",
        token: loginResponse.token,
        userID: loginResponse.userID,
      });
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
  }

  function logOut() {
    AsyncStorage.clear();
    dispatch({ type: "SIGN_OUT" });
  }

  async function setShoppingList(ingreds) {
    // Save ingredients list to local storage
    const didStoreShoppinglist = storeItem(
      "ingredientsList",
      JSON.stringify(ingreds)
    );
    if (!didStoreShoppinglist) {
      console.log("Failed to store shoppinglist in localstorage");
    }
    dispatch({
      type: "SET_INGREDIENTSLIST",
      ingredientsList: ingreds,
    });
  }

  async function fetchShoppingList(recipeIDsFetch) {
    console.log("Got recipe ids:", recipeIDsFetch);
    const ingredientsList = await fetch(`${AWS_PATH}/recipes/shoppinglist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipeIDs: recipeIDsFetch }),
    });
    const ingredientsListProcessed = await ingredientsList.json();
    console.log("ingreds:", ingredientsListProcessed.payload);
    setShoppingList(ingredientsListProcessed.payload);
  }

  async function setRecipeList(recipes) {
    console.log("Inside setRecipeList");
    // Set recipes in state
    dispatch({ type: "SET_RECIPES", recipes: recipes });
  }

  async function register(dataPlus) {
    console.log("dataPlus in register function:", dataPlus);
    const postResponse = await fetch(`${AWS_PATH}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...dataPlus }),
    });
    const postResponseJson = await postResponse.json();
    if (!postResponseJson.success) {
      console.log(
        "postResponse",
        JSON.stringify(postResponse),
        postResponseJson
      );
      Alert.alert(
        `Error! Status code ${postResponse.status}, that email is already in use!`,
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
  }

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const onLoad = async () => {
      console.log("Inside useEffect!");
      await getFonts();
      let token;
      try {
        console.log("About to look for JWT");
        token = await AsyncStorage.getItem("token");
        console.log("Found! JWT");
      } catch (err) {
        console.log("No JWT found");
        dispatch({ type: "RESTORE_TOKEN_FAILURE" });
      }
      if (token) {
        console.log("About to fetch...");
        const reply = await fetch(`${AWS_PATH}/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + " " + token,
          },
        });
        const replyJson = await reply.json();
        if (replyJson.success || (reply.status > 199 && reply.status < 250)) {
          // If yes, auto go through to LandingPage. Set loggedIn state to true. Possibly useContext for it.
          dispatch({
            type: "RESTORE_TOKEN_SUCCESS",
            token: token,
            userID: replyJson.userID,
          });
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
      userID: state.userID,
      recipeList: state.recipeList,
      ingredientsList: state.ingredientsList,
      logIn,
      logOut,
      setShoppingList,
      fetchShoppingList,
      setRecipeList,
      register,
    }),
    [state]
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
                  options={{ title: "Home" }}
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
                  options={{ title: "Time to exercise!" }}
                />
                <Stack.Screen
                  name="SplashScreenExerciseQuick"
                  component={SplashScreenExerciseQuick}
                  options={{ title: "Time to exercise!" }}
                />
                <Stack.Screen
                  name="Mealplanner"
                  component={Mealplanner}
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
                  options={{ title: "You've sucessfully registered!" }}
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
