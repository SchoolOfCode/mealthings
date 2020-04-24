import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView
} from "react-native";

import FlatList from "react-native-drag-flatlist";

const colors = ["#d3f261", "#7cb305", "#5b8c00", "#3f6600", "#254000"]; // CORRECT THIS TO COLOR SCHEME

const sampleRecipes = [
  {
    recipe_id: "71",
    name: "Prawn and chorizo orzo",
    ingredients: [
      "garlic",
      "chorizo",
      "fresh basil",
      "olive oil",
      "sherry vinegar",
      "passata",
      "orzo",
      "ripe cherry tomatoes , on the vine",
      "large cooked peeled king prawns"
    ],
    ingredientsQuantities: [
      "2 cloves",
      "200g",
      "1/2 a bunch",
      "4 tbp",
      "2 tbp",
      "400ml",
      "300g",
      "200g",
      "400g"
    ],
    calories: "513",
    protein: "28.8",
    carbohydrates: "60.3",
    fat: "15.7",
    saturates: "2.6",
    sugars: "6.8",
    salt: "1.1",
    fibre: "3.6",
    cooking_difficulty: "3",
    cooking_time_mins: "35",
    method: [
      "Preheat the oven to 180ºC/350ºF/gas 4.",
      "Peel and finely chop the garlic, and slice the chorizo. Pick and finely chop the basil.",
      "Heat half the oil in a heavy-based pan. Fry the garlic and chorizo for 3 minutes, then deglaze the pan with the vinegar.",
      "Add the passata and 300ml of water, then the orzo. Bring to the boil, reduce the heat and simmer for 10 to 15 minutes, or until the orzo is al dente, stirring occasionally to prevent it sticking.",
      "Spread the cherry tomatoes over a baking tray, drizzle with the rest of the oil and season. Roast for 10 minutes, or until soft.",
      "Stir half the basil into the pasta, along with the prawns.",
      "Divide between bowls, top with the remaining basil and serve the roasted tomatoes alongside."
    ]
  },
  {
    recipe_id: "72",
    name: "Chianti crudo",
    ingredients: [
      "quality beef",
      "garlic",
      "flat-leaf parsley",
      "lemon",
      "dried chilli flakes",
      "olive oil"
    ],
    ingredientsQuantities: [
      "1kg topside",
      "1 large clove",
      "1/2 a bunch",
      "1",
      "1 tsp",
      "4 tbp"
    ],
    calories: "226",
    protein: "38.8",
    carbohydrates: "0.7",
    fat: "13.3",
    saturates: "3.1",
    sugars: "0.2",
    salt: "0.3",
    fibre: "0.1",
    cooking_difficulty: "1",
    cooking_time_mins: "10",
    method: [
      "Bring the meat to room temperature, then place it on a board and tenderise with a meat hammer or Jaccard-style tenderiser.",
      "Cut the meat into large chunks and transfer to a large bowl. Season to taste.",
      "Peel, finely chop and add the garlic. Pick, chop and add the parsley, then add the lemon zest and juice, the chilli and oil. Adjust the quantities to taste; there should be just a hint of each, to bring out the meat’s best aspects and not mask its flavour.",
      "Transfer to a platter and serve immediately with ciabatta-style bread."
    ]
  },
  {
    recipe_id: "73",
    name: "Simple noodle soup",
    ingredients: [
      "spring onions",
      "lemongrass",
      "garlic",
      "fresh red chillies",
      "fresh coriander",
      "organic chicken stock",
      "1 bok choy",
      "raw frozen prawns",
      "rice vermicelli",
      "soy sauce",
      "lime"
    ],
    ingredientsQuantities: [
      "4",
      "1 stick",
      "2 cloves",
      "2",
      "a few sprigs",
      "1 litre",
      "1",
      "225g",
      "300g",
      "1 splash",
      "1/2"
    ],
    calories: "353",
    protein: "23.6",
    carbohydrates: "60.3",
    fat: "1.6",
    saturates: "0.3",
    sugars: "1.2",
    salt: "0.6",
    fibre: "0.8",
    cooking_difficulty: "1",
    cooking_time_mins: "20",
    method: [
      "Trim and finely slice the spring onions. Finely slice the lemongrass (if using), peel and finely chop the garlic and deseed and finely slice the chilli. Pick the coriander leaves.",
      "Bring the stock to boil in a large saucepan then reduce to a simmer.",
      "Separate the bok choy leaves (use other greens or frozen peas instead, if you prefer), rinse them and add to the stock together with the prawns, spring onions, lemongrass and garlic.",
      "Cook for a couple of minutes, until the prawns have turned pink and the bok choy has wilted.",
      "Divide the vermicelli between 4 bowls and ladle over the soup.",
      "Scatter the chilli and coriander on top and season with soy and lime juice."
    ]
  }
];

// ==> Create functionality to add all calories/protein/carbs/fat together
//
// - change string to number
// const toNumber = recipes.map(item=>+item.amount)

// - get calories out the array of objects
// - add them all together
// const sum = recipes
//   .map(item => +item.calories)
//   .reduce((prev, curr) => prev + curr, 0);
//
// TEST IN CONSOLE USING DUMMY DATA
// TEST IN CONSOLE USING sampleRecipes, changing amount to calories
//
// store functionality in variables
// display total calories on screen

// FINAL FUNCTION TO EXTRACT CALORIES/PROTEIN/CARBOHYDRATES/FAT:
// const sum = sampleRecipes.map(item => +item.calories).reduce((prev, curr) => prev + curr, 0);

const calorieTotal = sampleRecipes
  .map(item => +item.calories)
  .reduce((prev, curr) => prev + curr, 0);
console.log(calorieTotal);

const proteinTotal = useEffect(() => {
  sampleRecipes
    .map(item => +item.protein)
    .reduce((prev, curr) => prev + curr, 0);
}, [sampleRecipes]);
console.log(proteinTotal);

const carbTotal = sampleRecipes
  .map(item => +item.carbohydrates)
  .reduce((prev, curr) => prev + curr, 0);
console.log(carbTotal);

const fatTotal = sampleRecipes
  .map(item => +item.fat)
  .reduce((prev, curr) => prev + curr, 0);
console.log(fatTotal);

const originalData = sampleRecipes.map((item, index) => ({
  text: item.name,
  color: colors[index % colors.length]
}));

const App = () => {
  const [data, setData] = useState(originalData);
  const [totalCals, setTotalCals] = useState(0);

  // const [totalProt, setTotalProt] = useState("");
  // const [totalCarbs, setTotalCarbs] = useState("");
  // const [totalFat, setTotalFat] = useState("");

  const keyExtractor = item => item.text;

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
      <Text> Calories: </Text>
      <Text> Protein: {proteinTotal}</Text>
      <Text> Carbohydrates: </Text>
      <Text> Fat: </Text>
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
    margin: 5
  }
});

export default App;
