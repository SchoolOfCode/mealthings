import { COLS } from "./COLS";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("screen").width;

const FORMAT_logo = {
  F_logo_margin: "auto",
  F_logo_alignItems: "center",
  F_logo_justifyContent: "center",
  F_logo_width: 60,
  F_logo_height: 60,
  F_logo_alignSelf: "center",
  F_logoCircle_width: 200,
  F_logoCircle_height: 200,
  F_logoCircle_left: 170,
  F_logoCircle_bottom: 20,
  F_logoCircle_marginBottom: 15,
  F_logoCircle_borderRadius: 200,
  F_logoCircle_backgroundColor: COLS.C_LOGO_BG
};

export { FORMAT_logo };
