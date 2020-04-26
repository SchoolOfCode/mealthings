import { COLS } from "./COLS";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("screen").width;

const FORMAT_inputField = {
  F_inputField_height: 50,
  F_inputField_width: 200,
  F_inputField_marginVertical: 5,
  F_inputField_alignSelf: "center",
  F_inputField_alignItems: "center",
  F_inputField_borderRadius: 5,
  F_inputField_flexDirection: "row",
  F_inputField_backgroundColor: COLS.C5_LIGHT_TEXT
};

export { FORMAT_inputField };
