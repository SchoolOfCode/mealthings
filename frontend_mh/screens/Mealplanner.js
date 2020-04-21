import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { COLS } from "./COLS";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList />

      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLS.C_YELLOW,
    alignItems: "center",
    justifyContent: "center",
  },
});
