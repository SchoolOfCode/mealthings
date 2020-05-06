import React, { useState, useContext } from "react";
import { AuthContext } from "../App.js";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { COLS } from "./COLS";

// const todaysRecipe = {
//   recipe_id: "1",
//   name: "Really Delicious Cabbage",
//   ingredients: ["Cabbage", "Butter", "Caraway seeds"],
//   ingredientsQuantities: ["1 head", "100 g", "1 tsp"],
//   calories: "286",
//   protein: "20",
//   carbohydrates: "160",
//   fat: "15",
//   cooking_difficulty: "1",
//   cooking_time_mins: "25",
//   method: [
//     "Roughly chop the cabbage",
//     "Add to steamer and add half a tsp of caraway seeds",
//     "Steam for approx. 5 min (depending on cabbage type) until cooked but still crunchy",
//     "Remove from heat and drain. ",
//     "Add the butter and gently stir cabbage until butter melts",
//     "Serve immediatly with remaining caraway seeds and several grinds of black pepper",
//   ],
// };

// const multipleRecipes = [
//   {
//     recipe_id: "1",
//     name: "Really Delicious Cabbage",
//     ingredients: ["Cabbage", "Butter", "Caraway seeds"],
//     ingredientsQuantities: ["1 head", "100 g", "1 tsp"],
//     calories: "286",
//     protein: "20",
//     carbohydrates: "160",
//     fat: "15",
//     cooking_difficulty: "1",
//     cooking_time_mins: "25",
//     method: [
//       "Roughly chop the cabbage",
//       "Add to steamer and add half a tsp of caraway seeds",
//       "Steam for approx. 5 min (depending on cabbage type) until cooked but still crunchy",
//       "Remove from heat and drain. ",
//       "Add the butter and gently stir cabbage until butter melts",
//       "Serve immediatly with remaining caraway seeds and several grinds of black pepper",
//     ],
//   },
//   {
//     recipe_id: "2",
//     name: "Really Delicious BLT",
//     ingredients: [
//       "Free range streaky bacon",
//       "Lettuce",
//       "Beef tomato",
//       "Wholemeal bread",
//       "Freshly churned butter",
//       "Mayonaise",
//     ],
//     ingredientsQuantities: [
//       "2 rashers",
//       "Several leaves",
//       "1",
//       "2 slices",
//       "",
//       "",
//     ],
//     calories: "286",
//     protein: "20",
//     carbohydrates: "160",
//     fat: "15",
//     cooking_difficulty: "1",
//     cooking_time_mins: "25",
//     method: [
//       "Slice the bread thickly",
//       "Spread the freshly churned butter on one slice of bread.",
//       "Spread mayonaise on the second slice of bread",
//       "Slice the tomato thinly",
//       "Fry the bacon until crispy",
//       "Tear the lettuce roughly by hand",
//       "layer the tomato slices, lettuce and bacon on the bread and serve as a sandwhich.",
//     ],
//   },
//   {
//     recipe_id: "3",
//     name: "Really Delicious Porrige",
//     ingredients: ["Porrige", "Blueberries", "Banana", "Oat milk"],
//     ingredientsQuantities: ["100 g", "1 handful", "1 sliced", "200 ml"],
//     calories: "286",
//     protein: "20",
//     carbohydrates: "160",
//     fat: "15",
//     cooking_difficulty: "4",
//     cooking_time_mins: "35",
//     method: [
//       "Mix ingredients in a saucepan",
//       "Heat ingredients over a very low heat, stirring gently until milk is fully absorbed",
//       "Serve while hot",
//     ],
//   },
//   {
//     recipe_id: "4",
//     name: "Really Delicious Porrige",
//     ingredients: ["Porrige", "Blueberries", "Banana", "Oat milk"],
//     ingredientsQuantities: ["100 g", "1 handful", "1 sliced", "200 ml"],
//     calories: "286",
//     protein: "20",
//     carbohydrates: "160",
//     fat: "15",
//     cooking_difficulty: "4",
//     cooking_time_mins: "35",
//     method: [
//       "Mix ingredients in a saucepan",
//       "Heat ingredients over a low heat, stirring gently until milk is fully absorbed",
//       "Serve while hot",
//     ],
//   },
// ];

