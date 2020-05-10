import React, { useState, useContext } from "react";
import { AuthContext } from "../App.js";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLS } from "./COLS";

function recipeCard(recipeObject, index, setTodaysRecipeIndex) {
  return (
    <View key={recipeObject.name} style={styles.recipeCardContainer}>
      <TouchableOpacity onPress={() => setTodaysRecipeIndex(index)}>
        <Image
          source={{ uri: recipeObject.url }}
          style={styles.recipeCardImage}
        />
        <View style={styles.recipeCardTextContainer}>
          <Text style={styles.recipeCardTitle}>
            {recipeObject.name.replace(/\s+/g, " ")}
          </Text>
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
  const { recipeList } = useContext(AuthContext); // Needs a todaysRecipeIndex to get at the correct recipe for the main image
  const [todaysRecipeIndex, setTodaysRecipeIndex] = useState(0);
  const todaysRecipe = recipeList[todaysRecipeIndex];
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>
        {todaysRecipe.name.replace(/\s+/g, " ")}
      </Text>
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
    alignItems: "center",
  },
  positioning: {
    right: 170,
    top: 20,
  },
  mainTitle: {
    position: "absolute",
    paddingTop: 5,
    paddingBottom: 5,
    width: "80%",
    textAlign: "center",
    backgroundColor: COLS.C_RED,
    borderRadius: 5,
    borderColor: COLS.C6_WHITE_TEXT,
    borderWidth: 2,
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: COLS.C6_WHITE_TEXT,
    zIndex: 2,
  },
  mainImage: {
    marginTop: 0,
    width: screenWidth,
    height: screenWidth * 0.7,
  },
  mainRecipeInfo: {
    width: screenWidth,
    alignItems: "flex-start",
    backgroundColor: COLS.C5_LIGHT_TEXT,
    marginTop: 0,
    paddingTop: 0,
    paddingLeft: screenWidth * 0.1,
    paddingRight: screenWidth * 0.1,
    paddingBottom: 5,
  },
  infoTextLine: {
    marginTop: 5,
  },
  swipeForMoreBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLS.C_LOGO_BG,
    width: screenWidth,
    paddingLeft: screenWidth * 0.1,
    paddingRight: screenWidth * 0.1,
  },
  moreChoicesContainer: {
    flexWrap: "wrap",
    width: screenWidth * 0.9,
    backgroundColor: COLS.C_BG,
    flexDirection: "row",
    justifyContent: "space-between",
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
    elevation: 7,
  },
  recipeCardImage: {
    width: "100%",
    height: 100,
  },
  recipeCardTextContainer: {
    width: "100%",
    marginTop: 5,
    padding: 5,
  },
  recipeCardTitle: {
    fontSize: 12,
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  recipeCardCookingTime: {
    fontSize: 12,
    alignItems: "center",
    alignSelf: "center",
  },
  recipeCardDifficulty: {
    fontSize: 12,
    alignItems: "center",
    marginTop: 5,
    alignSelf: "center",
  },
  icons: {
    alignSelf: "flex-end",
  },
});
