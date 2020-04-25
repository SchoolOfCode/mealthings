import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
} from "react-native";
import { COLS } from "./COLS";
import { FORMAT_background } from "./FORMAT_background";
import {
  FORMAT_containers,
  FORMAT_welcomeContainer,
  FORMAT_moreChoicesContainer,
} from "./FORMAT_containers";
import {
  FORMAT_switches,
  FORMAT_notes,
  FORMAT_todaysMeal,
  FORMAT_foodOptions,
  FORMAT_swipeBar,
  FORMAT_arrow,
  FORMAT_icons,
  FORMAT_mainRecipe,
} from "./FORMAT_extraComponents";
import { FORMAT_headings, FORMAT_textBoxHeading } from "./FORMAT_headings";
import { FORMAT_images } from "./FORMAT_images";
import { FORMAT_inputField } from "./FORMAT_inputField";
import { FORMAT_logo } from "./FORMAT_logo";
import {
  FORMAT_navButton,
  FORMAT_navButtonText,
  FORMAT_navButtonBackground,
} from "./FORMAT_navButton";
import { FORMAT_text, FORMAT_fonts } from "./FORMAT_text";

const _storeRecipes = async (recipeArray) => {
  try {
    const now = new Date();
    const jsonRecipeArray = await JSON.stringify(recipeArray);
    await AsyncStorage.setItem("userRecipes", jsonRecipeArray);
    await AsyncStorage.setItem("recipeSetDate", JSON.stringify(now));
    console.log("Sucessfullly stored data in AsyncStorage", jsonRecipeArray);
  } catch (error) {
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
    console.warn(error);
    return null;
  }
};

export default function HomeScreen({ navigation }) {
  // Pass recipes to relevant screens
  const [recipeList, setRecipeList] = useState([]);
  const [fetchPlease, setFetchPlease] = useState(true);

  const userID = _retrieveData("userID") || 1;

  async function getLastRecipeDate() {
    const res = await fetch(
      `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/${userID}`
    );
    const data = await res.json();
    return data.payload[0].last_date_meals_requested;
  }

  async function getTotalNoRecipes() {
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
        // If not on local storage, get from database
        if (localCopyOfRecipes.length < 1) {
          reRequestRecipes();
        } else {
          setRecipeList(localCopyOfRecipes);
        }
      }
    }
    runGetRecipes();
  }, [fetchPlease]);

  // Get new recipes and load into state
  async function getNewRecipes() {
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
      setRecipeList(arrayWithData);
      // Save recipes to local storage
      _storeRecipes(arrayWithData);
      console.log("retrieved local recipes:", arrayWithData);
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

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <View style={styles.logoCircle}>
          <Image source={require("../assets/images/Mealthings.png")} />
        </View>
        <Text style={styles.tagLine}>Eat Well. Feel Amazing.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBackground}
          onPress={() => navigation.navigate("Register1")}
        >
          <Text style={styles.buttonText}>Try out now!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackground}>
          <Text
            onPress={() => navigation.navigate("LoginPage")}
            style={styles.buttonText}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLS.C_BG,
    justifyContent: "center",
  },
  mealThingsLogo: {
    alignItems: "center",
    margin: "auto",
    justifyContent: "center",
  },
  logoCircle: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: COLS.C_LOGO_BG,
  },
  tagLine: {
    color: COLS.C5_LIGHT_TEXT,
  },
  buttonContainer: {
    marginTop: "20%",
  },
  buttonBackground: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    alignSelf: "center",
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: COLS.C4_DARK_TEXT,
    textAlign: "center",
    padding: 5,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});
