import React from "react";
import { AuthContext } from "../App.js";
import { StyleSheet, View, ScrollView } from "react-native";

// import FlatList from "react-native-drag-flatlist";
import MealPlanner from "../components/MealPlanner";
import Days from "../components/Days";
const colors = ["#d3f261", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
import { COLS } from "./COLS";

export default function Mealplanner() {
  // const { userID } = useContext(AuthContext);
  return (
    <ScrollView horizontal={true}>
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
});
