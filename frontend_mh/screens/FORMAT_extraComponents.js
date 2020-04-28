import { COLS } from "./COLS";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("screen").width;

const FORMAT_switches = {
  F_switch_right: -120,
  F_switch_bottom: 32,
};

const FORMAT_foodOptions = {
  F_options_backgroundColor: "#fdfdfd",
  F_options_paddingHorizontal: 15,
  F_options_paddingVertical: 15,
  F_options_borderBottomWidth: 0,
  F_options_borderColor: "#ededed",
  F_optionsIconContainer_marginRight: 12,
  F_optionText_fontSize: 15,
  F_optionText_alignSelf: "flex start",
  F_optionText_marginTop: 1,
};

const FORMAT_notes = {
  F_note_width: 140,
  F_note_height: 140,
  F_note_backgroundColor: COLS.C_LOGO_BG,
  F_note_margin: 10,
  F_note_alignSelf: "center",
  F_note_alignItems: "center",
  F_note_left: 50,
  F_note_shadowColor: COLS.C5_LIGHT_TEXT,
  F_note_paddingVertical: 50,
  F_note_padding: 10,
  F_note_shadowColor: "#000",
  F_note_shadowOffset: { width: 200, height: 20 },
  F_note_shadowOpacity: 2,
  F_note_shadowRadius: 40,
  F_note_elevation: 6,
  F_note_fontSize: 20,
};

const FORMAT_todaysMeal = {
  F_todaysMeal_top: 70,
  F_todaysMeal_width: 450,
  F_todaysMeal_padding: 10,
  F_todaysMeal_backgroundColor: COLS.C4_DARK_TEXT,
  F_todaysMeal_justifyContent: "flex-end",
  F_todaysMeal_alignSelf: "center",
  F_todaysMeal_alignItems: "center",
};

const FORMAT_todaysMealAdditionals = {
  F_TDA_padding: 5,
  F_TDA_textAlign: "center",
  F_TDA_alignSelf: "center",
  F_TDA_justifyContent: "center",
  F_TDA_alignItems: "center",
  F_TDA_width: 70,
  F_TDA_fontSize: 20,
  F_TDA_borderRadius: 5,
  F_TDA_marginVertical: 50,
  F_TDA_color: COLS.C4_DARK_TEXT,
  F_TDA_padding: 12,
  F_TDA_width: 200,
  F_TDA_margin: 10,
  F_TDA_fontSize: 20,
  F_TDA_FULL_width: 300,
  F_TDA_FULL_height: 300,
};

const FORMAT_mainRecipe = {
  F_mainRecipe_width: screenWidth,
  F_mainRecipe_alignItems: "flex-start",
  F_mainRecipe_backgroundColor: COLS.C5_LIGHT_TEXT,
  F_mainRecipe_marginTop: 20,
  F_mainRecipe_paddingTop: 0,
  F_mainRecipe_paddingLeft: screenWidth * 0.1,
  F_mainRecipe_paddingRight: screenWidth * 0.1,
  F_mainRecipe_paddingBottom: 5,
  F_mainRecipeInfoTextLine_marginTop: 5,
};

const FORMAT_icons = {
  F_icons_alignSelf: "flex-end",
  F_icons_right: 10,
  F_icons_bottom: 30,
  F_icons_backgroundColor: COLS.C_RED,
  F_icons_borderRadius: 100,
  F_icons_borderWidth: 10,
  F_icons_borderColor: COLS.C_RED,
};

const FORMAT_arrow = {
  F_arrow_height: 20,
  F_arrow_width: 20,
  F_arrow_left: 10,
  F_arrow_top: 20,
  F_arrow_marginBottom: 40,
};

const FORMAT_swipeBar = {
  F_swipeBar_flexDirection: "row",
  F_swipeBar_justifyContent: "space-between",
  F_swipeBar_width: screenWidth,
  F_swipeBar_backgroundColor: COLS.C_LOGO_BG,
  F_swipeBar_paddingLeft: screenWidth * 0.1,
  F_swipeBar_paddingRight: screenWidth * 0.1,
};

const FORMAT_Graph = {
  F_width: 300,
  F_height: 170,
  F_alignSelf: "center",
  F_fontWeight: "bold",
  F_textAlign: "center",
  F_sub_fontWeight: "normal",
};

export {
  FORMAT_switches,
  FORMAT_notes,
  FORMAT_todaysMeal,
  FORMAT_foodOptions,
  FORMAT_swipeBar,
  FORMAT_arrow,
  FORMAT_icons,
  FORMAT_mainRecipe,
  FORMAT_Graph,
  FORMAT_todaysMealAdditionals,
};
