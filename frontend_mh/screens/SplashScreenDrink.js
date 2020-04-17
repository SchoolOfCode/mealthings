import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { COLS } from "./COLS";

export default function SplashScreenDrink() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <FontAwesome name="glass-whiskey" size={150} style={styles.icon} />
      </View>
      <View style={styles.textRect}>
        <Text>It's time to drink some water!</Text>
      </View>
    </View>
  );
}

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
