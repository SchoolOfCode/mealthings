import { COLS } from "./COLS";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("screen").width;

const FORMAT_text = {
  F_text_alignSelf: "flex-start",
  F_text_marginBottom: 10,
  F_text_marginTop: 20,
  F_text_margin: 5,
  F_text_left: 40,
  F_text_direction: "row",
};

const FORMAT_fonts = {
  F_font_fontWeight: "bold",
};

export { FORMAT_text, FORMAT_fonts };
