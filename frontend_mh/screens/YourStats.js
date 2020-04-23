import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { COLS } from "./COLS";

export default function YourStats() {
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
