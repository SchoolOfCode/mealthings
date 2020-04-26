import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import { COLS } from "./COLS";

import { FORMAT_containers } from "./FORMAT_containers";
import { FORMAT_arrow } from "./FORMAT_extraComponents";
import { FORMAT_textBoxHeading } from "./FORMAT_headings";
import { FORMAT_images } from "./FORMAT_images";

import { FORMAT_navButton } from "./FORMAT_navButton";

const exampleRecipe = {
  recipe_id: "2",
  name: "Really Delicious BLT",
  ingredients: [
    "Free range streaky bacon",
    "Lettuce",
    "Beef tomato",
    "Wholemeal bread",
    "Freshly churned butter",
    "Mayonaise"
  ],
  ingredientsQuantities: [
    "2 rashers",
    "Several leaves",
    "1",
    "2 slices",
    "",
    ""
  ],
  calories: "286",
  protein: "20",
  carbohydrates: "160",
  fat: "15",
  cooking_difficulty: "1",
  cooking_time_mins: "25",
  method: [
    "Slice the bread thickly",
    "Spread the freshly churned butter on one slice of bread.",
    "Spread mayonaise on the second slice of bread",
    "Slice the tomato thinly",
    "Fry the bacon until crispy",
    "Tear the lettuce roughly by hand",
    "layer the tomato slices, lettuce and bacon on the bread and serve as a sandwhich."
  ]
};

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function TodaysRecipe({ navigation }) {
  const [showIngredients, setShowIngredients] = seState(true);

  function change() {
    setShowIngredients(false);
  }

  const ingredientsContainer = (
    <View style={styles.ingredientsAndMethodContainer}>
      <Text style={styles.boxTitle}>Ingredients</Text>
      <View style={styles.ingredientsAndMethodView}>
        <FlatList
          style={styles.ingredientsAndMethod}
          data={exampleRecipe.ingredients}
          renderItem={({ item }) => <Item title={`\u2022 ${item}`} />}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );

  const methodContainer = (
    <View style={styles.ingredientsAndMethodContainer}>
      <Text style={styles.boxTitle}>Method</Text>
      <View style={styles.ingredientsAndMethodView}>
        <FlatList
          style={styles.ingredientsAndMethod}
          data={exampleRecipe.method}
          renderItem={({ item, index }) => <Item title={`${index}: ${item}`} />}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.positioning}>
        <TouchableOpacity onPress={() => navigation.navigate("LandingPage")}>
          <Image
            style={styles.arrow}
            source={require("../assets/images/goback.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.pageTitle}>{exampleRecipe.name}</Text>
      <Image
        style={styles.image}
        source={require("../assets/images/posh-blt.jpg")}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={
            showIngredients
              ? styles.methodIngredientsButton
              : styles.selectedMethodIngredientsButton
          }
          onPress={() => setShowIngredients(!showIngredients)}
        >
          <Text style={styles.buttonText}>Method</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            showIngredients
              ? styles.selectedMethodIngredientsButton
              : styles.methodIngredientsButton
          }
          onPress={() => setShowIngredients(!showIngredients)}
        >
          <Text style={styles.buttonText}>Ingredients</Text>
        </TouchableOpacity>
      </View>
      {showIngredients ? ingredientsContainer : methodContainer}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: FORMAT_containers.F_container_flex,
    alignItems: FORMAT_containers.F_container_alignItems,
    backgroundColor: COLS.C_BG,
    justifyContent: FORMAT_containers.F_container_justifyContent,
    margin: FORMAT_containers.F_container_margin
  },
  positioning: {
    right: 170,
    top: 20
  },
  arrow: {
    height: FORMAT_arrow.F_arrow_height,
    width: FORMAT_arrow.F_arrow_width,
    left: FORMAT_arrow.F_arrow_left,
    top: FORMAT_arrow.F_arrow_top,
    marginBottom: FORMAT_arrow.F_arrow_marginBottom
  },
  formatting: {
    marginTop: 10
  },

  pageTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: -10,
    marginBottom: 15
  },
  image: {
    width: "90%",
    height: "30%",
    margin: FORMAT_images.F_image_height,
    marginBottom: FORMAT_images.F_image_marginBottom,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: FORMAT_images.F_image_shadowOffset,
    shadowOpacity: FORMAT_images.F_image_shadowOpacity,
    shadowRadius: FORMAT_images.F_image_shadowRadius,
    elevation: FORMAT_images.F_image_elevation,
    borderWidth: FORMAT_images.F_image_borderWidth,
    borderRadius: FORMAT_images.F_image_borderRadius
  },
  buttonView: {
    flexDirection: FORMAT_navButton.F_navButton_flexDirection,
    height: 50,
    justifyContent: FORMAT_navButton.F_navButton_justifyContent,
    alignItems: FORMAT_navButton.F_navButton_alignItems
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 20,
    padding: 12
  },
  methodIngredientsButton: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: "50%"
  },
  selectedMethodIngredientsButton: {
    backgroundColor: COLS.C_RED,
    width: "50%"
  },
  boxTitle: {
    textAlign: FORMAT_textBoxHeading.F_textBoxHeading_textAlign,
    margin: FORMAT_textBoxHeading.F_textBoxHeading_margin,
    fontSize: FORMAT_textBoxHeading.F_textBoxHeading_fontSize,
    backgroundColor: COLS.C_BG
  },
  ingredientsAndMethodContainer: {
    width: "100%"
  },
  ingredientsAndMethodView: {
    width: "90%",
    alignSelf: "center"
  },
  ingredientsAndMethod: {
    margin: 15,
    marginTop: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 200, height: 20 },
    shadowOpacity: 2,
    shadowRadius: 40,
    elevation: 6,
    borderColor: COLS.C4_DARK_TEXT,
    borderStyle: "solid",
    backgroundColor: COLS.C6_WHITE_TEXT
  }
});
