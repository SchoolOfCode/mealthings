import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "./COLS";

import { FORMAT_containers } from "./FORMAT_containers";

import { FORMAT_navButton, FORMAT_navButtonText } from "./FORMAT_navButton";

export default function Allergies({ navigation, route }) {
  const { data } = route.params;
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
    data[food_prefs_exc] = food_prefs_exc;
    console.log("data in allergies", data);
    navigation.navigate("Preferences", { data });
  }

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}> Allergies</Text>
        <View style={styles.position}>
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
        </View>

        <View style={styles.buttonPosition}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={postHandler}>
            <Text style={styles.buttonText}>Next</Text>
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
    backgroundColor: COLS.C_BG,
    padding: 20,
    alignItems: FORMAT_containers.F_container_alignItems,
    justifyContent: FORMAT_containers.F_container_justifyContent,
    backgroundColor: COLS.C_BG
  },
  position: {
    justifyContent: "center"
  },
  text: {
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold",
    top: 29
  },
  heading: {
    color: COLS.C6_WHITE_TEXT,
    textAlign: FORMAT_navButtonText.F_navButtonText_textAlign,
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 30,
    padding: 20
  },
  switch: {
    flexDirection: "column",
    padding: 10,
    marginLeft: 160
  },

  buttonText: {
    color: COLS.C6_WHITE_TEXT,
    fontSize: FORMAT_navButtonText.F_navButtonText_fontSize,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttons: {
    backgroundColor: COLS.C_BG,
    borderRadius: 5,
    alignSelf: FORMAT_navButton.F_navButton_alignSelf,
    padding: FORMAT_navButton.F_navButton_padding,
    borderWidth: 2,
    borderColor: COLS.C6_WHITE_TEXT,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5
  },
  buttonPosition: {
    flexDirection: "row",
    padding: 15
  }
});
