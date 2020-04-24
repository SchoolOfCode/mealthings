import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";
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

export default function Allergies({ navigation, route }) {
  const { dataPlusPlus } = route.params;
  console.log("dataplusplus at the start of Allergies", dataPlusPlus);
  const [celery, setCelery] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [crustaceans, setCrustaceans] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [fish, setFish] = useState(false);
  const [lupin, setLupin] = useState(false);
  const [milk, setMilk] = useState(false);
  const [molluscs, setMolluscs] = useState(false);
  const [mustard, setMustard] = useState(false);
  const [treeNuts, settreeNuts] = useState(false);
  const [peanuts, setPeanuts] = useState(false);
  const [sesame_Seeds, setSesame_Seeds] = useState(false);
  const [soybeans, setsoyBeans] = useState(false);
  const [dioxide, setDioxide] = useState(false);
  const [post, setPost] = useState();

  function celeryHandler() {
    if (celery === false) {
      setCelery(true);
    } else if (celery === true) {
      setCelery(false);
    }
  }
  function glutenHandler() {
    if (gluten === false) {
      setGluten(true);
    } else if (gluten === true) {
      setGluten(false);
    }
  }
  function crustaceansHandler() {
    if (crustaceans === false) {
      setCrustaceans(true);
    } else if (crustaceans === true) {
      setCrustaceans(false);
    }
  }
  function eggHandler() {
    if (eggs === false) {
      setEggs(true);
    } else if (eggs === true) {
      setEggs(false);
    }
  }
  function fishHandler() {
    if (fish === false) {
      setFish(true);
    } else if (fish === true) {
      setFish(false);
    }
  }
  function lupinHandler() {
    if (lupin === false) {
      setLupin(true);
    } else if (lupin === true) {
      setLupin(false);
    }
  }
  function milkHandler() {
    if (milk === false) {
      setMilk(true);
    } else if (milk === true) {
      setMilk(false);
    }
  }
  function molluscsHandler() {
    if (molluscs === false) {
      setMolluscs(true);
    } else if (molluscs === true) {
      setMolluscs(false);
    }
  }
  function mustardHandler() {
    if (mustard === false) {
      setMustard(true);
    } else if (mustard === true) {
      setMustard(false);
    }
  }
  function treeNutsHandler() {
    if (treeNuts === false) {
      settreeNuts(true);
    } else if (treeNuts === true) {
      settreeNuts(false);
    }
  }
  function peanutsHandler() {
    if (peanuts === false) {
      setPeanuts(true);
    } else if (peanuts === true) {
      setPeanuts(false);
    }
  }
  function seasame_SeedsHandler() {
    if (sesame_Seeds === false) {
      setSesame_Seeds(true);
    } else if (sesame_Seeds === true) {
      setSesame_Seeds(false);
    }
  }
  function soybeanHandler() {
    if (soybeans === false) {
      setsoyBeans(true);
    } else if (soybeans === true) {
      setsoyBeans(false);
    }
  }
  function dioxideHandler() {
    if (dioxide === false) {
      setDioxide(true);
    } else if (dioxide === true) {
      setDioxide(false);
    }
  }
  function postHandler() {
    setPost("submitted");
    var food_prefs_exc = "";
    if (celery) {
      food_prefs_exc += "celery,";
    }
    if (gluten) {
      food_prefs_exc += "gluten,";
    }
    if (crustaceans) {
      food_prefs_exc += "crustaceans,";
    }
    if (eggs) {
      food_prefs_exc += "eggs,";
    }
    if (fish) {
      food_prefs_exc += "fish,";
    }
    if (lupin) {
      food_prefs_exc += "lupin,";
    }
    if (milk) {
      food_prefs_exc += "milk,";
    }
    if (molluscs) {
      food_prefs_exc += "molluscs,";
    }
    if (mustard) {
      food_prefs_exc += "mustard,";
    }
    if (treeNuts) {
      food_prefs_exc += "treeNuts,";
    }
    if (peanuts) {
      food_prefs_exc += "peanuts,";
    }
    if (sesame_Seeds) {
      food_prefs_exc += "sesame_Seeds,";
    }
    if (soybeans) {
      food_prefs_exc += "soybeans,";
    }
    if (dioxide) {
      food_prefs_exc += "dioxide";
    }
    const data = { ...dataPlusPlus, food_prefs_exc };
    console.log("data in allergies", data);
    navigation.navigate("Preferences", { data });
  }

  return (
    <ScrollView style={styles.background}>
      <Text style={styles.text}> Allergies</Text>
      <View style={styles.container}>
        <Text style={styles.text}> Celery</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={celery ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={celeryHandler}
          value={celery}
        />
        <Text style={styles.text}> Crustaceans</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={crustaceans ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={crustaceansHandler}
          value={crustaceans}
        />
        <Text style={styles.text}> Eggs </Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={eggs ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={eggHandler}
          value={eggs}
        />
        <Text style={styles.text}> Fish</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={fish ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={fishHandler}
          value={fish}
        />

        <Text style={styles.text}> Gluten</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={gluten ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={glutenHandler}
          value={gluten}
        />
        <Text style={styles.text}> Lupin</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={lupin ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={lupinHandler}
          value={lupin}
        />
        <Text style={styles.text}> Milk</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={milk ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={milkHandler}
          value={milk}
        />
        <Text style={styles.text}> Molluscs</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={molluscs ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={molluscsHandler}
          value={molluscs}
        />
        <Text style={styles.text}> Mustard</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={mustard ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={mustardHandler}
          value={mustard}
        />

        <Text style={styles.text}> Peanuts</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={peanuts ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={peanutsHandler}
          value={peanuts}
        />
        <Text style={styles.text}> Seasame Seeds</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={sesame_Seeds ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={seasame_SeedsHandler}
          value={sesame_Seeds}
        />
        <Text style={styles.text}> Soybeans</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={soybeans ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={soybeanHandler}
          value={soybeans}
        />
        <Text style={styles.text}> Suphur Dioxide</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={dioxide ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={dioxideHandler}
          value={dioxide}
        />
        <Text style={styles.text}> Tree nuts</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={treeNuts ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={treeNutsHandler}
          value={treeNuts}
        />

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.goBack()}
          >
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={postHandler}>
            <Text>Next</Text>
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
    backgroundHeight: F_background_height
  },
  container: {
    margin: F_container_margin,
    backgroundColor: COLS.C_BG
  },
  text: {
    alignSelf: F_text_alignSelf,
    marginBottom: F_text_marginBottom,
    marginTop: F_text_marginTop,
    margin: F_text_margin,
    left: F_text_left,
    font: F_font_font
  },
  switch: {
    right: F_switch_right,
    bottom: F_switch_bottom
  },
  buttons: {
    flexDirection: F_navButton_flexDirection,
    justifyContent: F_navButton_justifyContent,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: F_navButton_width,
    padding: F_navButton_padding,
    alignItems: F_navButton_alignItems,
    margin: F_navButton_margin,
    borderRadius: F_navBitton_borderRadius
  }
});
