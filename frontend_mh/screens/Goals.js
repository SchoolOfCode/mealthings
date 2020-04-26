import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "./COLS";

import { FORMAT_images } from "./FORMAT_images";
import { FORMAT_inputField } from "./FORMAT_inputField";

import { FORMAT_navButton } from "./FORMAT_navButton";
import { FORMAT_text } from "./FORMAT_text";

const screenWidth = Dimensions.get("screen").width;

export default function Goals({ navigation, route }) {
  const { dataPlus } = route.params;
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

  function handleSubmit() {
    setDisplay("success");
    var goals = "";
    if (fatLoss) {
      goals += "Fat loss,";
    }
    if (muscle) {
      goals += ",Muscle gain";
    }
    if (diet) {
      goals += ",No diet";
    }
    if (time) {
      goals += ",Save time";
    }
    if (cook) {
      goals += ",Learn to cook";
    }
    const dataPlusPlus = { ...dataPlus, height, weight, goals };
    console.log("dataPlusPlus in goals", dataPlusPlus);
    navigation.navigate("SplashSuccess", { dataPlusPlus });
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
      <Image source={require("../assets/images/cookingConfirmed.png")} />;
    } else if (cook === false) {
      setCook(true);
    } else if (cook === true) {
      setCook(false);
    }
  }

  function HandleSubmit() {
    setDisplay("success");
    console.log({ weight, height, fatLoss, muscle, diet, time, cook });
    var goals = "";
    if (fatLoss) {
      goals += "Fat loss,";
    }
    if (muscle) {
      goals += ",Muscle gain";
    }
    if (diet) {
      goals += ",No diet";
    }
    if (time) {
      goals += ",Save time";
    }
    if (cook) {
      goals += ",Learn to cook";
    }
    const dataPlusPlus = { ...dataPlus, goals };
    console.log(dataPlusPlus);
    navigation.navigate("SplashSuccess", { dataPlusPlus });
  }

  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.column}>
          <Text style={styles.padding}> (Kg)</Text>
          <Text style={styles.padding}> (cm)</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.arrow}
            source={require("../assets/images/goback.png")}
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
            maxLength={3}
          ></TextInput>
          <TextInput
            style={styles.inputField}
            placeholder="Height"
            placeholderTextColor="white"
            type="number"
            onChangeText={Tracked}
            maxLength={3}
          ></TextInput>
        </View>
        <View style={styles.flex}>
          <View>
            <TouchableOpacity onPress={fatHandler}>
              <Image
                style={styles.image1}
                source={require("../assets/images/calories.png")}
              />

              <Text style={styles.text}>Fatloss</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={muscleHandler}>
              <Image
                style={styles.image1}
                source={require("../assets/images/woman.png")}
              />
              <Text style={styles.text}>Gaining Muscle</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={dietHandler}>
              <Image
                style={styles.image1}
                source={require("../assets/images/eat.png")}
              />
              <Text style={styles.text}>No Diet</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flex2}>
          <View style={styles.positioning}>
            <TouchableOpacity onPress={timeHandler}>
              <Image
                style={styles.image2}
                source={require("../assets/images/time.png")}
              />
              <Text style={styles.text2}>Saving Time</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.positioning}>
            <TouchableOpacity onPress={cookHandler}>
              <Image
                style={styles.image2}
                source={require("../assets/images/Cooking.png")}
              />
              <Text style={styles.text2}>Learning to Cook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.buttons}
          >
            <Text style={styles.TextStyle}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit} style={styles.buttons}>
            <Text style={styles.TextStyle}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  margin: {
    marginVertical: 50
  },
  inputField: {
    height: FORMAT_inputField.F_inputField_height,
    width: FORMAT_inputField.F_inputField_width,
    marginVertical: FORMAT_inputField.F_inputField_marginVertical,
    alignSelf: FORMAT_inputField.F_inputField_alignSelf,
    alignItems: FORMAT_inputField.F_inputField_alignItems,
    borderRadius: FORMAT_inputField.F_inputField_borderRadius,
    flexDirection: FORMAT_inputField.F_inputField_flexDirection,
    backgroundColor: COLS.C5_LIGHT_TEXT
  },
  flex: {
    flexDirection: FORMAT_navButton.F_navButton_flexDirection,
    marginVertical: FORMAT_navButton.F_navButton_marginVertical
  },
  flex2: { flexDirection: FORMAT_navButton.F_navButton_flexDirection },
  image1: {
    width: FORMAT_images.F_image_width,
    height: FORMAT_images.F_image_height,
    alignSelf: FORMAT_images.F_image_alignSelf,
    left: FORMAT_images.F_image_left,
    marginHorizontal: FORMAT_images.F_image_marginHorizontal
  },
  image2: {
    width: FORMAT_images.F_image_width,
    height: FORMAT_images.F_image_height,
    alignSelf: FORMAT_images.F_image_alignSelf,
    marginHorizontal: FORMAT_images.F_image_marginHorizontal
  },
  text: {
    alignSelf: FORMAT_text.F_text_alignSelf,
    left: FORMAT_text.F_text_left,
    marginTop: FORMAT_text.F_text_marginTop
  },
  text2: { alignSelf: FORMAT_text.F_text_alignSelf },

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
  }
});
