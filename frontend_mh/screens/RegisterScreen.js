import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { COLS } from "./COLS";

import { FORMAT_navButtonText } from "./FORMAT_navButton";
import { FORMAT_inputField } from "./FORMAT_inputField";

const screenWidth = Dimensions.get("screen").width;

export default function Registerscreen({ navigation }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [DOB, setDOB] = useState();
  const [DOB2, setDOB2] = useState();
  const [DOB3, setDOB3] = useState();
  const [mother, setMother] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [other, setOther] = useState(false);
  const [gender, setGender] = useState(null);

  function firstNameInput(enteredText) {
    setFirstName(enteredText);
  }

  function lastNameInput(enteredText) {
    setLastName(enteredText);
  }

  function DOBinput(enteredText) {
    setDOB(String(enteredText));
  }

  function DOBinput2(enteredText) {
    setDOB2(String(enteredText));
  }

  function DOBinput3(enteredText) {
    setDOB3(String(enteredText));
  }

  function motherInput() {
    if (mother === false) {
      setMother(true);
    } else {
      setMother(false);
    }
  }

  function otherHandler() {
    if (other === false) {
      setOther(true);
      setMale(false);
      setFemale(false);
      setGender("Other");
    } else if (other == true) {
      setOther(false);
    }
  }

  function maleHandler() {
    if (male === false) {
      setMale(true);
      setOther(false);
      setFemale(false);
      setGender("Male");
    } else {
      setMale(false);
    }
  }

  function femaleHandler() {
    if (female == false) {
      setFemale(true);
      setOther(false);
      setMale(false);
      setGender("female");
    } else {
      setFemale(false);
    }
  }

  function submitHandler() {
    if (!gender || !firstName || !lastName || !DOB || !DOB2 || !DOB3) {
      Alert.alert("Please ensure all data fields are complete.");
      return;
    } else if (DOB <= 0 || DOB > 31) {
      Alert.alert("Day (in date of birth) can only be between 1 and 31!");
      return;
    } else if (DOB2 < 1 || DOB2 > 12) {
      Alert.alert("Month (in date of birth) can only be between 1 and 12!");
      return;
    } else if (DOB3 < 1900 || DOB3 > new Date().getFullYear()) {
      Alert.alert(
        `Year (in date of birth) can only be between 1900 and ${new Date().getFullYear()}!`
      );
      return;
    } else {
      const birthday = DOB2 + "-" + DOB + "-" + DOB3;
      const data = {
        name: `${firstName} ${lastName}`,
        birthday,
        gender,
        mother,
      };
      console.log("Submitted data:", data, "ln:", lastName.length, !lastName);
      navigation.navigate("Register2", { data });
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <View style={styles.margin}>
            <View style={styles.contain}>
              <Text style={styles.title}>Create Your Account:</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={firstNameInput}
                placeholder="First name"
                placeholderTextColor={COLS.C6_WHITE_TEXT}
                isRequired
              />
              <TextInput
                style={styles.inputField}
                placeholder=" Last name"
                onChangeText={lastNameInput}
                placeholderTextColor={COLS.C6_WHITE_TEXT}
              />
              <View style={styles.row}>
                <TextInput
                  style={styles.box}
                  placeholder="DD"
                  onChangeText={DOBinput}
                  placeholderTextColor={COLS.C6_WHITE_TEXT}
                  keyboardType="numeric"
                  maxLength={2}
                />
                <TextInput
                  style={styles.box}
                  placeholder="MM"
                  onChangeText={DOBinput2}
                  placeholderTextColor={COLS.C6_WHITE_TEXT}
                  keyboardType="numeric"
                  maxLength={2}
                />
                <TextInput
                  style={styles.box}
                  placeholder="YYYY"
                  onChangeText={DOBinput3}
                  placeholderTextColor={COLS.C6_WHITE_TEXT}
                  keyboardType="numeric"
                  maxLength={4}
                />
              </View>
            </View>
          </View>
          <View styles={styles.position}>
            <Text style={styles.optionText}>Are you a new mother? </Text>
            <View style={styles.horizontal}>
              <CheckBox
                checkedIcon={
                  <Image
                    style={styles.tick}
                    source={require("../assets/images/check-box.png")}
                  />
                }
                uncheckedIcon={
                  <Image
                    style={styles.tick}
                    source={require("../assets/images/blank-square.png")}
                  />
                }
                checked={mother}
                onPress={motherInput}
              />
            </View>
            <Text style={styles.title}>Select Gender: </Text>
            <View style={styles.horizontal}>
              <View>
                <Text style={styles.option}>Female </Text>
                <CheckBox
                  checkedIcon={
                    <Image
                      style={styles.tick}
                      source={require("../assets/images/check-box.png")}
                    />
                  }
                  uncheckedIcon={
                    <Image
                      style={styles.tick}
                      source={require("../assets/images/blank-square.png")}
                    />
                  }
                  checked={female}
                  onPress={femaleHandler}
                />
              </View>
              <View style={styles.align}>
                <Text style={styles.option}>Male </Text>
                <CheckBox
                  checkedIcon={
                    <Image
                      style={styles.tick}
                      source={require("../assets/images/check-box.png")}
                    />
                  }
                  uncheckedIcon={
                    <Image
                      style={styles.tick}
                      source={require("../assets/images/blank-square.png")}
                    />
                  }
                  checked={male}
                  onPress={maleHandler}
                />
              </View>
              <View>
                <Text style={styles.option}> Other </Text>
                <CheckBox
                  checkedIcon={
                    <Image
                      style={styles.tick}
                      source={require("../assets/images/check-box.png")}
                    />
                  }
                  uncheckedIcon={
                    <Image
                      style={styles.tick}
                      source={require("../assets/images/blank-square.png")}
                    />
                  }
                  checked={other}
                  onPress={otherHandler}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonflex}>
            <View>
              <TouchableOpacity
                style={styles.direction}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonText}>
              <TouchableOpacity
                style={styles.direction}
                onPress={submitHandler}
              >
                <Text onPress={submitHandler} style={styles.buttonText}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  horizontal: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: COLS.C_BG,
    justifyContent: "center",
  },
  contain: {
    marginTop: 30,
  },
  margin: {
    marginTop: 25,
  },
  tick: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderColor: COLS.C6_WHITE_TEXT,
  },
  inputField: {
    fontSize: 16,
    padding: FORMAT_inputField.F_inputField_padding,
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
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    color: COLS.C6_WHITE_TEXT,
  },
  buttonflex: {
    alignSelf: "center",
    width: screenWidth * 0.7,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    padding: 10,
  },
  direction: {
    backgroundColor: COLS.C_BG,
    width: 80,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
    marginBottom: 50,
    fontSize: 16,
    padding: 10,
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
  },
  box: {
    fontSize: 16,
    textAlign: "center",
    width: 53,
    height: 50,
    backgroundColor: COLS.C_BG,
    margin: 10,
    borderRadius: 5,
    color: COLS.C6_WHITE_TEXT,
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: "row",
  },
  position: {
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
  },
  optionText: {
    color: COLS.C6_WHITE_TEXT,
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 16,
  },
  title: {
    fontWeight: "bold",
    color: COLS.C6_WHITE_TEXT,
    fontSize: 24,
    alignSelf: "center",
    padding: 15,
  },
  option: {
    color: COLS.C6_WHITE_TEXT,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
  },
  buttonText: {
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold",
  },
});
