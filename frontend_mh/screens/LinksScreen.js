import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { FORMAT_containers } from "./FORMAT_containers";
import { FORMAT_foodOptions } from "./FORMAT_extraComponents";

export default function LinksScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync("https://docs.expo.io")}
      />

      <OptionButton
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() =>
          WebBrowser.openBrowserAsync("https://reactnavigation.org")
        }
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => WebBrowser.openBrowserAsync("https://forums.expo.io")}
        isLastOption
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton
      style={[styles.option, isLastOption && styles.lastOption]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: FORMAT_containers.F_container_flex,
    backgroundColor: COLS.C_BG,
    justifyContent: FORMAT_containers.F_container_justifyContent
  },
  contentContainer: {
    padding: FORMAT_containers.F_container_padding
  },
  optionIconContainer: {
    marginRight: 12
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: FORMAT_foodOptions.F_options_paddingHorizontal,
    paddingVertical: FORMAT_foodOptions.F_options_paddingVertical,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: FORMAT_foodOptions.F_options_borderBottomWidth,
    borderColor: FORMAT_foodOptions.F_options_borderColor
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  optionText: {
    fontSize: FORMAT_foodOptions.F_options_fontSize,
    alignSelf: FORMAT_foodOptions.F_options_alignSelf,
    marginTop: FORMAT_foodOptions.F_options_marginTop
  }
});
