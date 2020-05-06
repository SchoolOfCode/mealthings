import React, { useState, useContext } from "react";
import { AuthContext } from "../App.js";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
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

const screenWidth = Dimensions.get("window").width;

export default function Loginpage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { logIn } = useContext(AuthContext);

  function handleEmailChange(enteredText) {
    setEmail(enteredText);
  }
  function handlePasswordChange(enteredText) {
    setPassword(enteredText);
  }

  function handleSubmit() {
    logIn(email, password);
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <View>
          <Image
            style={styles.mealThingsLogo}
            source={require("../assets/images/newLogo.png")}
          />
        </View>
        <TextInput
          style={styles.inputField}
          placeholder=" enter email address"
          value={email}
          autoCompleteType={"email"}
          keyboardType="email-address"
          onChangeText={handleEmailChange}
          placeholderTextColor="#FDFFF7"
        />
        <TextInput
          style={styles.inputField}
          placeholder=" enter password"
          value={password}
          autoCompleteType={"password"}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
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
    alignItems: "center",
  },
  welcomeContainer: {
    alignItems: FORMAT_welcomeContainer.F_welcomeContainer_alignItems,
    marginTop: FORMAT_welcomeContainer.F_welcomeContainer_marginTop,
    marginBottom: -40,
  },
  mealThingsLogo: {
    alignItems: FORMAT_logo.F_logo_alignItems,
    margin: FORMAT_logo.F_logo_margin,
    justifyContent: FORMAT_logo.F_logo_justifyContent,
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    marginBottom: 20,
  },

  inputField: {
    marginVertical: FORMAT_inputField.F_inputField_marginVertical,
    backgroundColor: COLS.C_BG,
    width: FORMAT_inputField.F_inputField_width,
    alignSelf: FORMAT_inputField.F_inputField_alignSelf,
    alignItems: FORMAT_inputField.F_inputField_alignItems,
    height: FORMAT_inputField.F_inputField_height,
    borderRadius: FORMAT_inputField.F_inputField_borderRadius,
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
    color: COLS.C6_WHITE_TEXT,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    fontSize: 16,
  },
  button: {
    alignSelf: FORMAT_navButton.F_navButton_alignSelf,
    padding: FORMAT_navButton.F_navButton_padding,
    backgroundColor: COLS.C_BG,
    borderRadius: FORMAT_navButton.F_navButton_borderRadius,
    marginVertical: 20,
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
    fontWeight: "bold",
  },
});
