import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { COLS } from "./COLS";

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
            keyboardType="password"
            onChangeText={passwordHandler}
            placeholderTextColor="black"
          />
        </View>
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
