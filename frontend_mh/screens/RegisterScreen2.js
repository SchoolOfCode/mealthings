import React, { useState, useContext } from "react";
import { AuthContext } from "../App.js";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
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

const screenWidth = Dimensions.get("screen").width;

export default function Registerscreen2({ navigation, route }) {
  const { data } = route.params;
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const { register } = useContext(AuthContext);

  function emailChangeHandler(enteredText) {
    setEmailAddress(enteredText);
  }

  function passwordHandler(enteredText) {
    setPassword(enteredText);
  }

  async function SubmitHandler() {
    console.log(emailAddress, password);
    const dataPlus = { ...data, password, email_address: emailAddress };
    register(dataPlus);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        onChangeText={emailChangeHandler}
        placeholder="Email address"
        placeholderTextColor="black"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        onChangeText={passwordHandler}
        placeholderTextColor="black"
      />
      <View style={styles.buttonFlex}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonText}
        >
          <Text style={styles.TextStyle}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={SubmitHandler} style={styles.buttonText}>
          <Text style={styles.TextStyle}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLS.C_BG,
    height: 1000,
  },
  inputField: {
    marginVertical: 15,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
  },
  headerC: {
    marginTop: 30,
  },
  formatting: {
    alignSelf: "center",
  },
  buttonFlex: {
    flexDirection: "row",
    width: screenWidth * 0.5,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 3,
    width: 80,
  },
  buttonFormat: {
    flexDirection: "row",
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 80,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "space-between",
  },
});
