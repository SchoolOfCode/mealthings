import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { COLS } from "./COLS";
import { FORMAT_containers } from "./FORMAT_containers";
import { FORMAT_logo } from "./FORMAT_logo";

export default function SplashScreenExerciseQuick() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <FontAwesome name="running" size={150} style={styles.icon} />
      </View>
      <View style={styles.textRect}>
        <Text style={styles.text}>
          It's time to get outside and move quickly (i.e. go for a run!)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: FORMAT_containers.F_container_flex,
    backgroundColor: COLS.C_BG,
    justifyContent: FORMAT_containers.F_container_justifyContent,
    margin: FORMAT_containers.F_container_margin
  },
  circle: {
    left: FORMAT_logo.F_logoCircle_left,
    bottom: FORMAT_logo.F_logoCircle_bottom,
    width: FORMAT_logo.F_logoCircle_width,
    height: FORMAT_logo.F_logoCircle_height,
    borderRadius: FORMAT_logo.F_logoCircle_borderRadius,
    backgroundColor: COLS.C_LOGO_BG
  },
  textRect: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: "50%",
    padding: 15,
    margin: 5
  },
  text: {
    textAlign: "center"
  },
  icon: { textAlign: "center", alignSelf: "center" }
});
