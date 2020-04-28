import { COLS } from "./COLS";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("screen").width;

const FORMAT_containers = {
  F_container_margin: 10,
  F_container_marginVertical: 50,
  F_welcomeContainer_marginTop: 10,
  F_container_padding: 5,
  F_container_alignItems: "center",
  F_container_justifyContent: "space-around",
  F_container_flex: 1,
  F_container_flexDirection: "row",
  F_container_backgroundColor: COLS.C_BG,
  F_containerHeaders_backgroundColor: COLS.CS_LIGHT_TEXT,
  F_containerHeaders_height: 60,
  F_Flex: 1,
  F_container_alignself: "center",
};

const FORMAT_welcomeContainer = {
  F_welcomeContainer_alignItems: "center",
  F_welcomeContainer_marginTop: 10,
  F_welcomeContainer_marginBottom: 20,
};

const FORMAT_moreChoicesContainer = {
  F_moreChoicesContainer_flexWrap: "wrap",
  F_moreChoicesContainer_width: screenWidth * 0.8,
  F_moreChoicesContainer_flexDirection: "row",
  F_moreChoicesContainer_justifyContent: "space-between",
};
// recipeCardContainer: {
//     width: 150,
//     height: 200,
//     backgroundColor: COLS.C6_WHITE_TEXT,
//     marginTop: 20,
//     marginBottom: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 200, height: 20 },
//     shadowOpacity: 2,
//     shadowRadius: 40,
//     elevation: 7
//   },

export {
  FORMAT_containers,
  FORMAT_welcomeContainer,
  FORMAT_moreChoicesContainer,
};
