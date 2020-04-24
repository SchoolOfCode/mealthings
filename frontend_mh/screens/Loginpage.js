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

export default function App() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  function tracked(enteredText) {
    setName(enteredText);
  }
  function tracker(enteredText) {
    setPassword(enteredText);
  }
  function handleSubmit({ navigation }) {
    setPost(name, password);
    const data = { name, email };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    fetch(
      "http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users",
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("this is", data);
      });
    navigation.navigate("Landingpage");
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
          placeholder="enter username"
          value={name}
          onChangeText={tracked}
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.inputField}
          placeholder="enter password"
          value={password}
          onChangeText={tracker}
          placeholderTextColor="white"
        />

        <TouchableOpacity style={styles.button} onPressText={handleSubmit}>
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
    height: 1000,
  },
  mealThingsLogo: {
    alignItems: "center",
    margin: "auto",
    justifyContent: "center",
  },
  logoCircle: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: COLS.C_LOGO_BG,
  },
  tagLine: {
    color: COLS.C5_LIGHT_TEXT,
    left: 20,
    marginBottom: 60,
  },
  positioning: {
    left: 100,
  },
  inputField: {
    marginVertical: 15,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    alignSelf: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 5,
  },
  button: {
    alignSelf: "center",
    padding: 10,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    borderRadius: 5,
    marginVertical: 20,
  },
});

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
//   body: JSON.stringify(dataPlus),
// };
// fetch(
//   "http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users",
//   options
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Return from RegisterScreen:", data);
//   });
