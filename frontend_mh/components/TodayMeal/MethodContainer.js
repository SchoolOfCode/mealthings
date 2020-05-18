import React, { useState, useContext } from "react";
import { AuthContext } from "../../App.js";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { COLS } from "../../screens/COLS";

function Item({ ingredient, quantity, leadingChar = "\u2022" }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>
        {<Text style={{ fontFamily: "Muli-Bold" }}>{`${leadingChar} `}</Text>}
        {`${quantity} ${ingredient || ""}\n`}
      </Text>
    </View>
  );
}

function cleanString(string) {
  return string.split('","').map((x) => x.replace(/"|{|}|\\|\//g, ""));
}

export default function TodaysRecipe() {
  const { recipeList } = useContext(AuthContext);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showMethod, setShowMethod] = useState(false);
  const recipeIndex = 0; // TODO make this increment depending on the number of days since last recipe request
  const todaysRecipe = recipeList[recipeIndex];
  const ingredients = cleanString(todaysRecipe.ingredients);
  const quantities = cleanString(todaysRecipe.ingredientsquantities);
  const method = cleanString(todaysRecipe.method);

  function changeButtonColour() {
    setShowIngredients(false);
    setShowMethod(true);
  }

  function changeButtonColour2() {
    setShowIngredients(true);
    setShowMethod(false);
  }

  const ingredientsContainer = (
    <View style={styles.ingredientsAndMethodContainer}>
      <ScrollView style={styles.ingredientsAndMethodView}>
        {ingredients.map((item, index) => (
          <Item
            ingredient={item}
            quantity={quantities[index]}
            key={
              item
                .split(" ")
                .join("")
                .replace(/,|-|\(|\)/g, "") +
              "" +
              index
            }
          />
        ))}
      </ScrollView>
    </View>
  );

  const methodContainer = (
    <ScrollView style={styles.ingredientsAndMethodView}>
      <View style={styles.ingredientsAndMethodContainer}>
        {method.map((item, index) => (
          <Item
            quantity={item}
            leadingChar={"Step " + (index + 1)}
            key={
              item
                .split(" ")
                .join("")
                .replace(/,|-|\(|\)/g, "") +
              "" +
              index
            }
          />
        ))}
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>
        {todaysRecipe.name.replace(/\s+/g, " ")}
      </Text>
      <Image style={styles.image} source={{ uri: todaysRecipe.url }} />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={
            showIngredients
              ? styles.methodIngredientsButton
              : styles.selectedMethodIngredientsButton
          }
          onPress={() => changeButtonColour()}
        >
          <Text style={styles.buttonText}>Method</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            showIngredients
              ? styles.selectedMethodIngredientsButton
              : styles.methodIngredientsButton
          }
          onPress={() => changeButtonColour2()}
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
    top: "38.1%",
    position: "absolute",
    zIndex: 2,
    padding: 5,
    textAlign: "center",
    fontSize: 24,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

    color: "black",
    fontFamily: "Muli-Bold",

    marginTop: 5,
    backgroundColor: "white",
    width: "90%",
  },
  image: {
    width: "100%",
    height: "45%",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    width: "90%",
    backgroundColor: "white",
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 20,
    padding: 12,

    color: "black",
    fontFamily: "Muli-Bold",
  },
  methodIngredientsButton: {
    width: "50%",
  },
  selectedMethodIngredientsButton: {
    backgroundColor: "#BCB5C3",
    width: "50%",

    // borderColor: "grey",
    // borderWidth: 1,
  },
  boxTitle: {
    textAlign: "center",
    margin: 10,
    fontSize: 20,
    color: COLS.C6_WHITE_TEXT,
    fontFamily: "Muli-Bold",
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
    // shadowColor: "#000",
    // // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 2,
    // elevation: 5,
    height: 30,
  },
  ingredientsAndMethodContainer: {
    width: "100%",
    height: "100%",
  },
  ingredientsAndMethodView: {
    height: "100%",
    width: "90%",
    alignSelf: "center",

    backgroundColor: "white",
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  ingredientsAndMethod: {
    height: "100%",
    backgroundColor: "C6_WHITE_TEXT",
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
    backgroundColor: COLS.C6_WHITE_TEXT,
    fontSize: 16,
    fontFamily: "Muli-Medium",
  },
});
