import React, { useState, useEffect } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
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

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [finishedCheckingServer, setFinishedCheckingServer] = useState(false);

  useEffect(() => {
    async function onLoad() {
      let token;
      // Try to get from AsyncStorage
      try {
        token = await AsyncStorage.getItem("token");
      } catch (err) {
        console.log("No JWT found,");
        setFinishedCheckingServer(true);
      }
      // If JWT is found, ask server if JWT is verified
      if (token) {
        const reply = await fetch(`.......:5000/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + " " + token,
          },
          body: {},
        });
        if (reply.success) {
          // If yes, auto go through to LandingPage. Set loggedIn state to true. Possibly useContext for it.
          setFinishedCheckingServer(true);
          setLoggedIn(true);
          navigation.navigate("LandingPage"); // Possibly unneeded?
        } else {
          // If JWT is not verified, stay on Hello screen. Delete incorrect JWT. STRETCH GOAL show small popup saying you are not logged in.
          AsyncStorage.removeItem("token", (err) => console.log("userId", err));
          setFinishedCheckingServer(true);
          navigation.navigate("HomeScreen"); // Send to where user can choose to login or register.
        }
      } else {
        setFinishedCheckingServer(true);
      }
    }
    onLoad();
  }, []);

  return finishedCheckingServer ? (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <NavigationContainer>
        <Stack.Navigator>
          {loggedIn ? (
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
