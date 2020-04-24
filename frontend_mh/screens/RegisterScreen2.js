import * as WebBrowser from "expo-web-browser";
import React, { useState, useContext } from "react";
import { RegisterContext } from "../contexts/RegisterContext";
import { Dropdown } from "react-native-material-dropdown";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { COLS } from "./COLS";

export default function App({ navigation, route }) {
  const { data } = route.params;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [display, setDisplay] = useState();

  const [register, setRegister] = useContext(RegisterContext);
  console.log("RS2", register);
  function usernameHandler(enteredText) {
    setRegister(enteredText);
  }
  function passwordHandler(enteredText) {
    setPassword(enteredText);
  }

  function SubmitHandler() {
    console.log(username, password, genderchoice);
    const dataPlus = { ...data, username, password, genderchoice };
    console.log("dataPlus:", dataPlus);
    setDisplay("Submitted");
    navigation.navigate("Goals", { dataPlus });
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.inputField}
          onChangeText={usernameHandler}
          placeholder="Username"
          placeholderTextColor="black"
          value={register}
          maxLength={12}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          onChangeText={passwordHandler}
          value={password}
          placeholderTextColor="black"
        />
      </View>

      <TouchableOpacity onPress={SubmitHandler} style={styles.buttonText}>
        <Text style={styles.TextStyle}>Register</Text>
      </TouchableOpacity>

      <View style={styles.buttonFormat}></View>
      <Text style={styles.formatting}>{display}</Text>
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
    marginTop: 30,
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
