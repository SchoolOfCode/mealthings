import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "./COLS";
import { FORMAT_background } from "./FORMAT_background";
import { FORMAT_containers } from "./FORMAT_containers";
import { FORMAT_switches } from "./FORMAT_extraComponents";
import { FORMAT_navButton } from "./FORMAT_navButton";
import { FORMAT_text, FORMAT_fonts } from "./FORMAT_text";
import { FORMAT_headings } from "./FORMAT_headings";

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
      <Text style={styles.heading}> Allergies</Text>
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
    flex: 1,
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
    flexDirection: FORMAT_containers.F_container_flexDirection,
    backgroundColor: COLS.C_BG,
  },
  text: {
    alignSelf: FORMAT_text.F_text_alignSelf,
    marginBottom: FORMAT_text.F_text_marginBottom,
    marginTop: FORMAT_text.F_text_marginTop,
    margin: FORMAT_text.F_text_margin,
    left: FORMAT_text.F_text_left,
    fontFamily: FORMAT_fonts.F_font_font,
  },
  heading: {
    alignSelf: FORMAT_headings.F_heading_alignSelfF_heading_alignSelf,
    left: FORMAT_headings.F_headingMainTitle_left,
    fontSize: FORMAT_headings.F_headingMainTitle_fontSize,
    fontWeight: FORMAT_headings.F_headingMainTitle_fontWeight,
    bottom: FORMAT_headings.F_headingMainTitle_bottom,
    marginBottom: FORMAT_headings.F_headingMainTitle_marginBottom,
    marginTop: FORMAT_headings.F_headingMainTitle_marginTop,
  },
  switch: {
    right: FORMAT_switches.F_switch_right,
    bottom: FORMAT_switches.F_switch_bottom,
  },
  buttons: {
    flexDirection: FORMAT_navButton.F_navButton_flexDirection,
    justifyContent: FORMAT_navButton.F_navButton_justifyContent,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: FORMAT_navButton.F_navButton_width,
    padding: FORMAT_navButton.F_navButton_padding,
    alignItems: FORMAT_navButton.F_navButton_alignItems,
    margin: FORMAT_navButton.F_navButton_margin,
    borderRadius: FORMAT_navButton.F_navBitton_borderRadius,
  },
});
