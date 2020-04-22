import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView
} from "react-native";

// import FlatList from "react-native-drag-flatlist";
import Monday from "../components/MealPlannerMonday";
import Tuesday from "../components/MealPlannerTuesday";
import Wednesday from "../components/MealPlannerWednesday";
import Thursday from "../components/MealPlannerThursday";
import Friday from "../components/MealPlannerFriday";
import Saturday from "../components/MealPlannerSaturday";
import Sunday from "../components/MealPlannerSunday";

const colors = ["#d3f261", "#7cb305", "#5b8c00", "#3f6600", "#254000"];

function App() {
  return (
    <ScrollView horizontal={true}>
      <Monday />
      <Tuesday />
      <Wednesday />
      <Thursday />
      <Friday />
      <Saturday />
      <Sunday />
    </ScrollView>
  );
}

export default App;
