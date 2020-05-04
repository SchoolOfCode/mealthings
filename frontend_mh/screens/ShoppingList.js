import React, { useState, useContext } from "react";
import { AuthContext } from "../App.js";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLS } from "./COLS";
import { FORMAT_background } from "./FORMAT_background";
import {
  FORMAT_containers,
  FORMAT_welcomeContainer,
  FORMAT_moreChoicesContainer
} from "./FORMAT_containers";
import {
  FORMAT_switches,
  FORMAT_notes,
  FORMAT_todaysMeal,
  FORMAT_foodOptions,
  FORMAT_swipeBar,
  FORMAT_arrow,
  FORMAT_icons,
  FORMAT_mainRecipe
} from "./FORMAT_extraComponents";
import { FORMAT_headings, FORMAT_textBoxHeading } from "./FORMAT_headings";
import { FORMAT_images } from "./FORMAT_images";
import { FORMAT_inputField } from "./FORMAT_inputField";
import { FORMAT_logo } from "./FORMAT_logo";
import {
  FORMAT_navButton,
  FORMAT_navButtonText,
  FORMAT_navButtonBackground
} from "./FORMAT_navButton";
import { FORMAT_text, FORMAT_fonts } from "./FORMAT_text";

function IngredientItem({ item }) {
  const [bought, setBought] = useState(false);

  const theString = `${item.quantity} ${item.unit} ${item.ingredient}`;
  return (
    <TouchableOpacity
      onPress={() => setBought(!bought)}
      key={theString
        .split(" ")
        .join("")
        .replace(/,|-|\(|\)/g, "")}
    >
      <View style={styles.ingredientItemContainer}>
        <View style={bought ? styles.circleChecked : styles.circle}></View>
        <Text style={bought ? styles.itemTextChecked : styles.itemText}>
          {theString}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function cleanString(string) {
  return string.split('","').map(x => x.replace(/"|{|}|\\|\//g, ""));
}

export default function ShoppingList({ navigation }) {
  const { userID, recipeList, ingredientsList } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        {ingredientsList.sort().map((item) => (
          <IngredientItem item={item} />
        ))}
      </ScrollView>

      <View>
        <TouchableOpacity
          style={styles.formatting}
          onPress={() => navigation.navigate("TodaysRecipe")}
        >
          <Text> Start Cooking </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLS.C_BG,
    padding: 5
  },

  arrow: {
    height: 30,
    width: 30,
    left: 10,
    top: 20,
    marginBottom: 40
  },
  formatting: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    marginBottom: 20,
    padding: 20,
    alignItems: "center"
  },
  ingredientItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10
  },
  circle: {
    marginRight: 10,
    height: 25,
    width: 25,
    borderRadius: 25,
    borderColor: COLS.C6_WHITE_TEXT,
    borderStyle: "solid",
    borderWidth: 3
  },
  circleChecked: {
    marginRight: 10,
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: COLS.C6_WHITE_TEXT,
    borderColor: COLS.C6_WHITE_TEXT,
    borderStyle: "solid",
    borderWidth: 3
  },
  itemTextChecked: {
    fontSize: 18,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: COLS.C6_WHITE_TEXT
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLS.C6_WHITE_TEXT
  }
});
