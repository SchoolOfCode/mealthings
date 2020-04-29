import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import React from "react";
import { COLS } from "../screens/COLS";

export default function app() {
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
    backgroundColor: COLS.C_BG,
    borderBottomColor: COLS.C_BG,
    borderBottomWidth: 4,
  },
  spacing: {
    marginVertical: 28,
    top: 42,
    borderBottomColor: "black",

    borderBottomWidth: 4,
  },
});
