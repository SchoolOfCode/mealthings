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
    <ScrollView style={styles.container}>
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
          <View>
            <TouchableOpacity onPress={SubmitHandler} style={styles.submit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonflex}>
            <View>
              <TouchableOpacity style={styles.Direction}>
                <Text>Back</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonText}>
              <TouchableOpacity style={styles.Direction}>
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLS.C_BG,
  },
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
    marginBottom: 50,
  },
  buttonflex: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
  },
  submit: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 80,
    alignSelf: "center",
    marginVertical: 40,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  Direction: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 80,
    alignSelf: "center",
    marginVertical: 40,
    borderRadius: 5,
    padding: 10,
    margin: 20,
    alignItems: "center",
    left: 70,
  },
});
