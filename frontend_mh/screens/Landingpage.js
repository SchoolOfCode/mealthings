import React, { useContext } from "react";
import { AuthContext } from "../App.js";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { COLS } from "./COLS";
import { FORMAT_background } from "./FORMAT_background";
import {
  FORMAT_containers,
  FORMAT_welcomeContainer,
  FORMAT_moreChoicesContainer,
} from "./FORMAT_containers";
import {
  FORMAT_switches,
  FORMAT_notes,
  FORMAT_todaysMeal,
  FORMAT_foodOptions,
  FORMAT_swipeBar,
  FORMAT_arrow,
  FORMAT_icons,
  FORMAT_mainRecipe,
} from "./FORMAT_extraComponents";
import { FORMAT_headings, FORMAT_textBoxHeading } from "./FORMAT_headings";
import { FORMAT_images } from "./FORMAT_images";
import { FORMAT_inputField } from "./FORMAT_inputField";
import { FORMAT_logo } from "./FORMAT_logo";
import {
  FORMAT_navButton,
  FORMAT_navButtonText,
  FORMAT_navButtonBackground,
} from "./FORMAT_navButton";
import { FORMAT_text, FORMAT_fonts } from "./FORMAT_text";

export default function LandingPage({ navigation }) {
  const { logOut } = useContext(AuthContext);
  return (
    <View style={styles.background}>
      <View style={styles.margin}>
        <View style={styles.logoCircle}>
          <TouchableOpacity onPress={() => navigation.navigate("Mealplanner")}>
            <Image
              style={styles.mealThingsLogo}
              source={require("../assets/images/Mealthings.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity
            style={styles.note2}
            onPress={() => navigation.navigate("ShoppingList")}
          >
            <Text style={styles.buttonText}>Shopping List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.note}
            onPress={() => navigation.navigate("TodaysRecipe")}
          >
            <Text style={styles.buttonText}>Today's Recipe</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity
            style={styles.note}
            onPress={() => navigation.navigate("NewRecipe")}
          >
            <Text style={styles.buttonText}>Random Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.note2}
            onPress={() => navigation.navigate("YourStats")}
          >
            <Text style={styles.buttonText}>Your Stats</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.note2}>
            <Text style={styles.buttonText}>Your Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.note}
            onPress={() => {
              logOut();
            }}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.todaysMeal}
        onPress={() => navigation.navigate("TodaysRecipe")}
      >
        <Text style={styles.buttonText}>Today's Meal</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: COLS.C_BG,
    height: 1000,
  },
  mealThingsLogo: {
    width: 60,
    height: 20,
    alignSelf: "center",
  },

  margin: {
    // top: 30,
    backgroundColor: COLS.C_BG,
  },
  flex: {
    flexDirection: "row",
  },
  note: {
    width: 150,
    height: 150,
    backgroundColor: COLS.C_BG,
    margin: 10,
    alignSelf: "center",
    alignItems: "center",
    left: 20,
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
    padding: 10,
    paddingVertical: 50,
    fontSize: 20,
  },
  note2: {
    width: 150,
    height: 150,
    backgroundColor: COLS.C_BG,
    margin: 10,
    alignSelf: "center",
    alignItems: "center",
    left: 20,
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
    paddingVertical: 50,
    padding: 10,
    fontSize: 20,
  },
  todaysMeal: {
    top: 10,
    width: 200,
    padding: 10,
    backgroundColor: COLS.C_RED,
    justifyContent: "flex-end",
    alignSelf: "center",
    alignItems: "center",
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
  buttonText: {
    color: COLS.C6_WHITE_TEXT,
    textAlign: "center",
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold",
    fontSize: 18,
  },
});
