import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import { AuthContext } from "../App.js";
import { COLS } from "./COLS";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLS.C_BG,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  mainTitle: {
    position: "absolute",
    paddingTop: 5,
    paddingBottom: 5,
    width: "80%",
    textAlign: "center",
    backgroundColor: COLS.C_RED,
    borderRadius: 5,
    fontSize: 24,
    fontWeight: "bold",
    color: COLS.C6_WHITE_TEXT,
    zIndex: 2,
    justifyContent: "space-around",
  },
  mainImage: {
    width: screenWidth,
    height: screenWidth * 0.7,
  },
  mainRecipeInfo: {
    width: "90%",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingLeft: screenWidth * 0.1,
    paddingRight: screenWidth * 0.1,
    paddingBottom: 10,
    paddingTop: 10,
    bottom: 40,
  },
  swipeForMoreBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "90%",
    paddingLeft: screenWidth * 0.1,
    paddingRight: screenWidth * 0.1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    bottom: "10%",
    backgroundColor: "#BCB5C3",
  },
  moreChoicesContainer: {
    flexWrap: "wrap",
    width: screenWidth * 0.95,
    backgroundColor: COLS.C_BG,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 70,
  },
  recipeCardContainer: {
    width: "40%",
    height: "13%",
    backgroundColor: COLS.C6_WHITE_TEXT,
    marginBottom: 25,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    overflow: "hidden",
  },
  recipeCardImage: {
    width: "100%",
    height: 100,
  },
  recipeCardTextContainer: {
    width: "100%",
    marginTop: 5,
    padding: 5,
    textAlign: "center",
  },
  recipeCardTitle: {
    fontSize: 12,
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
    fontWeight: "bold",
  },
  recipeCardCookingTime: {
    fontSize: 12,
    alignSelf: "center",
  },
  recipeCardDifficulty: {
    fontSize: 12,
    marginTop: 5,
    alignSelf: "center",
  },
});

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
      </TouchableOpacity>
    </View>
  );
}

export default function NewRecipe() {
  const { recipeList } = useContext(AuthContext); // Needs a todaysRecipeIndex to get at the correct recipe for the main image
  const [todaysRecipeIndex, setTodaysRecipeIndex] = useState(0);
  const todaysRecipe = recipeList[todaysRecipeIndex];
  return (
    <View style={styles.container}>
      <Image source={{ uri: todaysRecipe.url }} style={styles.mainImage} />

      <View style={styles.mainRecipeInfo}>
        <Text style={styles.title}>
          {todaysRecipe.name.replace(/\s+/g, " ")}
        </Text>

        <View style={styles.row}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="clock"
              size={15}
              style={{ left: "-10%", bottom: "-1.5%", color: "#BCB5C3" }}
            />
            <Text
              style={{ fontWeight: "bold" }}
            >{`${todaysRecipe.cooking_time_mins} minutes`}</Text>
            <MaterialCommunityIcons
              name="fire"
              size={20}
              style={{ left: "100%", color: "#BCB5C3" }}
            />
            <Text
              style={{ fontWeight: "bold", left: "100%" }}
            >{`${todaysRecipe.calories} kcal`}</Text>

            <Text style={{ fontWeight: "bold", left: "370%" }}>
              {todaysRecipe.cooking_difficulty < 2
                ? "Easy"
                : todaysRecipe.cooking_difficulty < 4
                ? "Medium"
                : "Hard"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.swipeForMoreBar}>
        <Text style={{ alignSelf: "center" }}>Scroll for more choices</Text>
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
