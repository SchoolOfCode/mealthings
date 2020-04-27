import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { COLS } from "./COLS";
import { FORMAT_background } from "./FORMAT_background";

import { FORMAT_notes } from "./FORMAT_extraComponents";
import { FORMAT_logo } from "./FORMAT_logo";
import { FORMAT_navButton } from "./FORMAT_navButton";
import { FORMAT_todaysMeal } from "./FORMAT_extraComponents";

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
            style={styles.notes}
            onPress={() => navigation.navigate("ShoppingList")}
          >
            <Text>Shopping List</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.notes}
            onPress={() => navigation.navigate("TodaysRecipe")}
          >
            <Text>Today's Recipe</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity
            style={styles.notes}
            onPress={() => navigation.navigate("NewRecipe")}
          >
            <Text>Random Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.notes}
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
            style={styles.notes}
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
    alignSelf: FORMAT_logo.F_logo_alignSelf,
    alignItems: FORMAT_logo.F_logo_alignItems,
    margin: FORMAT_logo.F_logo_margin,
    justifyContent: FORMAT_logo.F_logo_justifyContent
  },
  logoCircle: {
    left: FORMAT_logo.F_logoCircle_left,
    bottom: FORMAT_logo.F_logoCircle_bottom,
    width: FORMAT_logo.F_logoCircle_width,
    height: FORMAT_logo.F_logoCircle_height,
    borderRadius: FORMAT_logo.F_logoCircle_borderRadius,
    backgroundColor: COLS.C_LOGO_BG
  },
  margin: {
    top: FORMAT_navButton.F_navButtonText_padding,
    backgroundColor: COLS.C_BG
  },
  flex: {
    flexDirection: FORMAT_navButton.F_navButtonText_flexDirection
  },
  notes: {
    width: FORMAT_notes.F_note_width,
    height: FORMAT_notes.F_note_widthF_note_height,
    backgroundColor: COLS.C_LOGO_BG,
    margin: FORMAT_notes.F_note_widthF_note_margin,
    alignSelf: FORMAT_notes.F_note_widthF_note_alignSelf,
    alignItems: FORMAT_notes.F_note_widthF_note_alignItems,
    left: FORMAT_notes.F_note_widthF_note_left,
    shadowColor: COLS.C5_LIGHT_TEXT,
    paddingVertical: FORMAT_notes.F_note_widthF_note_paddingVertical,
    padding: FORMAT_notes.F_note_widthF_note_padding,
    shadowColor: "#000",
    shadowOffset: FORMAT_notes.F_note_widthF_note_shadowOffset,
    shadowOpacity: FORMAT_notes.F_note_widthF_note_shadowOpacity,
    shadowRadius: FORMAT_notes.F_note_widthF_note_shadowRadius,
    elevation: FORMAT_notes.F_note_widthF_note_elevation,
    fontSize: FORMAT_notes.F_note_widthF_note_fontSize
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
