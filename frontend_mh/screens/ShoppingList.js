import React, { useContext } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";

import IngredientItem from "../components/IngredientItem";
import { AuthContext } from "../App";
import { COLS } from "./COLS";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLS.C_BG,
  },
  formatting: {
    marginBottom: 20,
    padding: 20,
    alignSelf: "center",
    backgroundColor: "#BCB5C3",
    width: screenWidth * 0.95,
    opacity: 2,
  },
});

export default function ShoppingList() {
  let { ingredientsList } = useContext(AuthContext);
  ingredientsList = ingredientsList.map((x) => x.replace("0.5", "1/2"));
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
      </ImageBackground>
    </View>
  );
}
