import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
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

const screenWidth = Dimensions.get("screen").width;

export default function SplashPWReset({ navigation, route }) {
  const { data } = route.params;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [display, setDisplay] = useState();

  function usernameHandler(enteredText) {
    setUsername(enteredText);
  }
  function passwordHandler(enteredText) {
    setPassword(enteredText);
  }

  function SubmitHandler() {
    setDisplay("Submitted");
    console.log(username, password);
    const dataPlus = { ...data, username, password };
    console.log("dataPlus in register 2:", dataPlus);
    navigation.navigate("Goals", { dataPlus });
  }

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <FontAwesome name="glass-whiskey" size={150} style={styles.icon} />
      </View>
      <View style={styles.textRect}>
        <Text>Reset Your Password for MealThings App</Text>
      </View>
      <View>
        <Text style={styles.headerC}>
          <Image source={require("../assets/images/arrow.png")} />
        </Text>
        <View>
          <TextInput
            style={styles.inputField}
            onChangeText={usernameHandler}
            placeholder="Username"
            placeholderTextColor="black"
            maxLength={12}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Password"
            keyboardType="password"
            onChangeText={passwordHandler}
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.buttonFlex}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.buttonText}
          >
            <Text style={styles.TextStyle}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={SubmitHandler} style={styles.buttonText}>
            <Text style={styles.TextStyle}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 5,
    justifyContent: "space-around",
    backgroundColor: COLS.C_BG,
    flex: 1,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200,
    padding: 20,
    backgroundColor: COLS.C_LOGO_BG,
  },
  inputField: {
    marginVertical: 15,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
  },
  headerC: {
    marginTop: 30,
  },
  formatting: {
    alignSelf: "center",
  },
  buttonFlex: {
    flexDirection: "row",
    width: screenWidth * 0.5,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 3,
    width: 80,
  },
  buttonFormat: {
    flexDirection: "row",
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 80,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "space-between",
  },
  textRect: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: "50%",
    padding: 15,
    margin: 5,
  },
  text: {
    textAlign: "center",
  },
  icon: { textAlign: "center", alignSelf: "center" },
});
