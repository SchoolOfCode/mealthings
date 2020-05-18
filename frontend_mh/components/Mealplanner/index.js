import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
  Image,
  ImageBackground,
} from "react-native";

import FlatList from "react-native-drag-flatlist";
import { FORMAT_headings } from "../../screens/FORMAT_headings";
import { COLS } from "../../screens/COLS";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import sampleRecipes from "../IngredientItem/sampleRecipes";

const colors = ["#A6E6AB"]; // CORRECT THIS TO COLOR SCHEME

const originalData = sampleRecipes.map((item, index) => ({
  text: item.name,
  url: item.url,
  fat: item.fat,
  carbohydrate: item.carbohydrates,
  sugars: item.sugars,
  calories: item.calories,
  protein: item.protein,
  fibre: item.fibre,
  cooktime: item.cooking_time_mins,
  color: colors[index % colors.length],
  backgroundColor: "red",
  method: item.method,
  ingredients: item.ingredients,
  hardness: item.cooking_difficulty,
}));

const App = () => {
  const [data, setData] = useState(originalData);
  const [modalVisible, setModalVisible] = useState(false);
  const [display, setDisplay] = useState();
  const [visual, setVisual] = useState();
  const [carbs, setCarbs] = useState();
  const [prot, setProt] = useState();
  const [cals, setCals] = useState();
  const [sugar, setSugar] = useState();
  const [saturates, setsaturates] = useState();
  const [cooking, setCooking] = useState();

  const [ingredients, setIngredients] = useState();
  const [visible, setVisible] = useState();
  const [hard, setHard] = useState();

  const keyExtractor = (item) => item.text;

  const renderItem = ({ item, drag, index }) => (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: item.color }]}
      onLongPress={drag}
      onPress={() => {
        toggleModal(item);
        setVisual(item.url);
        setCarbs(item.carbohydrate);
        setProt(item.protein);
        setCals(item.calories);
        setsaturates(item.fat);
        setSugar(item.sugars);
        setCooking(item.cooktime);
        setDisplay(item.text);

        const ingredientArray = [];
        for (let i = 0; i < item.ingredients.length; i++) {
          ingredientArray.push("-" + item.ingredients[i] + "\n");
        }
        setIngredients(ingredientArray);
        setHard(item.hardness);
      }}
      delay={400}
    >
      <Text> ☰ {item.text}</Text>
    </TouchableOpacity>
  );

  function toggleModal() {
    if (modalVisible == false) {
      setModalVisible(true);
    }
  }
  return (
    <View style={styles.margin}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{
                width: 320,
                height: 150,
                top: 0,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
              source={{
                uri: visual,
              }}
            />
            <View style={styles.headingText}>
              <Text
                style={{
                  fontFamily: "Muli-Bold",
                  fontSize: 18,
                  left: "5%",
                }}
              >
                {display}
              </Text>
              <View style={styles.row2}>
                <MaterialCommunityIcons
                  name="clock"
                  size={15}
                  style={{
                    left: "-20%",
                    bottom: "-1.5%",
                    color: "black",
                    marginVertical: 5.6,
                  }}
                />
                <Text style={{ marginVertical: 6 }}>Prep {cooking} mins</Text>
                <Text style={{ left: "150%", marginVertical: 6 }}>
                  {hard < 2 ? "Easy" : hard < 4 ? "Medium" : "Hard"}
                </Text>
              </View>
            </View>

            <Text style={styles.Heading}> Nutritional breakdown </Text>
            <View style={styles.textmovement}>
              <View style={styles.overarch}>
                <View style={styles.space}>
                  <Text style={styles.nutritions}>Nutrient</Text>
                  <Text style={styles.nutritionbreakdown}> Carbs</Text>
                  <Text style={styles.nutritionbreakdown}> Protein:</Text>
                  <Text style={styles.nutritionbreakdown}> Calories:</Text>
                  <Text style={styles.nutritionbreakdown}> Sugar:</Text>
                  <Text style={styles.nutritionbreakdown}> Fat:</Text>
                </View>
                <View>
                  <Text style={styles.nutritions}> Meal</Text>
                  <Text style={styles.nutritionbreakdown}>{carbs}g</Text>
                  <Text style={styles.nutritionbreakdown}>{prot}g</Text>
                  <Text style={styles.nutritionbreakdown}>{cals}</Text>
                  <Text style={styles.nutritionbreakdown}>{sugar}g</Text>
                  <Text style={styles.nutritionbreakdown}>{saturates}g</Text>
                </View>
                <View>
                  <Text style={styles.nutritions}> Daily</Text>
                  <Text style={styles.nutritionbreakdown}>
                    {Math.round((carbs / 260) * 100)}%{" "}
                  </Text>
                  <Text style={styles.nutritionbreakdown}>
                    {Math.round((prot / 50) * 100)}%
                  </Text>
                  <Text style={styles.nutritionbreakdown}>
                    {Math.round((cals / 2000) * 100)}%
                  </Text>
                  <Text style={styles.nutritionbreakdown}>
                    {Math.round((sugar / 90) * 100)}%
                  </Text>
                  <Text style={styles.nutritionbreakdown}>
                    {Math.round((saturates / 70) * 100)}%
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.methodIngredient}>
              <Text style={styles.Ingredients}> Ingredients</Text>
              <Text style={styles.ingredientText}>{ingredients}</Text>

              <Text> {visible}</Text>
            </View>

            <TouchableHighlight
              style={{
                ...styles.openButton,
              }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Nice</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <ImageBackground
        source={require("../../assets/images/aesthetic.jpg")}
        style={{ width: "112%", height: "100%", opacity: 0.9 }}
      >
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onMoveEnd={setData}
          style={styles.color}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  overarch: {
    flexDirection: "row",
  },
  row2: {
    flexDirection: "row",
    width: "85%",
    borderBottomLeftRadius: 5,
  },
  color: {
    alignSelf: "center",
  },
  textmovement: {
    backgroundColor: "white",
    borderWidth: 1,

    justifyContent: "center",
    alignSelf: "center",
    bottom: 5,
    height: 200,
    fontFamily: "Muli-Bold",
    marginBottom: 5,
    width: "80%",
  },
  nutritionbreakdown: {
    textAlign: "auto",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "8%",
    color: "black",
    fontSize: 13,
    paddingVertical: 1,
  },
  nutritions: {
    alignSelf: "flex-start",
    textAlign: "auto",
    paddingHorizontal: "8%",
    fontFamily: "Muli-Bold",
    right: "3%",
    marginBottom: 4,
  },
  mainTitle: {
    fontSize: 24,
    fontFamily: "Muli-Bold",
    marginBottom: FORMAT_headings.F_headingMainTitle_marginBottom,
    alignSelf: FORMAT_headings.F_heading_alignSelf,
  },
  Heading: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 5,
    marginBottom: 3,
    width: "80%",
    backgroundColor: "#BCB5C3",
    fontFamily: "Muli-Bold",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  next: {
    marginVertical: 2,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  space: {
    shadowColor: "black",
    shadowOffset: {
      width: 7,
      height: 12,
    },
    shadowOpacity: 3,
    shadowRadius: 5.84,
    elevation: 8,
  },
  item: {
    justifyContent: "space-around",
    width: 300,
    height: 40,
    padding: 5,
    paddingLeft: 50,
    margin: 5,
    fontSize: 10,
    fontFamily: "Muli-Medium",
    borderRadius: 10,
    alignContent: "center",
    alignSelf: "center",
  },
  margin: {
    backgroundColor: COLS.C_BG,
    borderBottomColor: "black",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  modalView: {
    backgroundColor: "#A6E6AB",
    borderRadius: 20,

    width: "77.8%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 7,
      height: 12,
    },
    shadowOpacity: 3,
    shadowRadius: 5.84,
    elevation: 8,
  },
  openButton: {
    backgroundColor: "#BCB5C3",
    width: "85%",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginBottom: 12,
  },
  textStyle: {
    color: "black",
    fontFamily: "Muli-Medium",
    textAlign: "center",
    width: "90%",
  },

  headingText: {
    marginBottom: 15,
    bottom: 20,
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#BCB5C3",
    padding: 15,
    paddingHorizontal: "3%",

    fontFamily: "Muli-Bold",
    color: "white",
    width: 270,
    shadowOffset: {
      width: 7,
      height: 12,
    },
    shadowOpacity: 3,
    shadowRadius: 5.84,
    elevation: 8,
  },
  ingredientText: {
    bottom: 10,
    fontFamily: "Muli-Bold",
  },
  methodIngredient: {
    marginBottom: "8%",
    color: "black",
    fontSize: 13,
    width: "105%",
    top: 10,
    backgroundColor: "#fafafa",
    width: "82%",
    fontFamily: "Muli-Bold",
    borderRadius: 10,
    padding: 5,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    shadowOffset: {
      width: 7,
      height: 12,
    },
    shadowOpacity: 3,
    shadowRadius: 5.84,
    elevation: 8,
  },
  Ingredients: {
    color: "#fafafa",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Muli-Bold",
    justifyContent: "center",
    alignSelf: "center",
    width: "105%",
    backgroundColor: "#BCB5C3",
    bottom: "15%",
    borderBottomWidth: 1,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
});

export default App;
