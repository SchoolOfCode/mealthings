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
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "./COLS";
import { MonoText } from "../components/StyledText";

export default function HomeScreen({ navigation }) {
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
      console.log("hello");
    } else if (ovovegetarian === true) {
      setOvovegetarian(false);
      console.log("Goodbye");
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
      console.log("hello");
    } else if (beetroot === true) {
      setBeetroot(false);
      console.log("Goodbye");
    }
  }

  function postHandler() {
    setPost("submitted");

    console.log({
      noRequirement,
      vegetarian,
      ovovegetarian,
      lactoVegetarian,
      vegan,
      cheese,
      orange,
      chocolate,
      beetroot,
    });
    navigation.navigate("LandingPage");
  }

  return (
    <ScrollView style={styles.background}>
      <Text style={styles.Font}> Diet Preferences</Text>

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
            onPress={() => navigation.navigate("Allergies")}
            style={styles.buttonstyle}
          >
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyle} onPress={postHandler}>
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
    margin: 10,
  },
  Font: {
    alignSelf: "center",
    marginBottom: 10,
    marginVertical: 20,
  },
  text: {
    margin: 5,
    left: 40,
    fontWeight: "bold",
  },
  switch: {
    right: 40,
    bottom: 27,
  },
  buttons: {
    flexDirection: "row",
  },
  buttonstyle: {
    margin: 10,
    alignSelf: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    left: 120,
    borderRadius: 5,
    width: 80,
  },

  header: {
    alignSelf: "center",
  },

  subheading: {
    fontSize: 10,
    position: "relative",
    left: 50,
  },
});
