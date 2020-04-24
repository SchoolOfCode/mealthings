import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { COLS } from "./COLS";

const screenWidth = Dimensions.get("screen").width;

export default function Registerscreen({ navigation }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [DOB, setDOB] = useState();
  const [gender, setGender] = useState();
  const [display, setDisplay] = useState();

  function nameInput(enteredText) {
    setName(enteredText);
  }
  function emailInput(enteredText) {
    setEmail(enteredText);
  }
  function DOBinput(enteredText) {
    setDOB(enteredText);
  }
  function genderInput(enteredText) {
    setGender(enteredText);
  }

  function SubmitHandler() {
    setDisplay("Submitted");
    const data = { name, email_address: email, birthday: DOB, gender };
    console.log("data in register1:", data);
    navigation.navigate("Register2", { data });
  }

  return (
    <View style={styles.container}>
      <View>
        <View>
          <View>
            <TextInput
              style={styles.inputField}
              onChangeText={nameInput}
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
              onChangeText={genderInput}
              placeholderTextColor="black"
            />
          </View>
          <View style={styles.buttonflex}>
            <View>
              <TouchableOpacity
                style={styles.Direction}
                onPress={() => navigation.goBack()}
              >
                <Text>Back</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonText}>
              <TouchableOpacity
                style={styles.Direction}
                onPress={SubmitHandler}
              >
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    backgroundColor: COLS.C_BG,
    alignContent: "center",
    justifyContent: "center",
  },
  inputField: {
    marginVertical: 5,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
  },
  buttonflex: {
    alignSelf: "center",
    width: screenWidth * 0.7,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    padding: 10,
  },
  Direction: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 80,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
