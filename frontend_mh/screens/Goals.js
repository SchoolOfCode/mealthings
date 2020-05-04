import React, { useState } from "react";
import { AuthContext } from "../App.js";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "./COLS";
import { FORMAT_background } from "./FORMAT_background";
import {
  FORMAT_containers,
  FORMAT_welcomeContainer,
  FORMAT_moreChoicesContainer,
} from "./FORMAT_containers";
import {
  FORMAT_switches,
  FORMAT_notes,
  FORMAT_todaysMeal,
  FORMAT_foodOptions,
  FORMAT_swipeBar,
  FORMAT_arrow,
  FORMAT_icons,
  FORMAT_mainRecipe,
} from "./FORMAT_extraComponents";
import { FORMAT_headings, FORMAT_textBoxHeading } from "./FORMAT_headings";
import { FORMAT_images } from "./FORMAT_images";
import { FORMAT_inputField } from "./FORMAT_inputField";
import { FORMAT_logo } from "./FORMAT_logo";
import {
  FORMAT_navButton,
  FORMAT_navButtonText,
  FORMAT_navButtonBackground,
} from "./FORMAT_navButton";
import { FORMAT_text, FORMAT_fonts } from "./FORMAT_text";
import { Row } from "react-native-drag-flatlist";

const screenWidth = Dimensions.get("screen").width;

export default function Goals({ navigation, route }) {
  const { userID } = useContext(AuthContext);
  const { dataPlus } = route.params;
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [fatLoss, setFatLoss] = useState(false);
  const [muscle, setMuscle] = useState(false);
  const [diet, setDiet] = useState(false);
  const [time, setTime] = useState(false);
  const [cook, setCook] = useState(false);

  function Track(enteredText) {
    setWeight(enteredText);
  }
  function Tracked(enteredText) {
    setHeight(enteredText);
  }

  function handleSubmit() {
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
          <View style={styles.positioning}>
            <TouchableOpacity onPress={timeHandler}>
              <Image
                style={styles.img2}
                source={require("../assets/images/time.png")}
              />
              <Text style={styles.text2}>Saving Time</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.positioning}>
            <TouchableOpacity onPress={cookHandler}>
              <Image
                style={styles.img2}
                source={require("../assets/images/Cooking.png")}
              />
              <Text style={styles.text2}>Learning to Cook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonFlex}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.buttonText}
          >
            <Text style={styles.TextStyle}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit} style={styles.buttonText}>
            <Text style={styles.TextStyle}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  margin: {
    marginVertical: FORMAT_inputField.F_inputField_marginVertical,
  },
  inputField: {
    marginVertical: FORMAT_inputField.F_inputField_marginVertical,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: FORMAT_inputField.F_inputField_width,
    alignSelf: FORMAT_inputField.F_inputField_alignSelf,
    height: FORMAT_inputField.F_inputField_height,
    borderRadius: FORMAT_inputField.F_inputField_borderRadius,
  },
  flex: {
    flexDirection: FORMAT_navButton.F_navButton_flexDirection,
    marginVertical: FORMAT_navButton.F_navButton_marginVertical,
  },
  flex2: { flexDirection: FORMAT_navButton.F_navButton_flexDirection },
  img: {
    width: FORMAT_images.F_image_width,
    height: FORMAT_images.F_image_height,
    alignSelf: FORMAT_images.F_image_alignSelf,
    left: FORMAT_images.F_image_left,
    marginHorizontal: FORMAT_images.F_image_marginHorizontal,
  },
  img2: {
    width: FORMAT_images.F_image_width,
    height: FORMAT_images.F_image_height,
    alignSelf: FORMAT_images.F_image_alignSelf,
    marginHorizontal: FORMAT_images.F_image_marginHorizontal,
  },
  text: {
    alignSelf: FORMAT_text.F_text_alignSelf,
    left: 50 / 2,
    marginVertical: 10,
  },
  text2: { alignSelf: FORMAT_text.F_text_alignSelf },
  buttonFlex: {
    flexDirection: FORMAT_navButton.F_navButton_flexDirection,
    justifyContent: FORMAT_navButton.F_navButton_justifyContent,
  },
  buttonText: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    color: COLS.C_BG,
    justifyContent: FORMAT_navButton.F_navButtonText_justifyContent,
    alignItems: FORMAT_navButton.F_navButtonText_alignItems,
    padding: FORMAT_navButton.F_navButtonText_padding,
    width: FORMAT_navButton.F_navButtonText_width,
    borderRadius: FORMAT_navButton.F_navButtonText_borderRadius,
    marginVertical: FORMAT_navButton.F_navButtonText_marginVertical,
  },
});
