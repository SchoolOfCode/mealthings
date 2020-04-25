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
    setShowIngredients(false)
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
    margin: 5,
    marginBottom: 15,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 200, height: 20 },
    shadowOpacity: 2,
    shadowRadius: 40,
    elevation: 6,
    borderWidth: 2,
    borderRadius: 15
  },
  buttonView: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
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
    textAlign: "center",
    margin: 10,
    fontSize: 20,
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
