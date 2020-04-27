import React, { useState, useEffect, useMemo, createContext } from "react";
import { AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./Loginpage";
import RegisterScreen from "./RegisterScreen";
import RegisterScreen2 from "./RegisterScreen2";
import HomeScreen2 from "./HomeScreen2";
import Goals from "./Goals";
import SplashSuccess from "./SplashSuccess";
import Allergies from "./Allergies";
import Preferences from "./DietaryPreference";
import ShoppingList from "./ShoppingList";
import NewRecipe from "./NewRecipe";
import TodaysRecipe from "./TodaysRecipe";
import YourStats from "./YourStats";
import SplashScreenDrink from "./SplashScreenDrink";
import SplashScreenExerciseSlow from "./SplashScreenExerciseSlow";
import SplashScreenExerciseQuick from "./SplashScreenExerciseQuick";
import LandingPage from "./Landingpage";
import mealplanner from "./Mealplanner";
const Stack2 = createStackNavigator();
export const RecipeContext = createContext({});

const _storeRecipes = async (recipeArray) => {
  try {
    const now = new Date();
    const jsonRecipeArray = await JSON.stringify(recipeArray);
    await AsyncStorage.setItem("userRecipes", jsonRecipeArray);
    await AsyncStorage.setItem("recipeSetDate", JSON.stringify(now));
    console.log("Sucessfullly stored data in AsyncStorage");
  } catch (error) {
    console.log("Failed to store recipes in local storage ");
    console.warn(error);
  }
};

const _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(
        "retrieved",
        key,
        "from AsyncStorage, returning value:",
        value
      );
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    console.log(
      "Threw an error trying to get key:" + key + " from local storage."
    );
    console.warn(error);
    return null;
  }
};

