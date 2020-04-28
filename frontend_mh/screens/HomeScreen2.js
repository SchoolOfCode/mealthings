import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLS } from "./COLS";
import {
  FORMAT_navButtonBackground,
  FORMAT_navButtonText
} from "./FORMAT_navButton";
import { FORMAT_logo } from "./FORMAT_logo";
import { FORMAT_welcomeContainer } from "./FORMAT_containers";
import { FORMAT_tagLine } from "./FORMAT_extraComponents";

export default function HomeScreen2({ navigation }) {
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
          onPress={() => navigation.navigate("Register1")}
        >
          <Text style={styles.buttonText}>Try out now!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackground}>
          <Text
            onPress={() => navigation.navigate("LoginPage")}
            style={styles.buttonText}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeScreen2.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLS.C_BG,
    justifyContent: "center"
  },
  mealThingsLogo: {
    alignItems: FORMAT_logo.F_logo_alignItems,
    margin: FORMAT_logo.F_logo_margin,
    justifyContent: FORMAT_logo.F_logo_justifyContent
  },
  logoCircle: {
    width: FORMAT_logo.F_logoCircle_width,
    height: FORMAT_logo.F_logoCircle_height,
    borderRadius: FORMAT_logo.F_logoCircle_borderRadius,
    backgroundColor: COLS.C_LOGO_BG
  },
  tagLine: {
    color: COLS.C5_LIGHT_TEXT,
    fontSize: FORMAT_tagLine.F_tagLine_fontSize
  },
  buttonContainer: {
    marginTop: "20%"
  },
  buttonBackground: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: FORMAT_navButtonBackground.F_navButtonBackground_width,
    alignSelf: FORMAT_navButtonBackground.F_navButtonBackground_alignSelf,
    margin: FORMAT_navButtonBackground.F_navButtonBackground_margin,
    borderRadius: FORMAT_navButtonBackground.F_navButtonBackground_borderRadius
  },
  buttonText: {
    color: COLS.C4_DARK_TEXT,
    textAlign: FORMAT_navButtonText.F_navButtonText_textAlign,
    padding: FORMAT_navButtonText.F_navButtonText_padding,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize
  },
  welcomeContainer: {
    alignItems: FORMAT_welcomeContainer.F_welcomeContainer_alignItems,
    marginTop: FORMAT_welcomeContainer.F_welcomeContainer_marginTop,
    marginBottom: FORMAT_welcomeContainer.F_welcomeContainer_marginBottom
  }
});
