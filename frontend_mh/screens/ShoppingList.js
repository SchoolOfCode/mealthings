import React, { useContext } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
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
  },
  buttonText: {
    textAlign: "center",
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold",
    fontSize: 18,
  },
  formatting: {
    marginBottom: 20,
    top: "2%",
    padding: 20,
    alignSelf: "center",
    backgroundColor: "#BCB5C3",
    width: screenWidth * 0.95,
    opacity: 2,
  },
});

export default function ShoppingList({ navigation }) {
  const { ingredientsList } = useContext(AuthContext);
  console.log("ingredientsList", ingredientsList);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/lemon.jpg")}
        style={{ width: "100%", height: "100%", opacity: 0.6 }}
      >
        <ScrollView>
          {ingredientsList &&
            ingredientsList.sort().map((item, index) => (
              <IngredientItem
                style={{ position: "absolute" }}
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
        <TouchableOpacity
          style={styles.formatting}
          onPress={() => navigation.navigate("TodaysRecipe")}
        >
          <Text style={styles.buttonText}> Start Cooking! </Text>
        </TouchableOpacity>
      </ImageBackground>
      <View></View>
    </View>
  );
}
