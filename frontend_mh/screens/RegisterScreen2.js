import React, { useState, useContext } from "react";
import { AuthContext } from "../App.js";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import { COLS } from "./COLS";
import { FORMAT_background } from "./FORMAT_background";
import {
  FORMAT_containers,
  FORMAT_welcomeContainer,
  FORMAT_moreChoicesContainer
} from "./FORMAT_containers";
import {
  FORMAT_switches,
  FORMAT_notes,
  FORMAT_todaysMeal,
  FORMAT_foodOptions,
  FORMAT_swipeBar,
  FORMAT_arrow,
  FORMAT_icons,
  FORMAT_mainRecipe
} from "./FORMAT_extraComponents";
import { FORMAT_headings, FORMAT_textBoxHeading } from "./FORMAT_headings";
import { FORMAT_images } from "./FORMAT_images";
import { FORMAT_inputField } from "./FORMAT_inputField";
import { FORMAT_logo } from "./FORMAT_logo";
import {
  FORMAT_navButton,
  FORMAT_navButtonText,
  FORMAT_navButtonBackground
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
    if (
      !/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(emailAddress) ||
      emailAddress == "" ||
      emailAddress == null
    ) {
      Alert.alert("please check email is correct and resubmit");
      return;
    }
    const dataPlus = { ...data, password, email_address: emailAddress };
    register(dataPlus);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Details</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={emailChangeHandler}
        placeholder="Email address"
        placeholderTextColor="white"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        onChangeText={passwordHandler}
        placeholderTextColor="white"
      />
      <View style={styles.buttonFlex}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonText}
        >
          <Text style={styles.textStyle}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={SubmitHandler} style={styles.buttonText}>
          <Text style={styles.textStyle}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLS.C_BG,
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    color: COLS.C6_WHITE_TEXT,
    fontSize: 24,
    padding: 10,
    alignSelf: "center"
  },
  inputField: {
    marginVertical: 5,
    backgroundColor: COLS.C_BG,
    width: 200,
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    color: COLS.C6_WHITE_TEXT
  },
  headerC: {
    marginTop: 30
  },
  formatting: {
    alignSelf: "center"
  },
  buttonFlex: {
    alignSelf: "center",
    width: screenWidth * 0.7,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    padding: 10
  },
  buttonText: {
    backgroundColor: COLS.C_BG,
    width: 80,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT
  },
  textStyle: {
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold"
  }
});
