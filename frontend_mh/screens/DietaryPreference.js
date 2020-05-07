import React, { useState, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";
import { AuthContext } from "../App.js";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "./COLS";

import { FORMAT_containers } from "./FORMAT_containers";
import { FORMAT_switches } from "./FORMAT_extraComponents";
import { FORMAT_headings } from "./FORMAT_headings";
import { FORMAT_navButton } from "./FORMAT_navButton";
import { FORMAT_text, FORMAT_fonts } from "./FORMAT_text";
import { FORMAT_navButtonText } from "./FORMAT_navButton";
export default function Preferences({ navigation, route }) {
  const { userID } = useContext(AuthContext);
  const { data } = route.params;
  const [noRequirement, setNoRequirement] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [ovovegetarian, setOvovegetarian] = useState(false);
  const [lactoVegetarian, setlactoVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [orange, setOrange] = useState(false);
  const [chocolate, setChocolate] = useState(false);
  const [beetroot, setBeetroot] = useState(false);
  const [post, setPost] = useState();
  function noRequirementHandler() {
    if (noRequirement === false) {
      setNoRequirement(true);
      setVegetarian(false);
      setOvovegetarian(false);
      setlactoVegetarian(false);
      setVegan(false);
    } else if (noRequirement === true) {
      setNoRequirement(false);
    }
  }
  function vegetarianHandler() {
    if (noRequirement === true) {
      setVegetarian(false);
    } else if (vegetarian === false) {
      setVegetarian(true);
    } else if (vegetarian === true) {
      setVegetarian(false);
    }
  }
  function ovovegetarianHandler() {
    if (noRequirement === true) {
      setOvovegetarian(false);
    } else if (ovovegetarian === false) {
      setOvovegetarian(true);
    } else if (ovovegetarian === true) {
      setOvovegetarian(false);
    }
  }
  function lactoHander() {
    if (noRequirement === true) {
      setlactoVegetarian(false);
    } else if (lactoVegetarian === false) {
      setlactoVegetarian(true);
    } else if (lactoVegetarian === true) {
      setlactoVegetarian(false);
    }
  }
  function veganHandler() {
    if (noRequirement === true) {
      setVegan(false);
    } else if (vegan === false) {
      setVegan(true);
    } else if (vegan === true) {
      setVegan(false);
    }
  }
  function cheeseHandler() {
    if (cheese === false) {
      setCheese(true);
    } else if (cheese === true) {
      setCheese(false);
    }
  }
  function orangeHandler() {
    if (orange === false) {
      setOrange(true);
    } else if (orange === true) {
      setOrange(false);
    }
  }
  function chocolateHandler() {
    if (chocolate === false) {
      setChocolate(true);
    } else if (chocolate === true) {
      setChocolate(false);
    }
  }
  function beetrootHandler() {
    if (beetroot === false) {
      setBeetroot(true);
    } else if (beetroot === true) {
      setBeetroot(false);
    }
  }
  function postHandler() {
    setPost("submitted");
    var food_prefs_inc = "";
    if (vegetarian) {
      food_prefs_inc = "vegetarian";
    } else if (ovovegetarian) {
      food_prefs_inc = "ovovegetarian";
    } else if (lactoVegetarian) {
      food_prefs_inc = "lactoVegetarian";
    } else if (vegan) {
      food_prefs_inc = "vegan";
    } else {
      food_prefs_inc = "noRequirement";
    }
    if (cheese) {
      food_prefs_inc += ",cheese,";
    } else if (orange) {
      food_prefs_inc += ",orange,";
    } else if (chocolate) {
      food_prefs_inc += ",chocolate,";
    } else if (beetroot) {
      food_prefs_inc += ",beetroot,";
    }
    data[food_prefs_inc] = food_prefs_inc;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    };
    fetch(
      `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/${userID}`,
      options
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("Return from DietaryPreferences:", data);
      })
      .catch(err => {
        console.warn(err);
      });
    console.log("final data in dietary prefs", data);
    navigation.navigate("LandingPage");
  }
  return (
    <ScrollView style={styles.background}>
      <Text style={styles.header}> Diet Preferences</Text>
      <View style={styles.container}>
        <Text style={styles.text}> No Requirement</Text>
        <Text style={styles.subheading}> I have no dietary Requirements.</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#FB4B3D" }}
          thumbColor={noRequirement ? "#F4F3F4" : "#F4F3F4"}
          ios_backgroundColor="#3E3E3E"
          onValueChange={noRequirementHandler}
          value={noRequirement}
        />
        <Text style={styles.text}> Vegetarian</Text>
        <Text style={styles.subheading}>
          I do not eat meat, fish nor poultry.
        </Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#FB4B3D" }}
          thumbColor={vegetarian ? "#F4F3F4" : "#F4F3F4"}
          ios_backgroundColor="#3E3E3E"
          onValueChange={vegetarianHandler}
          value={vegetarian}
        />
        <Text style={styles.text}> Ovo-Vegetarian </Text>
        <Text style={styles.subheading}>I do not eat diary foods, meat,</Text>
        <Text style={styles.subheading}> poultry nor fish.</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#FB4B3D" }}
          thumbColor={ovovegetarian ? "#F4F3F4" : "#F4F3F4"}
          ios_backgroundColor="#3E3E3E"
          onValueChange={ovovegetarianHandler}
          value={ovovegetarian}
        />
        <Text style={styles.text}> Lacto-vegetarian</Text>
        <Text style={styles.subheading}>I do not eat eggs, meat,</Text>
        <Text style={styles.subheading}> poultry nor fish.</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#FB4B3D" }}
          thumbColor={lactoVegetarian ? "#F4F3F4" : "#F4F3F4"}
          ios_backgroundColor="#3E3E3E"
          onValueChange={lactoHander}
          value={lactoVegetarian}
        />
        <Text style={styles.text}> Vegan</Text>
        <Text style={styles.subheading}>I do not eat meats, poultry,</Text>
        <Text style={styles.subheading}>fish nor animal products.</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#FB4B3D" }}
          thumbColor={vegan ? "#F4F3F4" : "#F4F3F4"}
          ios_backgroundColor="#3E3E3E"
          onValueChange={veganHandler}
          value={vegan}
        />
        <Text style={styles.subheader}>Preferences</Text>
        <Text style={styles.text}> Cheese</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#FB4B3D" }}
          thumbColor={cheese ? "#F4F3F4" : "#F4F3F4"}
          ios_backgroundColor="#3E3E3E"
          onValueChange={cheeseHandler}
          value={cheese}
        />
        <Text style={styles.text}> Orange</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#FB4B3D" }}
          thumbColor={orange ? "#F4F3F4" : "#F4F3F4"}
          ios_backgroundColor="#3E3E3E"
          onValueChange={orangeHandler}
          value={orange}
        />
        <Text style={styles.text}> Chocolate</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#FB4B3D" }}
          thumbColor={chocolate ? "#F4F3F4" : "#F4F3F4"}
          ios_backgroundColor="#3E3E3E"
          onValueChange={chocolateHandler}
          value={chocolate}
        />
        <Text style={styles.text}> Beetroot</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#FB4B3D" }}
          thumbColor={beetroot ? "#F4F3F4" : "#F4F3F4"}
          ios_backgroundColor="#3E3E3E"
          onValueChange={beetrootHandler}
          value={beetroot}
        />
        <View style={styles.button_Direction}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttontext}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={postHandler}>
            <Text style={styles.buttontext}>Finish</Text>
          </TouchableOpacity>
        </View>
        <Text> {post}</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: COLS.C_BG,
    flex: 1
  },
  container: {
    margin: FORMAT_containers.F_container_margin,
    backgroundColor: COLS.C_BG,
    margin: FORMAT_containers.F_container_margin,
    marginVertical: FORMAT_containers.F_container_marginVertical,
    padding: FORMAT_containers.F_container_padding,
    alignItems: FORMAT_containers.F_container_alignItems,
    justifyContent: FORMAT_containers.F_container_justifyContent,
    flex: FORMAT_containers.F_container_flex,
    backgroundColor: COLS.C_BG
  },
  text: {
    alignSelf: FORMAT_text.F_text_alignSelf,
    marginBottom: FORMAT_text.F_text_marginBottom,
    marginTop: FORMAT_text.F_text_marginTop,
    margin: FORMAT_text.F_text_margin,
    left: FORMAT_text.F_text_left,
    fontWeight: FORMAT_fonts.F_font_fontWeight,
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold"
  },
  switch: {
    right: FORMAT_switches.F_switch_right,
    bottom: FORMAT_switches.F_switch_bottom
  },
  button_Direction: {
    flexDirection: FORMAT_navButton.F_navButton_flexDirection
  },
  buttons: {
    alignSelf: FORMAT_navButton.F_navButton_alignSelf,
    padding: FORMAT_navButton.F_navButton_padding,
    backgroundColor: COLS.C_BG,
    borderRadius: FORMAT_navButton.F_navButton_borderRadius,
    margin: 20,
    padding: 15,
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
      color: COLS.C6_WHITE_TEXT
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5
  },
  heading: {
    alignSelf: FORMAT_headings.F_heading_alignSelfF_heading_alignSelf,
    left: FORMAT_headings.F_headingMainTitle_left,
    fontSize: FORMAT_headings.F_headingMainTitle_fontSize,
    fontWeight: FORMAT_headings.F_headingMainTitle_fontWeight,
    bottom: FORMAT_headings.F_headingMainTitle_bottom,
    marginBottom: FORMAT_headings.F_headingMainTitle_marginBottom,
    marginTop: FORMAT_headings.F_headingMainTitle_marginTop,
    color: COLS.C6_WHITE_TEXT
  },
  buttontext: {
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold",
    textAlign: "center"
  },
  subheading: {
    fontSize: FORMAT_headings.F_subHeading_fontSize,
    position: FORMAT_headings.F_subHeading_position,
    left: FORMAT_headings.F_subHeading_left,
    alignSelf: FORMAT_headings.F_subHeading_alignSelf,
    alignItems: FORMAT_headings.F_subHeading_alignItems,
    fontWeight: FORMAT_headings.F_subHeading_fontWeight,
    color: COLS.C6_WHITE_TEXT,
    textAlign: FORMAT_navButtonText.F_navButtonText_textAlign,
    fontSize: 11,
    fontWeight: "bold"
  },
  header: {
    marginTop: 20,
    color: COLS.C6_WHITE_TEXT,
    textAlign: FORMAT_navButtonText.F_navButtonText_textAlign,
    fontSize: 28,
    fontWeight: "bold"
  },
  subheader: {
    color: COLS.C6_WHITE_TEXT,
    textAlign: FORMAT_navButtonText.F_navButtonText_textAlign,
    fontSize: 22,
    fontWeight: "bold"
  }
});
