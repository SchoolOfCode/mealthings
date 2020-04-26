import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLS } from "./COLS";

import {
  FORMAT_containers,
  FORMAT_welcomeContainer
} from "./FORMAT_containers";
import { FORMAT_logo } from "./FORMAT_logo";
import { FORMAT_navButtonBackground } from "./FORMAT_navButton";

export default function SplashSuccess({ navigation, route }) {
  const { dataPlusPlus } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <View style={styles.logoCircle}>
          <Image source={require("../assets/images/Mealthings.png")} />
        </View>
        <Text style={styles.tagLine}>Eat Well. Feel Amazing.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBackground}
          onPress={() => navigation.navigate("Allergies", { dataPlusPlus })}
        >
          <Text>Welcome aboard Let's get Started...</Text>
        </TouchableOpacity>
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
  mealThingsLogo: {
    width: FORMAT_logo.F_logo_width,
    height: FORMAT_logo.F_logo_height,
    alignSelf: FORMAT_logo.F_logo_alignSelf,
    alignItems: FORMAT_logo.F_logo_alignItems,
    margin: FORMAT_logo.F_logo_margin,
    justifyContent: FORMAT_logo.F_logo_justifyContent
  },
  logoCircle: {
    left: FFORMAT_logo.F_logoCircle_left,
    bottom: FORMAT_logo.F_logoCircle_bottom,
    width: FORMAT_logo.F_logoCircle_width,
    height: FORMAT_logo.F_logoCircle_height,
    borderRadius: FORMAT_logo.F_logoCircle_borderRadius,
    backgroundColor: COLS.C_LOGO_BG
  },
  tagLine: {
    color: COLS.C5_LIGHT_TEXT
  },
  buttonContainer: {
    marginTop: 20
  },
  buttonBackground: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: FORMAT_navButtonBackground.F_navButtonBackground_width,
    alignSelf: FORMAT_navButtonBackground.F_navButtonBackground_alignSelf,
    margin: FORMAT_navButtonBackground.F_navButtonBackground_margin,
    borderRadius: FORMAT_navButtonBackground.F_navButtonBackground_borderRadius
  },
  buttonText: {
    color: COLS.C6_WHITE_TEXT,
    textAlign: "center",
    padding: 5
  },
  welcomeContainer: {
    alignItems: FORMAT_welcomeContainer.F_welcomeContainer_alignItems,
    marginTop: FORMAT_welcomeContainer.F_welcomeContainer_marginTop,
    marginBottom: FORMAT_welcomeContainer.F_welcomeContainer_marginBottom
  }
});
