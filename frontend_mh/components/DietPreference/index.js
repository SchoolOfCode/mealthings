import React, { useState, Fragment, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";
import { AuthContext } from "../.././App.js";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "../../screens/COLS";

import { FORMAT_containers } from "../../screens/FORMAT_containers";
import { FORMAT_switches } from "../../screens/FORMAT_extraComponents";
import { FORMAT_headings } from "../../screens/FORMAT_headings";
import { FORMAT_navButton } from "../../screens/FORMAT_navButton";
import { FORMAT_text, FORMAT_fonts } from "../../screens/FORMAT_text";
import { FORMAT_navButtonText } from "../../screens/FORMAT_navButton";

const initialState = [
  { id: "noRequirement", name: "noRequirement", selected: false },
  { id: "vegetarian", name: "vegetarian", selected: false },
  { id: "ovovegetarian", name: "ovovegetarian", selected: false },
  { id: "lactoVegetarian", name: "lactoVegetarian", selected: false },
  { id: "vegan", name: "vegan", selected: false },
];

export default function Preferences({ navigation, route }) {
  const [pick, setPicked] = useState(initialState);
  const { userID } = useContext(AuthContext);
  const { data } = route.params;
  function togglePreferences(index) {
    setPicked([
      ...pick.slice(0, index),
      { ...pick[index], selected: !pick[index].selected },
      ...pick.slice(index + 1),
    ]);
    console.log(pick);
  }

  function postHandler() {
    const food_prefs_inc = pick
      .filter((item) => item.selected)
      .map((item) => item.id)
      .join();

    // fetch PATCH to the database
    data["food_prefs_inc"] = food_prefs_inc;
    console.log(data["postitems"]);
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    fetch(
      `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/${userID}`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Return from DietaryPreferences:", data);
      })
      .catch((err) => {
        console.warn(err);
      });
    console.log("final data in dietary prefs", data);
    navigation.navigate("LandingPage");
  }

  return (
    <ScrollView style={styles.background}>
      <Text style={styles.header}> Diet Preferences</Text>
      <View style={styles.container}>
        {pick.map((item, index) => (
          <Fragment key={item.id}>
            <Switch
              style={styles.switch}
              trackColor={{ false: COLS.C5_LIGHT_TEXT, true: COLS.C_RED }}
              thumbColor={COLS.C6_WHITE_TEXT}
              ios_backgroundColor={COLS.C4_DARK_TEXT}
              onValueChange={() => togglePreferences(index)}
              value={item.selected}
            />
          </Fragment>
        ))}
        <Text style={styles.text}> No Requirement</Text>
        <Text style={styles.subheading}> I have no dietary Requirements.</Text>
        <Text style={styles.text}> Vegetarian</Text>
        <Text style={styles.subheading}>
          I do not eat meat, fish nor poultry.
        </Text>

        <Text style={styles.text}> Ovo-Vegetarian </Text>
        <Text style={styles.subheading}>I do not eat diary foods, meat,</Text>
        <Text style={styles.subheading}> poultry nor fish.</Text>

        <Text style={styles.text}> Lacto-vegetarian</Text>
        <Text style={styles.subheading}>I do not eat eggs, meat,</Text>
        <Text style={styles.subheading}> poultry nor fish.</Text>

        <Text style={styles.text}> Vegan</Text>
        <Text style={styles.subheading}>I do not eat meats, poultry,</Text>
        <Text style={styles.subheading}>fish nor animal products.</Text>

        <View style={styles.button_Direction}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttontext}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.buttontext} onPress={postHandler}>
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: COLS.C_BG,
    flex: 1,
  },
  container: {
    margin: FORMAT_containers.F_container_margin,
    backgroundColor: COLS.C_BG,
    marginVertical: 10,
    padding: FORMAT_containers.F_container_padding,
    alignItems: FORMAT_containers.F_container_alignItems,
    justifyContent: FORMAT_containers.F_container_justifyContent,
    flex: FORMAT_containers.F_container_flex,
    backgroundColor: COLS.C_BG,
  },
  text: {
    alignSelf: FORMAT_text.F_text_alignSelf,
    marginBottom: FORMAT_text.F_text_marginBottom,
    marginTop: FORMAT_text.F_text_marginTop,
    paddingVertical: 17,
    left: FORMAT_text.F_text_left,
    bottom: 620,

    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontFamily: "Muli-Bold",
  },
  switch: {
    right: FORMAT_switches.F_switch_right,
    bottom: FORMAT_switches.F_switch_bottom,
    left: "40%",
    justifyContent: "space-around",
    paddingVertical: 45,
  },
  button_Direction: {
    flexDirection: FORMAT_navButton.F_navButton_flexDirection,
  },
  buttons: {
    alignSelf: FORMAT_navButton.F_navButton_alignSelf,
    padding: FORMAT_navButton.F_navButton_padding,
    backgroundColor: COLS.C_BG,
    borderRadius: FORMAT_navButton.F_navButton_borderRadius,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
      color: COLS.C6_WHITE_TEXT,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    bottom: 550,
  },
  heading: {
    alignSelf: FORMAT_headings.F_heading_alignSelfF_heading_alignSelf,
    left: FORMAT_headings.F_headingMainTitle_left,
    fontSize: FORMAT_headings.F_headingMainTitle_fontSize,
    fontFamily: "Muli-Bold",
    bottom: FORMAT_headings.F_headingMainTitle_bottom,
    marginBottom: FORMAT_headings.F_headingMainTitle_marginBottom,
    marginTop: FORMAT_headings.F_headingMainTitle_marginTop,
    color: COLS.C6_WHITE_TEXT,
  },
  buttontext: {
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontFamily: "Muli-Bold",
    textAlign: "center",
  },
  subheading: {
    fontSize: FORMAT_headings.F_subHeading_fontSize,
    position: FORMAT_headings.F_subHeading_position,
    left: FORMAT_headings.F_subHeading_left,
    alignSelf: FORMAT_headings.F_subHeading_alignSelf,
    alignItems: FORMAT_headings.F_subHeading_alignItems,
    fontFamily: "Muli-Bold",
    color: COLS.C6_WHITE_TEXT,
    textAlign: FORMAT_navButtonText.F_navButtonText_textAlign,
    fontSize: 13,
    bottom: 640,
  },
  header: {
    marginVertical: 30,
    color: COLS.C6_WHITE_TEXT,
    textAlign: FORMAT_navButtonText.F_navButtonText_textAlign,
    fontSize: 28,
    fontWeight: "bold",
  },
});
