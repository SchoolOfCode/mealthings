import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Flatlist,
  Switch,
  Button,
  TextInput
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "./COLS";
import { FORMAT_background } from "./FORMAT_background";
import {
  FORMAT_containers,
  FORMAT_welcomeContainer,
  FORMAT_moreChoicesContainer
} from "./FORMAT_containers";
import {
  FORMAT_switches,
  FORMAT_notes,
  FORMAT_todaysMeal,
  FORMAT_foodOptions,
  FORMAT_swipeBar,
  FORMAT_arrow,
  FORMAT_icons,
  FORMAT_mainRecipe
} from "./FORMAT_extraComponents";
import { FORMAT_headings, FORMAT_textBoxHeading } from "./FORMAT_headings";
import { FORMAT_images } from "./FORMAT_images";
import { FORMAT_inputField } from "./FORMAT_inputField";
import { FORMAT_logo } from "./FORMAT_logo";
import {
  FORMAT_navButton,
  FORMAT_navButtonText,
  FORMAT_navButtonBackground
} from "./FORMAT_navButton";
import { FORMAT_text, FORMAT_fonts } from "./FORMAT_text";
import { MonoText } from "../components/StyledText";

export default function Preferences({ navigation, route }) {
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
      // setCheese(false);
      // setOrange(false);
      // setChocolate(false);
      // setBeetroot(false);
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
    const dataPlus = { ...data, food_prefs_inc };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(dataPlus)
    };
    fetch(
      "http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users",
      options
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("Return from RegisterScreen:", data);
      })
      .catch(err => {
        console.warn(err);
      });
    console.log("final dataplus in dietary prefs", dataPlus);
    navigation.navigate("LandingPage", dataPlus);
  }

  return (
    <ScrollView style={styles.background}>
      <Text style={styles.heading}> Diet Preferences</Text>

      <View style={styles.container}>
        <Text style={styles.text}> No Requirement</Text>
        <Text style={styles.subheading}> I have no dietary Requirements</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={noRequirement ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={noRequirementHandler}
          value={noRequirement}
        />
        <Text style={styles.text}> Vegetarian</Text>
        <Text style={styles.subheading}>
          I do not eat meat, fish nor poultry
        </Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={vegetarian ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={vegetarianHandler}
          value={vegetarian}
        />
        <Text style={styles.text}> Ovo-Vegetarian </Text>
        <Text style={styles.subheading}>
          I do not eat diary foods, meat, poultry or fish
        </Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={ovovegetarian ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={ovovegetarianHandler}
          value={ovovegetarian}
        />
        <Text style={styles.text}> Lacto-vegetarian</Text>
        <Text style={styles.subheading}>
          I do not eat eggs, meat, poultry nor fish
        </Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={lactoVegetarian ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={lactoHander}
          value={lactoVegetarian}
        />

        <Text style={styles.text}> Vegan</Text>
        <Text style={styles.subheading}>I do not eat meats, poultry,</Text>
        <Text style={styles.subheading}>fish nor animal products</Text>

        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={vegan ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={veganHandler}
          value={vegan}
        />
        <View style={styles.header}>
          <Text>Preferences</Text>
        </View>
        <Text style={styles.text}> Cheese</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={cheese ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={cheeseHandler}
          value={cheese}
        />
        <Text style={styles.text}> Orange</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={orange ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={orangeHandler}
          value={orange}
        />
        <Text style={styles.text}> Chocolate</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={chocolate ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={chocolateHandler}
          value={chocolate}
        />
        <Text style={styles.text}> Beetroot</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={beetroot ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={beetrootHandler}
          value={beetroot}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.button}
          >
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={postHandler}>
            <Text>Finish</Text>
          </TouchableOpacity>
        </View>
        <Text> {post}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: { backgroundColor: COLS.C_BG },
  container: {
    margin: FORMAT_containers.F_container_margin
  },
  text: {
    alignSelf: FORMAT_text.F_text_alignSelf,
    marginBottom: FORMAT_text.F_text_marginBottom,
    marginTop: FORMAT_text.F_text_marginTop,
    margin: FORMAT_text.F_text_margin,
    left: FORMAT_text.F_text_left,
    fontWeight: FORMAT_fonts.F_font_fontWeight
  },
  switch: {
    right: FORMAT_switches.F_switch_right,
    bottom: FORMAT_switches.F_switch_bottom
  },
  buttons: {
    flexDirection: FORMAT_navButton.F_navButton_flexDirection,
    justifyContent: FORMAT_navButton.F_navButton_justifyContent,
    margin: FORMAT_navButton.F_navButton_margin,
    alignSelf: FORMAT_navButton.F_navButton_alignSelf,
    alignItems: FORMAT_navButton.F_navButton_alignItems,
    padding: FORMAT_navButton.F_navButton_padding,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    borderRadius: FORMAT_navButton.F_navButton_borderRadius,
    width: FORMAT_navButton.F_navButton_width
  },

  heading: {
    alignSelf: FORMAT_headings.F_heading_alignSelfF_heading_alignSelf
  },

  subheading: {
    fontSize: FORMAT_headings.F_subHeading_fontSize,
    position: FORMAT_headings.F_subHeading_position,
    left: FORMAT_headings.F_subHeading_left
  }
});
