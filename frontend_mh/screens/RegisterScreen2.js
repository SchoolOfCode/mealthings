import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { COLS } from "./COLS";
import { FORMAT_containers } from "./FORMAT_containers";
import { FORMAT_navButton } from "./FORMAT_navButton";

const screenWidth = Dimensions.get("screen").width;

export default function Registerscreen2({ navigation, route }) {
  const { data } = route.params;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [display, setDisplay] = useState();

  function usernameHandler(enteredText) {
    setUsername(enteredText);
  }
  function passwordHandler(enteredText) {
    setPassword(enteredText);
  }

  function SubmitHandler() {
    setDisplay("Submitted");
    console.log(username, password);
    const dataPlus = { ...data, username, password };
    console.log("dataPlus in register 2:", dataPlus);
    navigation.navigate("Goals", { dataPlus });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerC}>
          <Image source={require("../assets/images/arrow.png")} />
        </Text>
        <View>
          <TextInput
            style={styles.inputField}
            onChangeText={usernameHandler}
            placeholder="Username"
            placeholderTextColor="black"
            maxLength={12}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Password"
            onChangeText={passwordHandler}
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.button}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: FORMAT_containers.F_container_flex,
    backgroundColor: COLS.C_BG,
    justifyContent: FORMAT_containers.F_container_justifyContent
  },
  inputField: {
    marginVertical: FORMAT_inputField.F_inputField_marginVertical,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: FORMAT_inputField.F_inputField_width,
    alignSelf: FORMAT_inputField.F_inputField_alignSelf,
    alignItems: FORMAT_inputField.F_inputField_alignItems,
    height: FORMAT_inputField.F_inputField_height,
    borderRadius: FORMAT_inputField.F_inputField_borderRadius
  },
  headerC: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    height: 60
  },
  button: {
    width: screenWidth * 0.7,
    flexDirection: FORMAT_navButton.F_navButton_flexDirection,
    justifyContent: FORMAT_navButton.F_navButton_justifyContent,
    alignSelf: "center",
    padding: FORMAT_navButton.F_navButton_padding,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    borderRadius: FORMAT_navButton.F_navButton_borderRadius,
    marginVertical: 20
  },
  buttonText: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    padding: 5,
    justifyContent: "center",
    alignItems: FORMAT_navButton.F_navButton_alignItems,
    borderRadius: FORMAT_navButton.F_navButton_borderRadius,
    marginVertical: 3,
    width: 80
  }
});
