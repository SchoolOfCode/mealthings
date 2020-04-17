import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Flatlist,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "./COLS";
import { MonoText } from "../components/StyledText";

export default function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [fatLoss, setFatLoss] = useState(false);
  const [muscle, setMuscle] = useState(false);
  const [diet, setDiet] = useState(false);
  const [time, setTime] = useState(false);
  const [cook, setCook] = useState(false);
  const [display, setDisplay] = useState();

  function Track(e) {
    setWeight(e.target.value);
  }
  function Tracked(e) {
    setHeight(e.target.value);
  }

  function HandleSubmit() {
    setDisplay("success");
    console.log(weight, height, fatLoss, muscle, diet, time, cook);
    // const data = { weight, height, fatLoss, muscle, diet, time, cook };
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify(data),
    // };
    // fetch("", options)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("this is", data);
    //   });
  }

  function highLightedF() {
    console.log("called");
    if (fatLoss === false) {
      setFatLoss(true);
      console.log("Goodbye");
    } else if (fatLoss === true) {
      setFatLoss(false);
      console.log("hello");
    }
  }
  function highLightedM() {
    if (muscle === false) {
      setMuscle(true);
    } else if (fatLoss === true) {
      setMuscle(false);
    }
  }
  function highLightedD() {
    if (diet === false) {
      setDiet(true);
    } else if (diet === true) {
      setDiet(false);
    }
  }
  function highLightedT() {
    if (time === false) {
      setTime(true);
    } else if (time === true) {
      setDiet(false);
    }
  }
  function highLightedC() {
    if (cook === false) {
      setCook(true);
    } else if (fatLoss === true) {
      setCook(false);
    }
  }

  return (
    <View style={styles.header}>
      <Text>{display}</Text>
      <View>
        <Text>Is updating or something</Text>
        <TextInput
          style={styles.Inputs}
          placeholder="Weight"
          placeholderTextColor="white"
          onChangeText={Track}
        ></TextInput>
        <TextInput
          style={styles.Inputs}
          placeholder="Height"
          placeholderTextColor="white"
          onChangeText={Tracked}
        ></TextInput>
      </View>
      <View style={styles.ImgFlex}>
        <TouchableOpacity onPress={highLightedF}>
          <Image
            onPress={highLightedF}
            style={styles.Imagetag}
            source={require("../assets/images/arrow.png")}
          />
          <Text onPress={highLightedF}> Fat Loss</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={highLightedM}>
          <Image
            style={styles.Imagetag}
            source={require("../assets/images/arrow.png")}
          />
          <Text> Gaining Muscle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={highLightedD}>
          <Image
            style={styles.Imagetag}
            source={require("../assets/images/arrow.png")}
          />
          <Text> No Diet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ImgFlex2}>
        <TouchableOpacity onPress={highLightedT}>
          <Image
            style={styles.Imagetag}
            source={require("../assets/images/arrow.png")}
          />
          <Text> Saving Time</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.Imagetag}
            onPress={highLightedC}
            source={require("../assets/images/arrow.png")}
          />
          <Text> Learning to Cook</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.Direction} onPress={HandleSubmit}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    height: 60,
  },
  Inputs: {
    alignSelf: "center",
    position: "relative",
    alignItems: "center",

    top: 100,
    width: 200,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    margin: 10,
    justifyContent: "space-evenly",
  },
  ImgFlex: {
    flexDirection: "row",
    justifyContent: "center",
  },
  ImgFlex2: {
    flexDirection: "row",
    justifyContent: "center",
  },
  Imagetag: {
    position: "relative",
    top: 150,
    width: 100,
    height: 100,
    margin: 10,
  },
  Direction: {
    position: "relative",
    top: 200,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    color: COLS.C_BG,
    textAlign: "center",
    padding: 5,
    width: 70,
    alignSelf: "center",
    borderRadius: 5,
    marginVertical: 3,
  },
});
