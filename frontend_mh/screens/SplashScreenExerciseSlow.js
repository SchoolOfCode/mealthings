import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { COLS } from "./COLS";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 5,
    justifyContent: "space-around",
    backgroundColor: COLS.C_BG,
    flex: 1,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200,
    padding: 20,
    backgroundColor: COLS.C_LOGO_BG,
  },
  textRect: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: "50%",
    padding: 15,
    margin: 5,
  },
  text: {
    textAlign: "center",
  },
  icon: { textAlign: "center", alignSelf: "center" },
});

export default function SplashScreenExerciseSlow() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <FontAwesome name="walking" style={styles.icon} size={150} />
      </View>
      <View style={styles.textRect}>
        <Text>
          It's time to get outside and move slowly (i.e. go for a walk!)
        </Text>
      </View>
    </View>
  );
}
