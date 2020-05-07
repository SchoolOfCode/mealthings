import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { COLS } from "./COLS";

import MealPlanner from "../components/MealPlanner";
import Days from "../components/Days";

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
  },
  color: {
    backgroundColor: COLS.C_BG,
  },
});
