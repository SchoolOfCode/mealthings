import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLS } from "./COLS";
import { FORMAT_background } from "./FORMAT_background";
import {
  FORMAT_containers,
  FORMAT_welcomeContainer,
  FORMAT_moreChoicesContainer,
} from "./FORMAT_containers";
import {
  FORMAT_switches,
  FORMAT_notes,
  FORMAT_todaysMeal,
  FORMAT_foodOptions,
  FORMAT_swipeBar,
  FORMAT_arrow,
  FORMAT_icons,
  FORMAT_mainRecipe,
} from "./FORMAT_extraComponents";
import { FORMAT_headings, FORMAT_textBoxHeading } from "./FORMAT_headings";
import { FORMAT_images } from "./FORMAT_images";
import { FORMAT_inputField } from "./FORMAT_inputField";
import { FORMAT_logo } from "./FORMAT_logo";
import {
  FORMAT_navButton,
  FORMAT_navButtonText,
  FORMAT_navButtonBackground,
} from "./FORMAT_navButton";
import { FORMAT_text, FORMAT_fonts } from "./FORMAT_text";

export default function SplashSuccess({ navigation, route }) {
  const { dataPlusPlus } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <View style={styles.logoCircle}>
          <Image source={require("../assets/images/newLogo.png")} />
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
    flex: 1,
    backgroundColor: COLS.C_BG,
    justifyContent: "center",
  },
  mealThingsLogo: {
    alignItems: "center",
    margin: "auto",
    justifyContent: "center",
  },
  logoCircle: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: COLS.C_LOGO_BG,
  },
  tagLine: {
    color: COLS.C5_LIGHT_TEXT,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonBackground: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    alignSelf: "center",
    margin: 5,
    borderRadius: 5,
    padding: 15,
  },
  buttonText: {
    color: COLS.C6_WHITE_TEXT,
    textAlign: "center",
    padding: 5,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});
