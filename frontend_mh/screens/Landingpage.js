import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { AuthContext } from "../App.js";
import { AWS_PATH } from "../config";

import { FORMAT_navButtonText } from "./FORMAT_navButton";
import { COLS } from "./COLS";

const MIN_NUM_RECIPIES = 6;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLS.C_BG,
    flex: 1,
    padding: 10,
  },
  headingText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "flex-start",
  },
  flex: {
    flexDirection: "row",
  },
  imageButton: {
    width: 150,
    height: 150,
    backgroundColor: COLS.C_BG,
    margin: 15,
    alignSelf: "center",
    alignItems: "center",
  },
  todaysMeal: {
    width: "100%",
    padding: 7,
    backgroundColor: "#BCB5C3",
    justifyContent: "flex-end",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
    borderRadius: 5,
  },
  images: {
    width: "110%",
    height: "110%",
    borderRadius: 10,
    opacity: 0.7,
  },
  buttonText: {
    color: COLS.C6_WHITE_TEXT,
    textAlign: "center",
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold",
    fontSize: 18,
  },
  pictureButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "flex-start",
    bottom: "20%",
  },
});

const storeRecipes = async (recipeArray) => {
  try {
    const now = new Date();
    const jsonRecipeArray = await JSON.stringify(recipeArray);
    await AsyncStorage.setItem("userRecipes", jsonRecipeArray);
    await AsyncStorage.setItem("recipeSetDate", JSON.stringify(now));
    console.log("Sucessfullly stored data in AsyncStorage");
  } catch (error) {
    console.log("Failed to store recipes in local storage.");
    console.warn(error);
  }
};

const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(
        "Retrieved",
        key,
        "from AsyncStorage, returning value:",
        value
      );
      return JSON.parse(value);
    }
    console.log(
      "Returned null when trying to get key:" + key + " from local storage."
    );
    return null;
  } catch (error) {
    console.log(
      "Threw an error trying to get key:" +
        key +
        " from local storage. Returning null."
    );
    console.warn(error);
    return null;
  }
};

