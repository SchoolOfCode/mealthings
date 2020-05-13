import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { COLS } from "../screens/COLS";

export default function Days() {
  return (
    <View style={styles.row}>
      <Text style={styles.spacing}> Monday</Text>
      <Text style={styles.spacing}> Tuesday</Text>
      <Text style={styles.spacing}> Wednesday </Text>
      <Text style={styles.spacing}> Thursday</Text>
      <Text style={styles.spacing}> Friday </Text>
      <Text style={styles.spacing}> Saturday</Text>
      <Text style={styles.spacing}> Sunday </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "column",
    backgroundColor: "#BCB5C3",
    borderBottomColor: "#BCB5C3",
    borderBottomWidth: 4,
  },
  spacing: {
    marginVertical: 39,
    bottom: "3.5%",
    borderTopColor: "white",
    color: "white",
    borderTopWidth: 2,
    bottom: 40,
  },
});
