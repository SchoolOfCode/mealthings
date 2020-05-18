import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import { COLS } from "./COLS";
import {
  FORMAT_navButtonBackground,
  FORMAT_navButtonText,
} from "./FORMAT_navButton";
import { FORMAT_logo } from "./FORMAT_logo";
import { FORMAT_containers } from "./FORMAT_containers";
import { FORMAT_tagLine } from "./FORMAT_extraComponents";

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen2({ navigation }) {
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("This will run every second!");
  //   }, 5000);
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <View>
          <Image
            style={styles.mealThingsLogo}
            source={require("../assets/images/logo_transparent_background.png")}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBackground}
          onPress={() => navigation.navigate("Register1")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBackground}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeScreen2.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLS.C_BG,
    justifyContent: "center",
    alignItems: FORMAT_containers.F_container_alignItems,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: -40,
  },
  mealThingsLogo: {
    alignItems: FORMAT_logo.F_logo_alignItems,
    margin: FORMAT_logo.F_logo_margin,
    justifyContent: FORMAT_logo.F_logo_justifyContent,
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
  },
  tagLine: {
    color: COLS.C5_LIGHT_TEXT,
    fontSize: FORMAT_tagLine.F_tagLine_fontSize,
  },
  buttonContainer: {
    marginTop: "20%",
  },
  buttonBackground: {
    backgroundColor: COLS.C_BG,
    width: FORMAT_navButtonBackground.F_navButtonBackground_width,
    alignSelf: FORMAT_navButtonBackground.F_navButtonBackground_alignSelf,
    margin: FORMAT_navButtonBackground.F_navButtonBackground_margin,
    borderRadius: FORMAT_navButtonBackground.F_navButtonBackground_borderRadius,
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: COLS.C6_WHITE_TEXT,
    textAlign: FORMAT_navButtonText.F_navButtonText_textAlign,
    padding: FORMAT_navButtonText.F_navButtonText_padding,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontFamily: "Muli-Bold",
  },
});
