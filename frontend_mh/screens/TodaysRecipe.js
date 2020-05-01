import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import { COLS } from "./COLS";
import { RecipeContext } from "./HomeScreen";
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

// const todaysRecipe = {
//   recipe_id: "2",
//   name: "Really Delicious BLT",
//   ingredients: [
//     "Free range streaky bacon",
//     "Lettuce",
//     "Beef tomato",
//     "Wholemeal bread",
//     "Freshly churned butter",
//     "Mayonaise"
//   ],
//   ingredientsQuantities: [
//     "2 rashers",
//     "Several leaves",
//     "1",
//     "2 slices",
//     "",
//     ""
//   ],
//   calories: "286",
//   protein: "20",
//   carbohydrates: "160",
//   fat: "15",
//   cooking_difficulty: "1",
//   cooking_time_mins: "25",
//   method: [
//     "Slice the bread thickly",
//     "Spread the freshly churned butter on one slice of bread.",
//     "Spread mayonaise on the second slice of bread",
//     "Slice the tomato thinly",
//     "Fry the bacon until crispy",
//     "Tear the lettuce roughly by hand",
//     "layer the tomato slices, lettuce and bacon on the bread and serve as a sandwhich."
//   ]
// };

/* const todaysRecipe = {
  "calories": "579",
  "carbohydrates": "60.7",
  "cooking_difficulty": "1",
  "cooking_time_mins": 16,
  "fat": "18.7",
  "fibre": "4.3",
  "ingredients": "{\"unsalted peanuts      \",\"free-range skinless chicken breasts\",\"black bean sauce\",\"medium free-range egg\",\"tenderstem broccoli\"}",
  "method": "{\"Place a large non-stick frying pan on a medium heat and toast the peanuts as it heats up, tossing regularly, then remove and set aside, leaving the pan on the heat.\",\"Meanwhile, score the chicken lengthways at 1cm intervals, going about halfway through.\",\"In a bowl, toss the chicken with 1 tablespoon each of olive oil, red wine vinegar and black bean sauce to coat. Cook in the hot pan for 3 minutes on each side, or until dark, gnarly and cooked through.\",\"Cook the noodles in a large pan of boiling salted water according to the packet instructions.\",\"Trim the broccoli (halving any thick stalks lengthways) and add to the water for the last 2 minutes.\",\"Remove the chicken to a board. Use tongs to carefully drag the just-cooked noodles and broccoli with a bit of their water straight into the frying pan.\",\"Pound half the peanuts in a pestle and mortar until fine, toss into the pan with the remaining black bean sauce until well mixed, then divide between your plates.",\"Slice the chicken and place on top, scatter over the remaining peanuts, drizzle with a little extra virgin olive oil, and dig in.\"}",
  "name": "Chicken noodle stir-fry",
  "protein": "45.5",
  "recipe_id": 1,
  "salt": "1.4",
  "saturates": "3.4",
  "sugars": "5.5",
} */

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

function cleanString(string) {
  return string.split('","').map(x => x.replace(/"|{|}|\\|\//g, ""));
}

export default function TodaysRecipe({ navigation }) {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showMethod, setShowMethod] = useState(false);
  const allRecipes = useContext(RecipeContext);
  const recipeIndex = 0; // TODO make this increment depending on the number of days since last recipe request
  const todaysRecipe = allRecipes[recipeIndex];
  const ingredients = cleanString(todaysRecipe.ingredients);
  const method = cleanString(todaysRecipe.method);

  function change() {
    setShowIngredients(false);
    setShowMethod(true);
  }

  function change2() {
    setShowIngredients(true);
    setShowMethod(false);
  }

  const ingredientsContainer = (
    <View style={styles.ingredientsAndMethodContainer}>
      <Text style={styles.boxTitle}>Ingredients</Text>
      <View style={styles.ingredientsAndMethodView}>
        <FlatList
          style={styles.ingredientsAndMethod}
          data={ingredients}
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
          data={method}
          renderItem={({ item, index }) => <Item title={`${index}: ${item}`} />}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );

  return (
    <View contentContainerStyle={styles.container}>
      <Text style={styles.pageTitle}>{todaysRecipe.name}</Text>
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
          onPress={() => change()}
        >
          <Text style={styles.buttonText}>Method</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            showIngredients
              ? styles.selectedMethodIngredientsButton
              : styles.methodIngredientsButton
          }
          onPress={() => change2()}
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
    marginTop: 5,
    marginBottom: 15
  },
  image: {
    width: "90%",
    height: "30%",
    margin: 5,
    marginBottom: 15,
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 15,
    left: 15,
    bottom: 10
  },
  buttonView: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    top: -10
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
    width: "100%",
    height: "100%"
  },
  ingredientsAndMethodView: {
    height: "100%",
    width: "90%",
    alignSelf: "center"
  },
  ingredientsAndMethod: {
    height: "100%",
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
