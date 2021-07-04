import React, { useEffect, useState } from "react";
import { AuthContext } from "../App.js";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
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
import { Pedometer } from "expo-sensors";

const url = "https://quotes.rest/qod";

export default function YourStats() {
  const { userID } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.graph1}>
        <Text>Calories in / calories out</Text>
      </View>
      <View style={styles.graph2}>
        <Text>Salt + sugar</Text>
      </View>
      <View style={styles.graph3}>
        <Text>Exercise level</Text>
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>
          Our deepest fear is that we are powerful beyond compare
        </Text>
        <Text style={styles.quoteAuthor}>Mary-Ann Williams</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 5,
    justifyContent: "space-around",
    backgroundColor: COLS.C_BG,
    flex: 1,
  },
  graph1: {
    width: "75%",
    height: "25%",
    backgroundColor: COLS.C_YELLOW,
  },
  graph2: {
    width: "75%",
    height: "25%",
    backgroundColor: COLS.C5_LIGHT_TEXT,
  },
  graph3: {
    width: "75%",
    height: "25%",
    backgroundColor: COLS.C_LOGO_BG,
  },
  text: {
    textAlign: "center",
  },
  icon: { textAlign: "center", alignSelf: "center" },
  quoteContainer: {
    borderColor: COLS.C5_LIGHT_TEXT,
    backgroundColor: COLS.C4_DARK_TEXT,
    borderWidth: 2,
    padding: 5,
    margin: 5,
  },
  quote: {
    textAlign: "center",
    color: COLS.C6_WHITE_TEXT,
    fontWeight: "bold",
  },
  quoteAuthor: {
    textAlign: "center",
    color: COLS.C6_WHITE_TEXT,
    fontWeight: "normal",
  },
});
