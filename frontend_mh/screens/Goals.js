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
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "./COLS";
import { MonoText } from "../components/StyledText";

export default function Goals() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [fatLoss, setFatLoss] = useState(false);
  const [muscle, setMuscle] = useState(false);
  const [diet, setDiet] = useState(false);
  const [time, setTime] = useState(false);
  const [cook, setCook] = useState(false);
  const [display, setDisplay] = useState();

  function Track(enteredText) {
    setWeight(enteredText);
  }
  function Tracked(enteredText) {
    setHeight(enteredText);
  }

  function HandleSubmit() {
    setDisplay("success");
    console.log({ weight, height, fatLoss, muscle, diet, time, cook });
  }

  function fatHandler() {
    if (diet === true) {
      setTime(false);
    } else if (fatLoss === false) {
      setFatLoss(true);
    } else if (fatLoss === true) {
      setFatLoss(false);
    }
  }
  function muscleHandler() {
    if (diet === true) {
      setMuscle(false);
    } else if (muscle === false) {
      setMuscle(true);
    } else if (muscle === true) {
      setMuscle(false);
    }
  }
  function dietHandler() {
    if (diet === true) {
      setDiet(true);
    } else if (diet === true) {
      setDiet(false);
    }
  }
  function timeHandler() {
    if (diet === true) {
      setTime(false);
    } else if (time === false) {
      setTime(true);
    } else if (time === true) {
      setTime(false);
    }
  }
  function cookHandler() {
    if (diet === true) {
      setCook(false);
    } else if (cook === false) {
      setCook(true);
    } else if (cook === true) {
      setCook(false);
    }
  }

  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.arrow}
            source={require("../assets/images/arrow.png")}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.Goals}>Goals</Text>
        <View style={styles.margin}>
          <TextInput
            type="number"
            style={styles.inputField}
            placeholder="Weight"
            placeholderTextColor="white"
            onChangeText={Track}
          ></TextInput>
          <TextInput
            style={styles.inputField}
            placeholder="Height"
            placeholderTextColor="white"
            type="number"
            onChangeText={Tracked}
          ></TextInput>
        </View>
        <View style={styles.flex}>
          <View>
            <TouchableOpacity onPress={fatHandler}>
              <Image
                style={styles.img}
                source={require("../assets/images/calories.png")}
              />

              <Text style={styles.text}>Fatloss</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={muscleHandler}>
              <Image
                style={styles.img}
                source={require("../assets/images/woman.png")}
              />
              <Text style={styles.text}>Gaining Muscle</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={dietHandler}>
              <Image
                style={styles.img}
                source={require("../assets/images/eat.png")}
              />
              <Text style={styles.text}>No Diet</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flex2}>
          <View>
            <TouchableOpacity onPress={timeHandler}>
              <Image
                style={styles.img2}
                source={require("../assets/images/time.png")}
              />
              <Text style={styles.text2}>Saving Time</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={cookHandler}>
              <Image
                style={styles.img2}
                source={require("../assets/images/Cooking.png")}
              />
              <Text style={styles.text2}>Learning to Cook</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={HandleSubmit}>
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Goals: {
    alignSelf: "center",
  },
  arrow: {
    height: 40,
    width: 40,
    left: 30,
    top: 20,
  },
  margin: {
    marginVertical: 50,
  },
  inputField: {
    marginVertical: 5,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
  },
  flex: { flexDirection: "row", marginVertical: 20 },
  flex2: { flexDirection: "row", right: 20 },
  img: {
    width: 100,
    height: 100,
    alignSelf: "center",
    left: 50 / 2,
    marginHorizontal: 10,
  },
  img2: {
    width: 100,
    height: 100,
    alignSelf: "center",
    left: 190 / 2,
    marginHorizontal: 10,
  },
  text: { alignSelf: "center", left: 50 / 2, marginVertical: 10 },
  text2: { alignSelf: "center", left: 190 / 2 },
  button: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    color: COLS.C_BG,
    textAlign: "center",
    padding: 5,
    width: 70,
    alignSelf: "center",
    borderRadius: 5,
    marginVertical: 50,
  },
});