export default function HomeScreen({ navigation }) {
  const [recipeList, setRecipeList] = useState([]);

  const userID = _retrieveData("userID") || 1;

  async function getLastRecipeDate() {
    console.log("Fetching last recipe date from remote server");
    const res = await fetch(
      `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/${userID}`
    );
    const data = await res.json();
    return data.payload[0].last_date_meals_requested;
  }

  async function getTotalNoRecipes() {
    console.log("Fetching total number of recipes from remote server");
    const res = await fetch(
      `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/recipes?countOnly=true`
    );
    const data = await res.json();
    return data.payload.count;
  }

  // Get recipes
  useEffect(() => {
    async function runGetRecipes() {
      if (recipeList.length < 1) {
        // Try to get of last recipes from local storage
        let last_date_meals_requested = new Date(
          _retrieveData("recipeSetDate")
        );
        // If date of last recipes not in local storage, get from server
        if (!last_date_meals_requested) {
          const last_date_meals_requested_temp = await getLastRecipeDate();
          last_date_meals_requested = new Date(last_date_meals_requested_temp);
        }
        const now = new Date();
        const timeDiffInDays =
          (now.getTime() - last_date_meals_requested.getTime()) /
          (1000 * 3600 * 24); // 1000*3600*24 = miliseconds in a day.
        // If need new recipes, get new recipes.
        if (timeDiffInDays > 6.5) {
          getNewRecipes();
        }
        // If don't need new recipes, try to get them from local storage
        const localCopyOfRecipes = await _retrieveData("userRecipes");
        // If not in local storage, get from database
        if (!localCopyOfRecipes || localCopyOfRecipes.length < 1) {
          console.log(
            "localCopyOfRecipes not found or length shorter than 1. Re-requesting from remote server..."
          );
          reRequestRecipes();
        } else {
          console.log("Found local copy of recipes. Setting state...");
          setRecipeList(localCopyOfRecipes);
        }
      }
    }
    runGetRecipes();
  }, []);

  // Get new recipes and load into state
  async function getNewRecipes() {
    console.log("getNewRecipes triggered...");
    let last_week_food = [];
    const res = await fetch(
      `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/${userID}`
    );
    const data = await res.json();
    last_week_food = data.payload[0].this_weeks_meals
      .replace(/"|{|}/g, "")
      .split(",")
      .map((x) => +x);
    // Get total number of recipes
    const totalNumRecipes = (await getTotalNoRecipes()) || 50;
    // Get 14 random numbers with no duplicates
    const tempNumbers = [...Array(totalNumRecipes).keys()].map(
      (num) => num + 1
    );
    // Check that none of the recipes were in last weeks recipes by getting from database and checking
    last_week_food.forEach((x) => {
      const index = tempNumbers.indexOf(x);
      if (index > -1) {
        tempNumbers.splice(index, 1);
      }
    });
    tempNumbers.sort(() => Math.random() - 0.5);
    const randNums = tempNumbers.slice(0, 14);
    console.log("Random recipe IDs chosen:", randNums);
    // Get the recipes from the database
    const fetchData = (URI) => {
      return fetch(URI)
        .then((response) => response.json())
        .then((data) => {
          return data.payload[0];
        });
    };
    const requests = [];
    randNums.forEach((num) => {
      requests.push(
        fetchData(
          `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/recipes/${num}`
        )
      );
    });
    Promise.all(requests).then((arrayWithData) => {
      console.log("All promises resolved. Setting state...");
      setRecipeList(arrayWithData);
      // Save recipes to local storage
      _storeRecipes(arrayWithData);
    });
    // Send PATCH to set last_weeks_recipes to the current this_weeks_recipes and this_weeks_recipes to the newly generated recipes (currently in variable randNums), and lastRecipeFetchDate to be today
    const patchResponse = await fetch(
      `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/${userID}`,
      {
        method: "PATCH",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          last_weeks_meals: last_week_food,
          this_weeks_meals: randNums,
          last_date_meals_requested: new Date().toISOString(),
        }),
      }
    );
    console.log("patchResponse:", patchResponse);
  }

  // Get new recipes and load into state
  async function reRequestRecipes() {
    console.log("reRequestRecipes triggered...");
    const res = await fetch(
      `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/${userID}`
    );
    const data = await res.json();
    const this_week_food = data.payload[0].this_weeks_meals
      .replace(/"|{|}/g, "")
      .split(",")
      .map((x) => +x);
    // Get the recipes from the database
    const fetchData = (URI) => {
      return fetch(URI)
        .then((response) => response.json())
        .then((data) => {
          return data.payload[0];
        });
    };
    const requests = [];
    this_week_food.forEach((num) => {
      requests.push(
        fetchData(
          `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/recipes/${num}`
        )
      );
    });
    Promise.all(requests).then((arrayWithData) => {
      console.log("re-requested recipes");
      setRecipeList(arrayWithData);
      // Save recipes to local storage
      _storeRecipes(arrayWithData);
    });
  }

  const recipeList2 = useMemo(() => {
    return recipeList;
  }, [recipeList]);

  return (
    <NavigationContainer independent={true}>
      <RecipeContext.Provider value={recipeList2}>
        <Stack2.Navigator initialRouteName="Home2">
          <Stack2.Screen
            name="Home2"
            component={HomeScreen2}
            options={{ title: "Home" }}
          />
          <Stack2.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ title: "Log in" }}
          />
          <Stack2.Screen
            name="Register1"
            component={RegisterScreen}
            options={{ title: "Register" }}
          />
          <Stack2.Screen
            name="Register2"
            component={RegisterScreen2}
            options={{ title: "Register" }}
          />
          <Stack2.Screen
            name="Goals"
            component={Goals}
            options={{ title: "Goals" }}
          />
          <Stack2.Screen
            name="SplashSuccess"
            component={SplashSuccess}
            options={{ title: "Splash Success" }}
          />
          <Stack2.Screen
            name="Allergies"
            component={Allergies}
            options={{ title: "Allergies" }}
          />
          <Stack2.Screen
            name="Preferences"
            component={Preferences}
            options={{ title: "Preferences" }}
          />
          <Stack2.Screen
            name="ShoppingList"
            component={ShoppingList}
            options={{ title: "Shopping List" }}
          />
          <Stack2.Screen
            name="NewRecipe"
            component={NewRecipe}
            options={{ title: "Add a new recipe" }}
          />
          <Stack2.Screen
            name="TodaysRecipe"
            component={TodaysRecipe}
            options={{ title: "Today's recipe" }}
          />
          <Stack2.Screen
            name="YourStats"
            component={YourStats}
            options={{ title: "Your stats" }}
          />
          <Stack2.Screen
            name="SplashScreenDrink"
            component={SplashScreenDrink}
            options={{ title: "Alert" }}
          />
          <Stack2.Screen
            name="SplashScreenExerciseSlow"
            component={SplashScreenExerciseSlow}
            options={{ title: "Alert" }}
          />
          <Stack2.Screen
            name="SplashScreenExerciseQuick"
            component={SplashScreenExerciseQuick}
            options={{ title: "Alert" }}
          />
          <Stack2.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ title: "LandingPage" }}
          />
          <Stack2.Screen
            name="Mealplanner"
            component={mealplanner}
            options={{ title: "Mealplanner" }}
          />
        </Stack2.Navigator>
      </RecipeContext.Provider>
    </NavigationContainer>
  );
}
