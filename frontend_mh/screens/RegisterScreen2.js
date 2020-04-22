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

export default function App({ navigation, route }) {
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
    console.log("dataPlus:", dataPlus);
    navigation.navigate("Register2");
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
            placeholder="Name"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.inputField}
            placeholder="Email"
            onChangeText={passwordHandler}
            placeholderTextColor="black"
          />
        </View>

        <TouchableOpacity onPress={SubmitHandler} style={styles.buttonText}>
          <Text style={styles.TextStyle}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.formatting}>{display}</Text>

        <View style={styles.buttonFormat}></View>
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
    position: "relative",
    top: 80,
    marginVertical: 15,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
  },
  headerC: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    height: 60,
  },
  formatting: {
    alignSelf: "center",
  },
  buttonText: {
    position: "relative",
    top: 170,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    color: COLS.C6_WHITE_TEXT,
    textAlign: "center",
    padding: 5,
    width: 150,
    alignSelf: "center",
    borderRadius: 5,
    marginVertical: 3,
  },
  buttonFormat: {
    position: "relative",
    top: 80,
    flexDirection: "row",
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    justifyContent: "space-between",
    margin: 30,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "space-between",
  },
  textStyle: {
    color: COLS.C6_WHITE_TEXT,
    alignSelf: "center",
  },
});
