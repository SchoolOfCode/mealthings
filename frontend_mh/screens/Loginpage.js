import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
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
  FORMAT_tagLine,
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

export default function Loginpage({ navigation }) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  function tracked(enteredText) {
    setName(enteredText);
  }
  function tracker(enteredText) {
    setPassword(enteredText);
  }
  function handleSubmit() {
    // TODO - This should not be a POST, but should do a get request with the username (use the query string route), and check if the password the user entered matches the password that the user entered. If the password is wrong the user should get an error message and another change to enter their password. If the password is correct they should be routed to the Landing Page screen.

    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify(data),
    // };
    // fetch(
    //   "http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users",
    //   options
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("this is", data);
    //   });
    navigation.navigate("LandingPage");
  }
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <View style={styles.positioning}>
          <View style={styles.logoCircle}>
            <Image source={require("../assets/images/Mealthings.png")} />
          </View>
          <View>
            <Text style={styles.tagLine}>Eat Well. Feel Amazing.</Text>
          </View>
        </View>
        <TextInput
          style={styles.inputField}
          placeholder=" enter username"
          value={name}
          onChangeText={tracked}
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.inputField}
          placeholder=" enter password"
          value={password}
          onChangeText={tracker}
          placeholderTextColor="white"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  border: {
    marginVertical: 50,
  },
  container: {
    backgroundColor: COLS.C_BG,
    height: FORMAT_containers.F_containerHeaders_height,
  },
  mealThingsLogo: {
    alignItems: FORMAT_logo.F_logo_alignItems,
    margin: FORMAT_logo.F_logo_margin,
    justifyContent: FORMAT_logo.F_logo_justifyContent,
  },
  logoCircle: {
    width: FORMAT_logo.F_logoCircle_width,
    height: FORMAT_logo.F_logoCircle_height,
    borderRadius: FORMAT_logo.F_logoCircle_borderRadius,
    backgroundColor: COLS.C_LOGO_BG,
    marginBottom: FORMAT_logo.F_logoCircle_marginBottom,
  },
  tagLine: {
    color: COLS.C5_LIGHT_TEXT,
    left: -10,
    marginBottom: 60,
    fontSize: FORMAT_tagLine.F_tagLine_fontSize,
  },
  positioning: {
    left: 100,
  },
  inputField: {
    marginVertical: FORMAT_inputField.F_inputField_marginVertical,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: FORMAT_inputField.F_inputField_width,
    alignSelf: FORMAT_inputField.F_inputField_alignSelf,
    alignItems: FORMAT_inputField.F_inputField_alignItems,
    height: FORMAT_inputField.F_inputField_height,
    borderRadius: FORMAT_inputField.F_inputField_borderRadius,
  },
  button: {
    alignSelf: FORMAT_navButton.F_navButton_alignSelf,
    padding: FORMAT_navButton.F_navButton_padding,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    borderRadius: FORMAT_navButton.F_navButton_borderRadius,
    marginVertical: 20,
  },
});
