import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLS } from "./COLS";

export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.margin}>
        <View style={styles.logoCircle}>
          <Image
            style={styles.mealThingsLogo}
            source={require("../assets/images/Mealthings.png")}
          />
        </View>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.note2}>
            <Text>Shopping List</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.note}>
            <Text>Today's Recipe</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.note}>
            <Text>Random Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.note2}>
            <Text>Your Stats</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.note2}>
            <Text>Change Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.note}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.todaysMeal}>
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
    padding: 50,
    fontSize: 20,
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
    padding: 50,
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

// create more views holding two touchableOpacities
// having alternating colors for buttons
// do positioning
// cretae a segment that enables dummy data to pass through
