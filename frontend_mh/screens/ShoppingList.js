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

const dummyData = [
  "4 tablespoon Parmesan cheese",
  "50 gram Parmesan cheese",
  "0.5 a bunch fresh basil",
  "4 anchovy fillets in oil",
  "2 large aubergines",
  "2 tablespoon baby capers in brine",
  "800 gram baby new potatoes",
  "450 gram baby spinach",
  "150 gram basmati rice",
  "2 large bulbs of fennel",
  "30 gram bunch of fresh basil",
  "150 gram cheddar cheese",
  "30 gram cheddar or parmesan cheese",
  "200 gram chorizo",
  "250 gram cooked lentils",
  "100 milliliter double cream",
  "150 gram dried farfalle",
  "2 tablespoon extra virgin olive oil",
  "200 gram free-range chicken legs",
  "2 large free-range eggs",
  "480 gram free-range skinless chicken breasts",
  "15 gram fresh basil",
  "15 gram fresh mint",
  "1.5 fresh mixed-colour chillies",
  "1 fresh red chilli",
  "15 gram fresh rosemary",
  "9 clove garlic",
  "75 gram gorgonzola cheese",
  "400 gram green beans",
  "4 teaspoon green pesto",
  "2 tablespoon heaped tablespoons korma curry paste",
  "2 tablespoon hoisin sauce",
  "280 gram jar of artichoke hearts in oil",
  "1600 gram lamb shanks",
  "400 gram large cooked peeled king prawns",
  "2 leeks",
  "2 lemons",
  "9 tablespoon olive oil",
  "1 onion",
  "300 gram orzo",
  "100 gram paneer cheese",
  "400 milliliter passata",
  "200 gram pearl barley",
  "100 gram plain flour",
  "8 rashers of higher-welfare smoked pancetta",
  "2 red chicory",
  "3 regular oranges , or blood oranges",
  "600 gram ripe cherry tomatoes , on the vine",
  "300 gram ripe mixed-colour cherry tomatoes",
  "2 teaspoon rogan josh curry paste",
  "320 gram sheet of all-butter puff pastry , (cold)",
  "4 sheets of filo pastry",
  "30 gram shelled unsalted walnut halves",
  "2 tablespoon sherry vinegar",
  "300 gram sirloin steak",
  "250 gram small frozen cooked peeled prawns , from sustainable sources",
  "200 gram spinach",
  "60 gram spring onions",
  "16 spring onions",
  "4 large squid",
  "40 gram stale ciabatta",
  "2 super-ripe pears",
  "2 teaspoon sweet smoked paprika",
  "400 milliliter tin of light coconut milk",
  "270 gram tins of plum tomatoes",
  "1 tablespoon umami paste",
  "400 gram undyed smoked haddock , skin off, from sustainable sources",
  "20 gram unsalted cashew nuts",
  "30 gram unsalted pistachios",
  "2 tablespoon virgin olive oil",
  "300 gram white fish fillets , such as cod, skin off, pin-boned, from sustainable sources",
  "200 gram wholemeal bread",
  "1 x 1.2 kg side of salmon, skin off, pin-boned",
  "500 milliliter your favourite ale",
];

export default function ShoppingList({ navigation }) {
  let { ingredientsList } = useContext(AuthContext);
  if (!ingredientsList || ingredientsList.length < 1) {
    console.log("ingredientsList was falsy or or shorter than length 1");
    ingredientsList = dummyData;
  }
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
