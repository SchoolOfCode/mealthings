import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
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
  FORMAT_Graph,
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
import { Pedometer } from "expo-sensors";

export default function YourStats() {
  return (
    <View style={styles.container}>
      <View style={styles.graph1}>
        <Text>Calories in / calories out</Text>
      </View>
      <View style={styles.graph2}>
        <Text>Salt + sugar</Text>
      </View>
      <View style={styles.graph3}>
        <Text>Exercise level</Text>
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>
          Our deepest fear is that we are powerful beyond compare
        </Text>
        <Text style={styles.quoteAuthor}>Mary-Ann Williams</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: FORMAT_containers.F_container_alignItems,
    margin: FORMAT_containers.F_container_margin,
    justifyContent: FORMAT_containers.F_container_justifyContent,
    backgroundColor: COLS.C_BG,
    flex: FORMAT_containers.F_Flex,
  },
  graph1: {
    width: FORMAT_Graph.F_width,
    height: FORMAT_Graph.F_height,
    backgroundColor: COLS.C_YELLOW,
  },
  graph2: {
    width: FORMAT_Graph.F_width,
    height: FORMAT_Graph.F_height,
    backgroundColor: COLS.C5_LIGHT_TEXT,
  },
  graph3: {
    width: FORMAT_Graph.F_width,
    height: FORMAT_Graph.F_height,
    backgroundColor: COLS.C_LOGO_BG,
  },
  text: {
    alignSelf: FORMAT_Graph.F_alignSelf,
  },
  icon: {
    textAlign: FORMAT_Graph.F_textAlign,
    alignSelf: FORMAT_Graph.F_alignSelf,
  },
  quoteContainer: {
    borderColor: COLS.C5_LIGHT_TEXT,
    backgroundColor: COLS.C4_DARK_TEXT,
  },
  quote: {
    textAlign: FORMAT_Graph.F_textAlign,
    color: COLS.C6_WHITE_TEXT,
    fontWeight: FORMAT_Graph.F_fontWeight,
  },
  quoteAuthor: {
    textAlign: FORMAT_Graph.F_textAlign,
    color: COLS.C6_WHITE_TEXT,
    fontWeight: FORMAT_Graph.F_sub_fontWeight,
  },
});
