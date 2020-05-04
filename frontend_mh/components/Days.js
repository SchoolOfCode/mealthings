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
    backgroundColor: "#5B625A",
    borderBottomColor: COLS.C_BG,
    borderBottomWidth: 4,
  },
  spacing: {
    marginVertical: 34,
    top: 75,
    borderBottomColor: "white",
    color: "white",
    borderBottomWidth: 4,
    borderRadius: 5,
    shadowOffset: { width: 30, height: 10 },
    shadowColor: "white",
    shadowOpacity: 7.0,
  },
});