function recipeCard(recipeObject, index, setTodaysRecipeIndex) {
  return (
    <View key={recipeObject.name} style={styles.recipeCardContainer}>
      <TouchableOpacity onPress={() => setTodaysRecipeIndex(index)}>
        <Image
          source={{ uri: recipeObject.url }}
          style={styles.recipeCardImage}
        />
        <View style={styles.recipeCardTextContainer}>
          <Text style={styles.recipeCardTitle}>{recipeObject.name}</Text>
          <Text style={styles.recipeCardCookingTime}>
            {recipeObject.cooking_time_mins} mins
          </Text>
          <Text style={styles.recipeCardDifficulty}>
            {recipeObject.cooking_difficulty < 2
              ? "Easy"
              : recipeObject.cooking_difficulty < 4
              ? "Medium"
              : "Hard"}
          </Text>
        </View>
        {/* <SimpleLineIcons style={styles.icons} name="magnifier-add" size={20} /> */}
      </TouchableOpacity>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;

export default function NewRecipe() {
  const { userID, recipeList } = useContext(AuthContext); // Needs a todaysRecipeIndex to get at the correct recipe for the main image
  const [todaysRecipeIndex, setTodaysRecipeIndex] = useState(0);
  const todaysRecipe = recipeList[todaysRecipeIndex];
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{todaysRecipe.name}</Text>
      <Image source={{ uri: todaysRecipe.url }} style={styles.mainImage} />
      <View style={styles.mainRecipeInfo}>
        <Text style={styles.infoTextLine}>
          Difficulty level:{" "}
          <Text style={{ fontWeight: "bold" }}>
            {todaysRecipe.cooking_difficulty}
          </Text>
        </Text>
        <Text style={styles.infoTextLine}>
          Preparation time:{" "}
          <Text
            style={{ fontWeight: "bold" }}
          >{`${todaysRecipe.cooking_time_mins} minutes`}</Text>
        </Text>
        <Text style={styles.infoTextLine}>
          Calorie count:{" "}
          <Text
            style={{ fontWeight: "bold" }}
          >{`${todaysRecipe.calories} kcal`}</Text>
        </Text>
      </View>
      <View style={styles.swipeForMoreBar}>
        <Text style={{ paddingTop: 5 }}>Swipe for more choices</Text>
        <AntDesign name="arrowdown" size={32} color="black" />
      </View>
      <ScrollView contentContainerStyle={styles.moreChoicesContainer}>
        {recipeList.map((recipe, index) =>
          recipeCard(recipe, index, setTodaysRecipeIndex)
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLS.C_BG,
    alignItems: "center"
  },
  positioning: {
    right: 170,
    top: 20
  },
  arrow: {
    height: 20,
    width: 20
  },

  mainTitle: {
    left: 12,
    fontSize: 24,
    fontWeight: "bold",
    bottom: 8,
    marginBottom: 10
  },
  mainImage: {
    marginTop: 10,
    width: screenWidth * 0.8,
    height: screenWidth * 0.4
  },
  mainRecipeInfo: {
    width: screenWidth,
    alignItems: "flex-start",
    backgroundColor: COLS.C5_LIGHT_TEXT,
    marginTop: 20,
    paddingTop: 0,
    paddingLeft: screenWidth * 0.1,
    paddingRight: screenWidth * 0.1,
    paddingBottom: 5
  },
  infoTextLine: {
    marginTop: 5
  },
  swipeForMoreBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLS.C_LOGO_BG,
    width: screenWidth,
    paddingLeft: screenWidth * 0.1,
    paddingRight: screenWidth * 0.1
  },
  moreChoicesContainer: {
    flexWrap: "wrap",
    width: screenWidth * 0.9,
    backgroundColor: COLS.C_BG,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  recipeCardContainer: {
    width: 150,
    height: 200,
    backgroundColor: COLS.C6_WHITE_TEXT,
    marginTop: 20,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: { width: 200, height: 20 },
    shadowOpacity: 2,
    shadowRadius: 40,
    elevation: 7
  },
  recipeCardImage: {
    width: "100%",
    height: 100
  },
  recipeCardTextContainer: {
    width: "100%",
    marginTop: 5,
    padding: 5
  },
  recipeCardTitle: {
    fontSize: 12,
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "bold"
  },
  recipeCardCookingTime: {
    fontSize: 12,
    alignItems: "center",
    alignSelf: "center"
  },
  recipeCardDifficulty: {
    fontSize: 12,
    alignItems: "center",
    marginTop: 5,
    alignSelf: "center"
  },
  icons: {
    alignSelf: "flex-end"
  }
});
