import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";

import FlatList from "react-native-drag-flatlist";

const recipe = {
  recipe_id: "53",
  name:
    "Garlic mushroom pasta                                                      ",
  ingredients: [
    "dried trofie , or fusilli",
    "garlic       ",
    "mixed mushrooms",
    "Parmesan cheese",
    "half-fat crème fraîche",
  ],
  ingredientsQuantities: ["150 g", "2 cloves", "250 g", "25 g", "2 tbs"],
  calories: "402",
  protein: "16.8",
  carbohydrates: "58.1",
  fat: "13",
  saturates: "5.7",
  sugars: "3.7",
  salt: "0.8",
  fibre: "3.6",
  cooking_difficulty: "2",
  cooking_time_mins: "16",
  method: [
    "Cook the pasta in a pan of boiling salted water according to the packet instructions, then drain, reserving a mugful of cooking water.                                                        ",
    "Meanwhile, peel and finely slice the garlic. Place it in a large non-stick frying pan on a medium-high heat with ½ a tablespoon of olive oil, followed 1 minute later by the mushrooms, tearing up any larger ones.                                                        ",
    "Season with sea salt and black pepper, and cook for 8 minutes, or until golden, tossing regularly.                                                        ",
    "Toss the drained pasta into the mushroom pan with a splash of reserved cooking water.                                                        ",
    "Finely grate in most of the Parmesan, stir in the crème fraîche, taste, season to perfection, and dish up, finishing with a final grating of Parmesan.                                                        ",
  ],
};
const colors = ["#d3f261", "#7cb305", "#5b8c00", "#3f6600", "#254000"];

const originalData = new Array(3).fill(0).map((item, index) => ({
  text: index,
  color: colors[index % colors.length],
}));

const App = () => {
  const [data, setData] = useState(originalData);

  const keyExtractor = (item) => item.text.toString();

  const renderItem = ({ item, drag }) => (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: item.color }]}
      onLongPress={drag}
    >
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text> Monday</Text>
      <Text> Calories</Text>
      <Text> Protein</Text>
      <Text> Carbhydrates</Text>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onMoveEnd={setData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    height: 40,
    padding: -10,
    margin: 5,
  },
});

export default App;
