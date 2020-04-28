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
import MealPlanner from "../components/MealPlanner";

const colors = ["#d3f261", "#7cb305", "#5b8c00", "#3f6600", "#254000"];

function App() {
  return (
    <ScrollView horizontal={true}>
      <MealPlanner />
    </ScrollView>
  );
}

export default App;
