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
  Image
} from "react-native";
import { COLS } from "./COLS";
import { FORMAT_containers } from "./FORMAT_containers";
import { FORMAT_arrow } from "./FORMAT_extraComponents";
import { FORMAT_inputField } from "./FORMAT_inputField";
import { FORMAT_navButton } from "./FORMAT_navButton";

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
  const [decider, setDecider] = useState();
  const [display, setDisplay] = useState();

  function nameInput(enteredText) {
    setName(enteredText);
  }

  function emailInput(enteredText) {
    function setEmail(enteredtext) {
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(enteredtext);
    }
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

  function maleHandler() {
    if (male == false) {
      setMale(true);
    } else if (male == true) {
      setMale(false);
    }
  }
  function femaleHandler() {
    if (female == false) {
      setFemale(true);
    } else if (female == true) {
      setFemale(false);
    }
  }
  function otherHandler() {
    if (other == false) {
      setOther(true);
    } else if (other == true) {
      setOther(false);
    }
  }

  function SubmitHandler() {
    if (other == false || male == false) {
      setDecider("Female");
    } else if (male == false || female == false) {
      setDecider("Male");
    } else setDecider("");

    setDisplay("Submitted");
    const birthday = DOB + "-" + DOB2 + "-" + DOB3;
    console.log("Submitted:", {
      name,
      email,
      birthday,
      decider,
      mother
    });
    console.log(birthday);

    const data = {
      name,
      email_address: email,
      birthday,
      mother,
      gender: male ? "male" : female ? "female" : "other"
    };

    navigation.navigate("Register2", { data });
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.margin}>
          <TextInput
            style={styles.inputField}
            onChangeText={nameInput}
            placeholder="Name"
            placeholderTextColor="black"
            isRequired
          />
          <TextInput
            style={styles.inputField}
            placeholder="Email"
            onChangeText={emailInput}
            placeholderTextColor="black"
          />
          <View style={styles.row}>
            <TextInput
              style={styles.box}
              placeholder="DD"
              onChangeText={DOBinput}
              placeholderTextColor="black"
              keyboardType="numeric"
              maxLength={2}
            />
            <TextInput
              style={styles.box}
              placeholder="MM"
              onChangeText={DOBinput2}
              placeholderTextColor="black"
              keyboardType="numeric"
              maxLength={2}
            />
            <TextInput
              style={styles.box}
              placeholder="YYYY"
              onChangeText={DOBinput3}
              placeholderTextColor="black"
              keyboardType="numeric"
              maxLength={4}
            />
          </View>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.mover} onPress={femaleHandler}>
            <Image
              style={styles.arrow}
              source={require("../assets/images/female.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mover} onPress={maleHandler}>
            <Image
              style={styles.arrow}
              source={require("../assets/images/male.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mover} onPress={otherHandler}>
            <Image
              style={styles.arrow}
              source={require("../assets/images/other.png")}
            ></Image>
          </TouchableOpacity>
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
            <TouchableOpacity style={styles.Direction} onPress={SubmitHandler}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: FORMAT_containers.F_container_flex,
    backgroundColor: COLS.C_BG,
    justifyContent: FORMAT_containers.F_container_justifyContent,
    width: screenWidth,
    backgroundColor: COLS.C_BG,
    alignItems: FORMAT_containers.F_container_alignItems,
    justifyContent: "center"
  },
  row: {
    flexDirection: FORMAT_navButton.F_navButton_flexDirection
  },
  mover: {
    left: 110
  },
  margin: {
    marginTop: 80
  },
  arrow: {
    height: FORMAT_arrow.F_arrow_height,
    width: FORMAT_arrow.F_arrow_width,
    left: FORMAT_arrow.F_arrow_left,
    top: FORMAT_arrow.F_arrow_top,
    marginBottom: FORMAT_arrow.F_arrow_marginBottom
  },
  tick: {
    width: 20,
    height: 20,
    left: 250,
    bottom: 10
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
  buttonflex: {
    width: screenWidth * 0.7,
    flexDirection: FORMAT_navButton.F_navButton_flexDirection,
    justifyContent: FORMAT_navButton.F_navButton_justifyContent,
    alignSelf: "center",
    padding: FORMAT_navButton.F_navButton_padding,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    borderRadius: FORMAT_navButton.F_navButton_borderRadius,
    marginVertical: 20
  },
  Direction: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: FORMAT_navButton.F_navButton_width,
    height: FORMAT_navButton.F_navButton_height,
    borderRadius: FORMAT_navButton.F_inputField_borderRadius,
    alignItems: FORMAT_navButton.F_inputField_alignItems,
    justifyContent: FORMAT_navButton.F_inputField_justifyContent
  }
});
