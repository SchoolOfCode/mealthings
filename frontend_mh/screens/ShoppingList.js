import React, { useContext } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import IngredientItem from "../components/IngredientItem";
import { AuthContext } from "../App";
import { COLS } from "./COLS";

import { FORMAT_navButtonText } from "./FORMAT_navButton";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLS.C_BG,
    padding: 5,
  },
  buttonText: {
    textAlign: "center",
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold",
    fontSize: 18,
  },
  formatting: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    marginBottom: 20,
    padding: 20,
    alignSelf: "center",
    backgroundColor: COLS.C_RED,
    width: screenWidth * 0.9,
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default function ShoppingList({ navigation }) {
  const { ingredientsList } = useContext(AuthContext);
  console.log("ingredientsList", ingredientsList);
  return (
    <View style={styles.container}>
      <ScrollView>
        {ingredientsList &&
          ingredientsList.sort().map((item, index) => (
            <IngredientItem
              item={item}
              index={index}
              key={
                "a" +
                item
                  .split(" ")
                  .join("")
                  .replace(/,|-|\(|\)/g, "") +
                index
              }
            />
          ))}
      </ScrollView>
      <View>
        <TouchableOpacity
          style={styles.formatting}
          onPress={() => navigation.navigate("TodaysRecipe")}
        >
          <Text style={styles.buttonText}> Start Cooking! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
