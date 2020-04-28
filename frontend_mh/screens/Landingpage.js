import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
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
    height: FORMAT_background.F_background_height
  },
  mealThingsLogo: {
    width: FORMAT_logo.F_logo_width,
    height: FORMAT_logo.F_logo_height,
    alignSelf: FORMAT_logo.F_logoCircle_alignSelf
  },
  logoCircle: {
    width: FORMAT_logo.F_logoCircle_width,
    height: FORMAT_logo.F_logoCircle_height,
    borderRadius: FORMAT_logo.F_logoCircle_borderRadius,
    backgroundColor: COLS.C_LOGO_BG,
    left: FORMAT_logo.F_logoCircle_left,
    bottom: FORMAT_logo.F_logoCircle_bottom
  },
  margin: {
    top: 30,
    backgroundColor: COLS.C_BG
  },
  flex: {
    flexDirection: FORMAT_navButton.F_navButton_flexDirection
  },
  notes: {
    width: FORMAT_notes.F_note_width,
    height: FORMAT_notes.F_note_height,
    backgroundColor: COLS.C_LOGO_BG,
    margin: FORMAT_notes.F_note_margin,
    alignSelf: FORMAT_notes.F_note_alignSelf,
    alignItems: FORMAT_notes.F_note_alignItems,
    left: FORMAT_notes.F_note_left,
    shadowColor: COLS.C5_LIGHT_TEXT,
    paddingVertical: FORMAT_notes.F_note_paddingVertical,
    padding: FORMAT_notes.F_note_padding,
    shadowColor: FORMAT_notes.F_note_shadowColor,
    shadowOffset: {
      width: FORMAT_notes.F_note_width,
      height: FORMAT_notes.F_note_height
    },
    shadowOpacity: FORMAT_notes.F_note_shadowOpacity,
    shadowRadius: FORMAT_notes.F_note_shadowRadius,
    elevation: FORMAT_notes.F_note_elevation
  },
  note2: {
    width: FORMAT_notes.F_note_width,
    height: FORMAT_notes.F_note_height,
    backgroundColor: COLS.C_LOGO_BG,
    margin: FORMAT_notes.F_note_margin,
    alignSelf: FORMAT_notes.F_note_alignSelf,
    alignItems: FORMAT_notes.F_note_alignItems,
    left: FORMAT_notes.F_note_left,
    shadowColor: COLS.C5_LIGHT_TEXT,
    paddingVertical: FORMAT_notes.F_note_paddingVertical,
    padding: FORMAT_notes.F_note_padding,
    shadowColor: FORMAT_notes.F_note_shadowColor,
    shadowOffset: {
      width: FORMAT_notes.F_note_width,
      height: FORMAT_notes.F_note_height
    },
    shadowOpacity: FORMAT_notes.F_note_shadowOpacity,
    shadowRadius: FORMAT_notes.F_note_shadowRadius,
    elevation: FORMAT_notes.F_note_elevation,

    fontSize: FORMAT_notes.F_note_fontSize
  },
  todaysMeal: {
    top: FORMAT_todaysMeal.F_todaysMeal_top,
    width: FORMAT_todaysMeal.F_todaysMeal_width,
    padding: FORMAT_todaysMeal.F_todaysMeal_padding,
    backgroundColor: COLS.C4_DARK_TEXT,
    justifyContent: FORMAT_todaysMeal.F_todaysMeal_justifyContent,
    alignSelf: FORMAT_todaysMeal.F_todaysMeal_alignSelf,
    alignItems: FORMAT_todaysMeal.F_todaysMeal_alignItems
  }
});
