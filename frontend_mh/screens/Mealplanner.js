import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { COLS } from "./COLS";

import MealPlanner from "../components/Mealplanner/index";
import Days from "../components/Days/index";

export default function Mealplanner() {
  return (
    <ScrollView style={styles.color} horizontal={true}>
      <View style={styles.rows}>
        <Days />
        <MealPlanner />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  rows: {
    flexDirection: "row",
    backgroundColor: COLS.C_BG,
    margin: 0,
  },
});
