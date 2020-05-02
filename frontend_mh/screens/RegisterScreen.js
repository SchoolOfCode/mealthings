import React, { useState, Component } from "react";

import { CheckBox } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Dimensions,
  Alert,
  Button,
  Image,
} from "react-native";
import { COLS } from "./COLS";
import { FORMAT_background } from "./FORMAT_background";
import {
  FORMAT_containers,
  FORMAT_welcomeContainer,
  FORMAT_moreChoicesContainer,
} from "./FORMAT_containers";
import {
  FORMAT_switches,
  FORMAT_notes,
  FORMAT_todaysMeal,
  FORMAT_foodOptions,
  FORMAT_swipeBar,
  FORMAT_arrow,
  FORMAT_icons,
  FORMAT_mainRecipe,
} from "./FORMAT_extraComponents";
import { FORMAT_headings, FORMAT_textBoxHeading } from "./FORMAT_headings";
import { FORMAT_images } from "./FORMAT_images";
import { FORMAT_inputField } from "./FORMAT_inputField";
import { FORMAT_logo } from "./FORMAT_logo";
import {
  FORMAT_navButton,
  FORMAT_navButtonText,
  FORMAT_navButtonBackground,
} from "./FORMAT_navButton";
import { FORMAT_text, FORMAT_fonts } from "./FORMAT_text";

