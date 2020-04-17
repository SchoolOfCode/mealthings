import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLS } from "./COLS";

export default function App() {
  const [input, setInput] = useState();
  const [email, setEmail] = useState();
  const [DOB, setDOB] = useState();
  const [Gender, setGender] = useState();
  const [display, setDisplay] = useState();

  function name(enteredText) {
    setInput(enteredText);
  }
  function emailInput(enteredText) {
    setEmail(enteredText);
  }
  function DOBinput(enteredText) {
    setDOB(enteredText);
  }
  function GenderInput(enteredText) {
    setGender(enteredText);
  }

  function SubmitHandler() {
    setDisplay("Submitted");
    console.log(input, email, DOB, Gender);
    // const data = { input, email, DOB, Gender };
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify(data),
    // };
    // fetch("", options)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("this is", data);
    //   });
  }

  return (
    <ScrollView>
      <View>
        <View>
          <Text style={styles.headerC}>
            <Image source={require("../assets/images/arrow.png")} />
          </Text>
          <View>
            <TextInput
              style={styles.inputField}
              onChangeText={name}
              placeholder="Name"
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.inputField}
              placeholder="Email"
              onChangeText={emailInput}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.inputField}
              placeholder="Birthday"
              onChangeText={DOBinput}
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.inputField}
              placeholder="Gender"
              onChangeText={GenderInput}
              placeholderTextColor="black"
            />
          </View>

          <TouchableOpacity onPress={SubmitHandler} style={styles.buttonText}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <Text style={styles.formatting}>{display}</Text>

          <View style={styles.buttonFormat}>
            <TouchableOpacity style={styles.Direction}>
              <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Direction}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputField: {
    marginVertical: 5,
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
    backgroundColor: COLS.C5_LIGHT_TEXT,
    color: COLS.C_BG,
    textAlign: "center",
    padding: 5,
    width: 70,
    alignSelf: "center",
    borderRadius: 5,
    marginVertical: 3,
  },
  buttonFormat: {
    flexDirection: "row",
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    justifyContent: "space-between",
    margin: 30,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "space-between",
  },
});