export default function LandingPage({ navigation }) {
  const {
    logOut,
    userID,
    setRecipeList,
    recipeList,
    fetchShoppingList,
    setShoppingList,
  } = useContext(AuthContext);

  async function getLastRecipeDate() {
    console.log(
      "Fetching last recipe date from remote server for userID:",
      userID
    );
    try {
      const res = await fetch(`${AWS_PATH}/users/${userID}`);
      const data = await res.json();
      return data.payload[0].last_date_meals_requested;
    } catch (err) {
      console.log("Failed to get last recipe date:", err);
      return null;
    }
  }

  async function getTotalNoRecipes() {
    console.log("Fetching total number of recipes from remote server");
    try {
      const res = await fetch(`${AWS_PATH}/recipes?countOnly=true`);
      const data = await res.json();
      console.log("Recieved from total number of recipes:", data);
      return parseInt(data.payload.count);
    } catch (err) {
      console.log("Failed to get total number of recipes:", err, data);
    }
  }

  // Get recipes
  useEffect(() => {
    console.log("Starting useEffect in HomeScreen");
    async function runGetRecipes() {
      if (!recipeList || recipeList.length < 14) {
        console.log("Recipe list is less than 1 in length");
        // Try to get of last recipes from local storage
        const last_date_meals_requested_temp = await retrieveData(
          "recipeSetDate"
        );
        let last_date_meals_requested;
        // Try to get last date meals requested
        if (last_date_meals_requested_temp) {
          console.log(
            "inside if, last_date_meals_requested_temp",
            last_date_meals_requested_temp
          );
          last_date_meals_requested = new Date(last_date_meals_requested_temp);
        } else {
          // If date of last recipes not in local storage, get from server
          const last_date_meals_requested_temp2 = await getLastRecipeDate();
          last_date_meals_requested = new Date(last_date_meals_requested_temp2);
        }
        console.log("last_date_meals_requested", last_date_meals_requested);
        const now = new Date();
        const timeDiffInDays =
          (now.getTime() - last_date_meals_requested.getTime()) /
          (1000 * 3600 * 24); // 1000*3600*24 = miliseconds in a day.
        // If need new recipes, get new recipes.
        if (timeDiffInDays > 6.5) {
          console.log(
            `Last date: ${last_date_meals_requested}, today's date: ${now}, timeDiffInDays:${timeDiffInDays}`
          );
          getNewRecipes(userID);
        } else {
          // If don't need new recipes, try to get them from local storage
          const localCopyOfRecipes = await retrieveData("userRecipes");
          // If not in local storage, get from database
          if (!localCopyOfRecipes || localCopyOfRecipes.length < 1) {
            console.log(
              "localCopyOfRecipes not found or length shorter than 1. Re-requesting from remote server..."
            );
            reRequestRecipes(userID);
          } else {
            console.log("Found local copy of recipes. Setting state...");
            setRecipeList(localCopyOfRecipes);
          }
        }
      }
    }
    runGetRecipes();
  }, []);

  useEffect(() => {
    if (recipeList && recipeList.length > MIN_NUM_RECIPIES) {
      async function runLocalRecipes() {
        // Try to get shoppinglist from local storage
        const localCopyOfShoppinglist = await retrieveData("ingredientsList");
        // If not in local storage, get from database
        if (!localCopyOfShoppinglist || localCopyOfShoppinglist.length < 1) {
          console.log(
            "localCopyOfShoppinglist not found or length shorter than 1. Re-requesting from remote server..."
          );
          const recipeIDs = recipeList.map((r) => r.recipe_id);
          fetchShoppingList(recipeIDs);
        } else {
          console.log("Found local copy of recipes. Setting state...");
          setShoppingList(localCopyOfShoppinglist);
        }
      }
      runLocalRecipes();
    }
  }, [recipeList]);

  // Get new recipes and load into state
  async function getNewRecipes(userID2) {
    const uID = userID || userID2 || 2;
    console.log("getNewRecipes triggered. userID2:", uID);
    let last_week_food = [];
    const res = await fetch(`${AWS_PATH}/users/${uID}`);
    const data = await res.json();
    console.log("here2");
    console.log(
      "Got the result of getNewRecipes:",
      data.payload[0].this_weeks_meals
    );
    last_week_food = data.payload[0].this_weeks_meals
      .replace(/"|{|}/g, "")
      .split(",")
      .map((x) => +x);
    // Get total number of recipes
    const totalNumRecipes = (await getTotalNoRecipes()) || 50;
    console.log("totalNumber of recipes", totalNumRecipes);
    // Get 14 random numbers with no duplicates of last weeks meals
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
    // Get the recipes from the database
    console.log("here3");
    const fetchData = (URI) => {
      return fetch(URI)
        .then((response) => response.json())
        .then((data) => {
          console.log("here7", data);
          return data.payload[0];
        });
    };
    const requests = [];
    randNums.forEach((num) => {
      requests.push(fetchData(`${AWS_PATH}/recipes/${num}`));
    });
    Promise.all(requests).then((arrayWithData) => {
      console.log("All promises resolved. Setting state...");
      setRecipeList(arrayWithData);
      // Save recipes to local storage
      storeRecipes(arrayWithData);
      const recipeIDsToFetch = arrayWithData.map((r) => r.recipe_id);
      fetchShoppingList(recipeIDsToFetch);
    });
    // Send PATCH to set last_weeks_recipes to the current this_weeks_recipes and this_weeks_recipes to the newly generated recipes (currently in variable randNums), and lastRecipeFetchDate to be today
    console.log(
      "json body object: ",
      JSON.stringify({
        last_weeks_meals: last_week_food,
        this_weeks_meals: randNums,
        last_date_meals_requested: new Date().toISOString(),
      })
    );
    const patchResponse = await fetch(`${AWS_PATH}/users/${userID}`, {
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
    });
    console.log("patchResponse:", patchResponse);
  }

  // Get new recipes and load into state
  async function reRequestRecipes(userIDNotState) {
    console.log("reRequestRecipes triggered...");
    console.log("userID:", userIDNotState);
    const res = await fetch(`${AWS_PATH}/users/${userIDNotState}`);
    const data = await res.json();
    console.log("reRequested data arrived:", data);
    console.log("here4");
    const this_week_food = data.payload[0].this_weeks_meals
      .replace(/"|{|}/g, "")
      .split(",")
      .map((x) => +x);
    console.log("This weeks food:", this_week_food);
    // Get the recipes from the database
    const fetchData = (URI) => {
      return fetch(URI)
        .then((response) => response.json())
        .then((data) => {
          console.log("here5", data);
          return data.payload[0];
        });
    };
    const requests = [];
    this_week_food.forEach((num) => {
      requests.push(fetchData(`${AWS_PATH}/recipes/${num}`));
    });
    Promise.all(requests).then((arrayWithData) => {
      console.log("Resolved all promises for re-requested recipes");
      setRecipeList(arrayWithData);
      // Save recipes to local storage
      storeRecipes(arrayWithData);
      const recipeIDsToFetch = arrayWithData.map((r) => r.recipe_id);
      fetchShoppingList(recipeIDsToFetch);
    });
  }

  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.flex}>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => navigation.navigate("ShoppingList")}
        >
          <Image
            style={styles.images}
            source={require("../assets/images/tapas.jpg")}
          ></Image>
          <Text style={styles.pictureButtonText}>Shopping List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => navigation.navigate("TodaysRecipe")}
        >
          <Image
            style={styles.images}
            source={require("../assets/images/Chilli.jpg")}
          ></Image>
          <Text style={styles.pictureButtonText}>Today's Recipe</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flex}>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => navigation.navigate("NewRecipe")}
        >
          <Image
            style={styles.images}
            source={require("../assets/images/Brocoli.jpg")}
          ></Image>
          <Text style={styles.pictureButtonText}>Random Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => navigation.navigate("Mealplanner")}
        >
          <Image
            style={styles.images}
            source={require("../assets/images/Vegplate.jpg")}
          ></Image>
          <Text style={styles.pictureButtonText}>Weekly Meal plan</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flex}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Goals")}
          style={styles.imageButton}
        >
          <Image
            style={styles.images}
            source={require("../assets/images/Orange.jpg")}
          ></Image>
          <Text style={styles.pictureButtonText}>Goals & Diet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => {
            logOut();
          }}
        >
          <Image
            style={styles.images}
            source={require("../assets/images/Pancakes.jpg")}
          ></Image>
          <Text style={styles.pictureButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.todaysMeal}
        onPress={() => navigation.navigate("TodaysRecipe")}
      >
        <Text style={styles.buttonText}>Today's Meal</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
