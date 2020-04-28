import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";

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

export default function App({ navigation }) {
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
            <Text>Shopping List</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.note}
            onPress={() => navigation.navigate("TodaysRecipe")}
          >
            <Text>Today's Recipe</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity
            style={styles.note}
            onPress={() => navigation.navigate("NewRecipe")}
          >
            <Text>Random Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.note2}
            onPress={() => navigation.navigate("YourStats")}
          >
            <Text>Your Stats</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.note2}>
            <Text>Your Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.note}
            onPress={() => navigation.navigate("Home")}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.todaysMeal}
        onPress={() => navigation.navigate("TodaysRecipe")}
      >
        <Text>Today's meal</Text>
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
    height: 60,
    alignSelf: "center",
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 200,
    backgroundColor: COLS.C_LOGO_BG,
    left: 170,
    bottom: 20,
  },
  margin: {
    top: 30,
    backgroundColor: COLS.C_BG,
  },
  flex: {
    flexDirection: "row",
  },
  note: {
    width: 140,
    height: 140,
    backgroundColor: COLS.C_YELLOW,
    margin: 10,
    alignSelf: "center",
    alignItems: "center",
    left: 50,
    shadowColor: COLS.C5_LIGHT_TEXT,
    padding: 10,
    paddingVertical: 50,
    fontSize: 20,
    shadowColor: "#000",
    shadowOffset: { width: 200, height: 20 },
    shadowOpacity: 2,
    shadowRadius: 40,
    elevation: 6,
  },
  note2: {
    width: 140,
    height: 140,
    backgroundColor: COLS.C_LOGO_BG,
    margin: 10,
    alignSelf: "center",
    alignItems: "center",
    left: 50,
    shadowColor: COLS.C5_LIGHT_TEXT,
    paddingVertical: 50,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 200, height: 20 },
    shadowOpacity: 2,
    shadowRadius: 40,
    elevation: 6,

    fontSize: 20,
  },
  todaysMeal: {
    top: 70,
    width: 450,
    padding: 10,
    backgroundColor: COLS.C4_DARK_TEXT,
    justifyContent: "flex-end",
    alignSelf: "center",
    alignItems: "center",
  },
});
