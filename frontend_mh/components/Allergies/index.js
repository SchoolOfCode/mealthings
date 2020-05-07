import React, { useState, Fragment } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { COLS } from "../../screens/COLS";
import { FORMAT_background } from "../../screens/FORMAT_background";
import { FORMAT_containers } from "../../screens/FORMAT_containers";
import { FORMAT_switches } from "../../screens/FORMAT_extraComponents";
import {
  FORMAT_navButton,
  FORMAT_navButtonText,
} from "../../screens/FORMAT_navButton";
import { FORMAT_text, FORMAT_fonts } from "../../screens/FORMAT_text";
import { FORMAT_headings } from "../../screens/FORMAT_headings";

const initialState = [
  { id: "celery", name: "Celery", allergic: false },
  { id: "gluten", name: "Gluten", allergic: false },
  { id: "crustaceans", name: "Crustaceans", allergic: false },
  { id: "eggs", name: "Eggs", allergic: false },
  { id: "fish", name: "Fish", allergic: false },
  { id: "lupin", name: "Lupin", allergic: false },
  { id: "milk", name: "Milk", allergic: false },
  { id: "molluscs", name: "Molluscs", allergic: false },
  { id: "mustard", name: "Mustard", allergic: false },
  { id: "treeNuts", name: "TreeNuts", allergic: false },
  { id: "peanuts", name: "Peanuts", allergic: false },
  { id: "sesame_Seeds", name: "Sesame Seeds", allergic: false },
  { id: "soybeans", name: "Soybeans", allergic: false },
  { id: "dioxide", name: "Dioxide", allergic: false },
];

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLS.C_BG,
    flex: 1,
  },
  container: {
    backgroundColor: COLS.C_BG,
    padding: 20,
    alignItems: FORMAT_containers.F_container_alignItems,
    justifyContent: FORMAT_containers.F_container_justifyContent,
    backgroundColor: COLS.C_BG,
  },
  position: {
    justifyContent: "center",
  },
  text: {
    alignSelf: FORMAT_text.F_text_alignSelf,
    marginBottom: FORMAT_text.F_text_marginBottom,
    fontWeight: FORMAT_fonts.F_font_fontWeight,
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold",
  },
  heading: {
    color: COLS.C6_WHITE_TEXT,
    textAlign: FORMAT_navButtonText.F_navButtonText_textAlign,
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 60,
  },
  switch: {
    flexDirection: "column",
    marginLeft: "70%",
    bottom: "3.7%",
  },
  buttonText: {
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold",
    textAlign: "center",
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
      color: COLS.C6_WHITE_TEXT,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonPosition: {
    flexDirection: "row",
  },
});

export default function Allergies({ onBackClick, onSubmit }) {
  const [allergens, setAllergens] = useState(initialState);

  function toggleAllergen(index) {
    setAllergens([
      ...allergens.slice(0, index),
      { ...allergens[index], allergic: !allergens[index].allergic },
      ...allergens.slice(index + 1),
    ]);
  }

  function postHandler() {
    const preferences = allergens
      .filter((item) => item.allergic)
      .map((item) => item.id)
      .join();
    onSubmit(preferences);
    // fetch PATCH to the database
  }

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}> Allergies</Text>
        <View style={styles.position}>
          {allergens.map((item, index) => (
            <Fragment key={item.id}>
              <Text style={styles.text}> {item.name}</Text>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#FB4B3D" }}
                thumbColor="#F4F3F4"
                ios_backgroundColor="#3E3E3E"
                onValueChange={() => toggleAllergen(index)}
                value={item.allergic}
              />
            </Fragment>
          ))}
        </View>
        <View style={styles.buttonPosition}>
          <TouchableOpacity style={styles.buttons} onPress={onBackClick}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={postHandler}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
