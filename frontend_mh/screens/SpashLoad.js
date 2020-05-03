import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
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

export default function SplashLoad() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <FontAwesome name="glass-whiskey" size={150} style={styles.icon} />
      </View>
      <View style={styles.textRect}>
        <Text>
          Loading - we're spinning up your personalised menu so you don't have
          to
        </Text>
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