const screenWidth = Dimensions.get("screen").width;
export default function Registerscreen({ navigation }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [DOB, setDOB] = useState();
  const [DOB2, setDOB2] = useState();
  const [DOB3, setDOB3] = useState();
  const [mother, setMother] = useState(false);
  const [other, setOther] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [gender, setGender] = useState(null);
  const [confirm, setConfirm] = useState();

  function nameInput(enteredText) {
    setName(enteredText);
  }

  function emailInput(enteredText) {
    setEmail(enteredText);
  }
  //NOTES ON REGEX FOR REFERENCE
  ///^[a-zA-Z0-9._-]+:  Means that the email address must begin with alpha-numeric characters (both lowercase and uppercase characters are allowed). It may have periods,underscores and hyphens.
  //@:   There must be a ‘@’ symbol after initial characters
  //[a-zA-Z0-9.-]+: After the ‘@’ sign there must be some alpha-numeric characters. It can also contain period (‘.’) and and hyphens(‘-‘).
  //\.: After the second group of characters there must be a period (‘.’). This is to separate domain and subdomain names.
  //[a-zA-Z]{2,4}$/: Finally, the email address must end with two to four alphabets. Having a-z and A-Z means that both lowercase and uppercase letters are allowed
  // {2,4} indicates the minimum and maximum number of characters. This will allow domain names with 2, 3 and 4 characters e.g.; us, tx, org, com, net, wxyz).

  function DOBinput(enteredText) {
    setDOB(enteredText);
  }
  function DOBinput2(enteredText) {
    setDOB2(enteredText);
  }
  function DOBinput3(enteredText) {
    setDOB3(enteredText);
  }

  function motherInput() {
    if (mother === false) {
      setMother(true);
    } else if (mother === true) {
      setMother(false);
    }
  }

  function otherHandler() {
    if (other == false) {
      setOther(true);
      setMale(false);
      setFemale(false);
    } else if (other == true) {
      setOther(false);
    }
  }

  function maleHandler() {
    if (male == false) {
      setMale(true);
      setOther(false);
      setFemale(false);
    } else if (male == false) {
      setMale(false);
    }
  }
  function femaleHandler() {
    if (female == false) {
      setFemale(true);
      setOther(false);
      setMale(false);
    } else if (female == true) {
      setFemale(false);
    }
  }
  function confirmChoices() {
    console.log(gender, name, email, DOB, DOB2, DOB3);
    if (other == true) {
      setGender("Other");
    } else if (female == true) {
      setGender("female");
    } else {
      setGender("Male");
    }
    if (/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email)) {
      setEmail(email);
    } else if (email == "" || null) {
      Alert.alert("enter a correct email address");
    }
    if (
      gender == null ||
      name == null ||
      email == null ||
      DOB == null ||
      DOB2 == null ||
      DOB3 == null
    ) {
      setConfirm(false);
      console.log("log1", gender, name, email, DOB, DOB2, DOB3);
    } else {
      setConfirm(true);
      console.log("log2", gender, name, email, DOB, DOB2, DOB3);
    }
  }

  function submitHandler() {
    console.log("submitted!");
    if (confirm == true) {
      const birthday = DOB + "-" + DOB2 + "-" + DOB3;
      console.log("Submitted:", {
        name,
        email,
        birthday,
        gender,
        mother,
      });

      const data = {
        name,
        email_address: email,
        birthday,
        mother,
        gender,
      };
      console.log(data);
      navigation.navigate("Register2", { data });
    } else {
      Alert.alert("ensure all data fields are complete");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.margin}>
          <Text style={styles.title}>Create Your Account:</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={nameInput}
            placeholder="Name"
            placeholderTextColor="#FDFFF7"
            isRequired
          />
          <TextInput
            style={styles.inputField}
            placeholder=" Email"
            onChangeText={emailInput}
            keyboardType="email-address"
            placeholderTextColor="#FDFFF7"
          />
          <View style={styles.row}>
            <TextInput
              style={styles.box}
              placeholder="DD"
              onChangeText={DOBinput}
              placeholderTextColor="#FDFFF7"
              keyboardType="numeric"
              maxLength={2}
            />
            <TextInput
              style={styles.box}
              placeholder="MM"
              onChangeText={DOBinput2}
              placeholderTextColor="#FDFFF7"
              keyboardType="numeric"
              maxLength={2}
            />
            <TextInput
              style={styles.box}
              placeholder="YYYY"
              onChangeText={DOBinput3}
              placeholderTextColor="#FDFFF7"
              keyboardType="numeric"
              maxLength={4}
            />
          </View>
        </View>

        <View styles={styles.position}>
          <Text style={styles.motherText}>New Mother? </Text>
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
          <Text style={styles.title}>Select Gender: </Text>
          <View>
            <Text style={styles.female}>Female </Text>
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
            <Text style={styles.male}>Male </Text>
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
            <Text style={styles.other}> Other </Text>
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
        <View style={styles.buttonflex}>
          <View>
            <TouchableOpacity
              style={styles.directionBack}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonText}>
            <TouchableOpacity
              style={styles.directionNext}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    backgroundColor: COLS.C_BG,
  },
  row: {
    flexDirection: "row",
  },
  mover: {
    left: 110,
  },
  margin: {
    marginTop: 30,
  },
  arrow: {
    width: 40,
    height: 20,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  tick: {
    width: 20,
    height: 20,
    left: 180,
    bottom: 15,
    borderWidth: 3,
    borderColor: COLS.C6_WHITE_TEXT,
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
  directionBack: {
    backgroundColor: COLS.C_BG,
    width: 80,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
  },
  directionNext: {
    backgroundColor: COLS.C_BG,
    width: 80,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
  },
  row: {
    flexDirection: "row",
  },
  box: {
    width: 45,
    height: 25,
    backgroundColor: COLS.C_BG,
    margin: 10,
    left: 85,
    borderRadius: 5,
    alignSelf: "center",
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
  },
  position: {
    flexDirection: "row",
    top: 40,
    marginTop: 30,
  },
  motherText: {
    top: 20,
    left: 100,
    color: COLS.C6_WHITE_TEXT,
    fontWeight: "bold",
  },
  title: {
    left: 10,
    fontWeight: "bold",
    color: COLS.C6_WHITE_TEXT,
    fontSize: 24,
    padding: 10,
    top: -10,
  },
  female: {
    top: 19,
    left: 120,
    color: COLS.C6_WHITE_TEXT,
    fontWeight: "bold",
  },
  male: {
    top: 19,
    left: 130,
    color: COLS.C6_WHITE_TEXT,
    fontWeight: "bold",
  },
  other: {
    top: 19,
    left: 125,
    color: COLS.C6_WHITE_TEXT,
    fontWeight: "bold",
  },
  buttonText: {
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold",
  },
});
