import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { COLS } from "./COLS";

const exampleRecipe = {
  recipe_id: "2",
  name: "Really Delicious BLT",
  ingredients: [
    "Free range streaky bacon",
    "Lettuce",
    "Beef tomato",
    "Wholemeal bread",
    "Freshly churned butter",
    "Mayonaise",
  ],
  ingredientsQuantities: [
    "2 rashers",
    "Several leaves",
    "1",
    "2 slices",
    "",
    "",
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
    "layer the tomato slices, lettuce and bacon on the bread and serve as a sandwhich.",
  ],
};

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function TodaysRecipe() {
  const [showIngredients, setShowIngredients] = useState(true);

  const ingredientsContainer = (
    <View style={styles.ingredientsAndMethodContainer}>
      <Text style={styles.boxTitle}>Ingredients</Text>
      <View style={styles.ingredientsAndMethodView}>
        <FlatList
          style={styles.ingredientsAndMethod}
          data={exampleRecipe.ingredients}
          renderItem={({ item }) => <Item title={`\u2022 ${item}`} />}
          keyExtractor={(item) => item}
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
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
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
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
  image: {
    width: "80%",
    height: "30%",
    margin: 5,
    marginBottom: 15,
    marginTop: 15,
    borderColor: COLS.C4_DARK_TEXT,
    borderWidth: 2,
  },
  buttonView: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 20,
    padding: 12,
  },
  methodIngredientsButton: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: "50%",
  },
  selectedMethodIngredientsButton: {
    backgroundColor: COLS.C_LOGO_BG,
    width: "50%",
  },
  boxTitle: {
    textAlign: "center",
    margin: 10,
    fontSize: 20,
    backgroundColor: COLS.C_BG,
  },
  ingredientsAndMethodContainer: {
    width: "100%",
  },
  ingredientsAndMethodView: {
    width: "90%",
    alignSelf: "center",
  },
  ingredientsAndMethod: {
    margin: 15,
    marginTop: 5,
    padding: 5,
    borderWidth: 2,
    borderColor: COLS.C4_DARK_TEXT,
    borderStyle: "solid",
    backgroundColor: COLS.C5_LIGHT_TEXT,
  },
});
