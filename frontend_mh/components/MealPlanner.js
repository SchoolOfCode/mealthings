import React, { useState } from "react";
import { AuthContext } from "../App.js";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
  Image,
} from "react-native";

import FlatList from "react-native-drag-flatlist";
import { FORMAT_headings } from "../screens/FORMAT_headings";
import { COLS } from "../screens/COLS";

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
      "large cooked peeled king prawns",
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
      "400g",
    ],
    calories: "513",
    protein: "28.8",
    carbohydrates: "60.3",
    fat: "15.7",
    saturates: "2.6",
    sugars: "6.8",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
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
      "Divide between bowls, top with the remaining basil and serve the roasted tomatoes alongside.",
    ],
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
      "olive oil",
    ],
    ingredientsQuantities: [
      "1kg topside",
      "1 large clove",
      "1/2 a bunch",
      "1",
      "1 tsp",
      "4 tbp",
    ],
    calories: "226",
    protein: "42.8",
    carbohydrates: "0.7",
    fat: "13.3",
    saturates: "3.1",
    sugars: "0.2",
    salt: "0.3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
    fibre: "0.1",
    cooking_difficulty: "1",
    cooking_time_mins: "10",
    method: [
      "Bring the meat to room temperature, then place it on a board and tenderise with a meat hammer or Jaccard-style tenderiser.",
      "Cut the meat into large chunks and transfer to a large bowl. Season to taste.",
      "Peel, finely chop and add the garlic. Pick, chop and add the parsley, then add the lemon zest and juice, the chilli and oil. Adjust the quantities to taste; there should be just a hint of each, to bring out the meat’s best aspects and not mask its flavour.",
      "Transfer to a platter and serve immediately with ciabatta-style bread.",
    ],
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
      "lime",
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
      "1/2",
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
      "Scatter the chilli and coriander on top and season with soy and lime juice.",
    ],
  },
  {
    recipe_id: "36",
    name: "Thai-style crispy sea bass                  ",
    ingredients: [
      "spring onions",
      "fresh coriander",
      "whole sea bass , scaled, gutted, trimmed, from sustainable sources",
      "thai red curry paste",
      "lime",
    ],
    ingredientsQuantities: ["4", "15 g", "600 g", "2 tbs", "1"],
    calories: "410",
    protein: "37.4",
    carbohydrates: "2.1",
    fat: "28.1",
    saturates: "4.8",
    sugars: "1.2",
    salt: "1.5",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
    fibre: "0.2",
    cooking_difficulty: "2",
    cooking_time_mins: "19",
    method: [
      "Trim and halve the spring onions, finely shred lengthways and place in a bowl of ice-cold water to crisp up. Pick in the coriander leaves, reserving the stalks.                    ",
      "Place a large non-stick frying pan on a medium-high heat.                    ",
      "With a sharp knife, score the sea bass skin at 2cm intervals, then rub all over with the curry paste, inside and out, getting into all the cracks and crannies.                    ",
      "Pack the coriander stalks into the cavities, season with sea salt and black pepper, then place in the hot pan with 1 tablespoon of olive oil.                    ",
      "Cook for 3 to 4 minutes per side, or until dark golden and cooked through (depending on the thickness of your fish).                    ",
      "Drain and shake off the spring onions and coriander and pile on to your plates.                    ",
      "Sit the sea bass on top, spooning over any spicy oil from the pan. Finely grate over the lime zest, and serve with lime halves, for squeezing over.                    ",
    ],
    url:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    recipe_id: "37",
    name: "Asian tuna steak salad                    ",
    ingredients: [
      "radishes , ideally with leaves",
      "teaspoons pickled ginger",
      "low-salt soy sauce",
      "frozen soya beans",
      "tuna steaks , (ideally 2cm thick), from sustainable sources                      ",
    ],
    ingredientsQuantities: ["200 g", "2 tsp", "2 tsp", "250 g", "300 g"],
    calories: "426",
    protein: "54",
    carbohydrates: "9.8",
    fat: "19.2",
    saturates: "3.5",
    sugars: "5",
    salt: "1.3",
    fibre: "8.5",
    cooking_difficulty: "2",
    cooking_time_mins: "10",
    method: [
      "Finely chop 2 radishes with the pickled ginger, then dress with the soy, 1 tablespoon of extra virgin olive oil and 2 teaspoons of water and put aside.                      ",
      "Very finely slice the remaining radishes with their leaves.                      ",
      "Place the beans in a non-stick frying pan on a high heat, cover with boiling kettle water, boil for 2 minutes, then drain. Return the pan to a medium-high heat.                      ",
      "Rub the tuna with 1 teaspoon of olive oil and a pinch of sea salt and black pepper, then sear for 1½ minutes on each side, so it’s blushing in the middle.                      ",
      "Divide the beans and radishes between your plates, half-tear the tuna and place proudly on top, then spoon over the pickled ginger mixture, drizzling all the juices around the plate.                      ",
      "Finish with 1 teaspoon of extra virgin olive oil.                      ",
    ],
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89081010.jpg?tr=w-330",
  },

  {
    recipe_id: "38",
    name: "Smoky pancetta cod                      ",
    ingredients: [
      "rashers of higher-welfare smoked pancetta",
      "white fish fillets , such as cod, skin off, pin-boned, from sustainable sources",
      "fresh rosemary",
      "cooked lentils",
      "spinach",
    ],
    ingredientsQuantities: ["8", "300 g", "15 g", "250 g", "200 g"],
    calories: "348",
    protein: "44.1",
    carbohydrates: "22.9",
    fat: "9.2",
    saturates: "2.4",
    sugars: "2",
    salt: "1.2",
    fibre: "2.1",
    cooking_difficulty: "2",
    cooking_time_mins: "16",
    method: [
      "Lay out 4 rashers of pancetta, slightly overlapping them. Place a piece of cod on top, generously season with black pepper, then roll and wrap in the pancetta, and repeat.                        ",
      "Place in a large non-stick frying pan on a medium heat and cook for 8 minutes, turning occasionally, adding the rosemary for the last 2 minutes.                        ",
      "Remove the fish to a plate. Toss the lentils into the pan with 1 tablespoon of red wine vinegar and push to one side to reheat for 1 minute and pick up all that residual flavour, while you quickly wilt the spinach with a splash of water alongside.                        ",
      "Taste, season to perfection with sea salt and pepper, and divide both between your plates.                        ",
      "Sit the wrapped cod on top of the lentils with the rosemary, and drizzle with 1 teaspoon of extra virgin olive oil.                        ",
    ],
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89081003.jpg?tr=w-330",
  },
  {
    recipe_id: "39",
    name: "Creamy Cornish mussels                        ",
    ingredients: [
      "mussels , scrubbed, debearded, from sustainable sources",
      "garlic",
      "fresh chives",
      "cornish cider",
      "clotted cream",
    ],
    ingredientsQuantities: ["600 g", "4", "30 g", "250 ml", "50 g"],
    calories: "348",
    protein: "15.2",
    carbohydrates: "8.4",
    fat: "24.6",
    saturates: "11.2",
    sugars: "4.2",
    salt: "0.8",
    fibre: "0.7",
    cooking_difficulty: "2",
    cooking_time_mins: "12",
    method: [
      "Check the mussels – if any are open, give them a tap and they should close; if they don’t, discard them.                          ",
      "Peel and finely slice the garlic. Finely chop the chives.                          ",
      "Put a large deep pan on a high heat. Pour in 1 tablespoon of olive oil, then add the garlic and most of the chives, followed 1 minute later by the cider.                          ",
      "Bring to a fast boil, then add the mussels and clotted cream, cover and leave for 3 to 4 minutes, shaking the pan occasionally.                          ",
      "When all the mussels have opened and are soft and juicy, they’re ready. If any remain closed, discard them.                          ",
      "Taste the sauce, season to perfection with sea salt and black pepper, then dish up and sprinkle over the remaining chives before tucking in.                          ",
    ],
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080979.jpg?tr=w-330",
  },
  {
    recipe_id: "40",
    name: "Crispy skin lemon sole                          ",
    ingredients: [
      "jar of artichoke hearts in oil",
      "mixed-colour courgettes",
      "fresh mint",
      "sides of flat white fish , such as lemon sole, skin on, scaled, from sustainable sources",
      "fresh mixed-colour chillies",
    ],
    ingredientsQuantities: ["280 g", "2", "30 g", "400 g", "1.5"],
    calories: "309",
    protein: "38.8",
    carbohydrates: "5.9",
    fat: "13.6",
    saturates: "2",
    sugars: "3.7",
    salt: "2.8",
    fibre: "3.3",
    cooking_difficulty: "2",
    cooking_time_mins: "20",
    method: [
      "Preheat the grill to high.                            ",
      "Scoop out the artichokes, halve lengthways and place in a large non-stick ovenproof frying pan on a medium heat with 1 tablespoon of oil from their jar.                            ",
      "Quarter the courgettes lengthways, cut out the core, slice them at an angle the same size as the artichokes and add to the pan. Cook for 10 minutes, stirring regularly.                            ",
      "Finely slice the top leafy half of the mint, tossing half into the pan with a splash of water.                            ",
      "Rub the sole with a little olive oil, sea salt and black pepper, then lay skin side up on the veg.                            ",
      "Place the pan directly under the grill for 7 to 10 minutes, or until the skin is wonderfully crisp – keep an eye on it!                            ",
      "Meanwhile, finely slice the chillies, mix as much as you dare with the remaining mint, 2 tablespoons of red wine vinegar and 1 tablespoon of extra virgin olive oil, then taste and season to perfection.                            ",
      "Plate up the veg and sole, pulling back half the crispy skin to expose the fish, then drizzle over the chilli mint dressing.                            ",
    ],
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975491.jpg?tr=w-330",
  },
  {
    recipe_id: "41",
    name: "Crazy simple fish pie                            ",
    ingredients: [
      "undyed smoked haddock , skin off, from sustainable sources",
      "spring onions",
      "baby spinach",
      "cheddar cheese",
      "sheets of filo pastry",
    ],
    ingredientsQuantities: ["400 g", "60 g", "250 g", "150 g", "4"],
    calories: "431",
    protein: "34.5",
    carbohydrates: "27.9",
    fat: "20.9",
    saturates: "9.3",
    sugars: "3.4",
    salt: "3.2",
    fibre: "3.5",
    cooking_difficulty: "2",
    cooking_time_mins: "28",
    method: [
      "Preheat the oven to 200ºC/400ºF/gas 6.                        ",
      "In a bowl, cover the fish with boiling kettle water. Put aside to soak.                              ",
      "Meanwhile, trim and roughly chop the spring onions, placing them into a 30cm non-stick ovenproof frying pan on a high heat with 1 tablespoon of olive oil.                              ",
      "Stir and fry for 2 minutes, then pile the spinach on top, let it wilt down and turn the heat off.                              ",
      "Spoon 100ml of the soaking water over the spinach, then drain the fish, break up the pieces and sit them evenly around the pan.                              ",
      "Finely grate over most of the cheese and season well with black pepper.                              ",
      "Quickly layer the filo on top, tucking it around the fish and up the sides of the pan, tearing the last sheet on top in a nutty fashion.                              ",
      "Grate over the last bit of cheese, drizzle with ½ a tablespoon of olive oil, and bake for 15 to 17 minutes, or until golden and crisp. Easy as pie!                              ",
    ],
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975481.jpg?tr=w-330",
  },
  {
    recipe_id: "42",
    name: "Smoky chorizo salmon                              ",
    ingredients: [
      "salmon fillets , skin on, scaled, pin-boned, from sustainable sources",
      "ripe mixed-colour cherry tomatoes",
      "fresh basil",
      "black olives , (stone in)",
      "higher-welfare chorizo",
    ],
    ingredientsQuantities: ["300 g", "300 g", "30 g", "8", "30 g"],
    calories: "363",
    protein: "34.3",
    carbohydrates: "5.1",
    fat: "22.8",
    saturates: "4.8",
    sugars: "4.9",
    salt: "1.2",
    fibre: "1.5",
    cooking_difficulty: "2",
    cooking_time_mins: "11",
    method: [
      "Put the salmon flesh side down in a large cold non-stick frying pan and place on a medium-high heat.                                ",
      "As the pan comes up to temperature and the salmon begins to sizzle (about 3 minutes), flip it over and cook on the skin side for 5 minutes, or until very crisp and just cooked (depending on its thickness).                                ",
      "Meanwhile, halve the cherry tomatoes, tear up most of the basil leaves, then toss it all with 1 tablespoon of red wine vinegar and a pinch of sea salt and black pepper.                                ",
      "Squash the olives and discard the stones, then finely chop the flesh. Mix with 1 teaspoon of extra virgin olive oil and a splash of water.",
      "Finely slice the chorizo, add to the pan for the last 2 minutes, then toss in the dressed tomatoes for 30 seconds.                                ",
      "Divide between your plates, with the salmon on top. Spoon over the dressed olives and pick over the remaining basil.                                ",
    ],
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/75993165.jpg?tr=w-330",
  },
  {
    recipe_id: "43",
    name: "Sticky hoisin chicken                                ",
    ingredients: [
      "free-range chicken legs",
      "spring onions",
      "fresh mixed-colour chillies",
      "regular oranges , or blood oranges",
      "hoisin sauce",
    ],
    ingredientsQuantities: ["200 g", "8", "1.5", "3", "2 tbs"],
    calories: "430",
    protein: "29",
    carbohydrates: "36.2",
    fat: "19.5",
    saturates: "5.2",
    sugars: "35",
    salt: "1.5",
    fibre: "4.7",
    cooking_difficulty: "2",
    cooking_time_mins: "30",
    method: [
      "Preheat the oven to 180ºC/350ºF/gas 4.                                  ",
      "Put a non-stick ovenproof frying pan on a high heat. Pull off the chicken skin, put both skin and legs into the pan, season with sea salt and black pepper and let the fat render out and the chicken get golden for 5 minutes, turning halfway, while you trim the spring onions and halve across the middle, putting the green halves aside.                                  ",
      "Toss the white spring onions into the pan, then transfer to the oven for 15 minutes.                                  ",
      "Meanwhile, deseed the chillies, then finely slice lengthways with the green spring onions and pop both into a bowl of ice-cold water to curl and crisp up.                                  ",
      "Peel the oranges, finely slice into rounds, and arrange on your plates.                                  ",
      "Remove the chicken skin and soft spring onions from the pan and put aside.                                  ",
      "Cook the chicken for 10 more minutes, or until tender and cooked through.                                  ",
      "In a bowl, loosen the hoisin with a splash of red wine vinegar, then spoon over the chicken. Leave it in the oven while you drain and divide up the salad.                                  ",
      "Sit the chicken and soft spring onions on top and crack over the crispy skin.                                  ",
    ],
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080978.jpg?tr=w-330",
  },
  {
    recipe_id: "44",
    name: "Flaky pastry pesto chicken                                  ",
    ingredients: [
      "sheet of all-butter puff pastry , (cold)",
      "free-range skinless chicken breasts",
      "green pesto",
      "ripe cherry tomatoes , on the vine",
      "green beans                                    ",
    ],
    ingredientsQuantities: ["320 g", "480 g", "4 tsp", "400 g", "400 g"],
    calories: "618",
    protein: "36.3",
    carbohydrates: "40.4",
    fat: "34.8",
    saturates: "18",
    sugars: "7.1",
    salt: "1.7",
    fibre: "4.9",
    cooking_difficulty: "2",
    cooking_time_mins: "30",
    method: [
      "Preheat the oven to 220ºC/425ºF/gas 7.                                    ",
      "Unroll the pastry, cut it in half lengthways, then cut each half widthways into 8 equal strips.                                    ",
      "Flatten the chicken breasts by pounding with your fist until the fat ends are the same thickness as the skinny ends.                                    ",
      "Place them in a roasting tray, season with sea salt and black pepper, spread over the pesto, then lay 4 overlapping strips of pastry over each breast, tucking them under at the edges. Brush with a little olive oil.                                    ",
      "Lightly dress the tomato vines in olive oil, season and put into a second tray. Place the chicken tray on the top shelf of the oven with the tomatoes below, and cook for 20 minutes, or until the pastry is golden and the chicken is cooked through.                                    ",
      "Meanwhile, line up the beans, trim off just the stalk ends, then cook in a pan of boiling salted water for 7 minutes, or until tender.                                    ",
      "Remove the chicken to a board with half the tomatoes, squashing the rest in the tray and discarding the vines. Drain and toss in the beans, taste and season to perfection.                                    ",
      "Slice the chicken at an angle and serve on top of the beans, with the whole tomatoes.                                    ",
    ],
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975501.jpg?tr=w-330",
  },
  {
    recipe_id: "46",
    name: "Sweet chicken surprise                                    ",
    ingredients: [
      "free-range chicken legs",
      "garlic",
      "mixed-colour seedless grapes",
      "red vermouth",
      "fresh tarragon                                   ",
    ],
    ingredientsQuantities: ["400 g", "1 bulb", "250 g", "100 ml", "30 g"],
    calories: "440",
    protein: "28",
    carbohydrates: "25.8",
    fat: "22.2",
    saturates: "5.6",
    sugars: "22",
    salt: "0.8",
    fibre: "1.6",
    cooking_difficulty: "2",
    cooking_time_mins: "48",
    method: [
      "Preheat the oven to 180ºC/350ºF/gas 4.                                      ",
      "Put a non-stick ovenproof frying pan on a high heat. Rub the chicken all over with ½ a tablespoon of olive oil, season with sea salt and black pepper and place skin side down in the pan.                                      ",
      "Fry for a couple of minutes until golden, then lightly squash the unpeeled garlic cloves with the heel of your hand and add to the pan. Pick in the grapes.                                      ",
      "Turn the chicken skin side up, pour in the vermouth and transfer to the oven to roast for 40 minutes, or until the chicken is golden and tender, and the sauce is sticky and reduced.                                      ",
      "Add a splash of water to the pan and give it a gentle shimmy to pick up all the sticky bits. Pick over the tarragon, and dish up.                                      ",
    ],
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975478.jpg?tr=w-330",
  },
  {
    recipe_id: "47",
    name: "Crispy garlicky chicken                                      ",
    ingredients: [
      "free-range skinless chicken breasts",
      "seeded wholemeal bread",
      "garlic",
      "lemon",
      "rocket                                   ",
    ],
    ingredientsQuantities: ["240 g", "150 g", "1 clove", "1", "50 g"],
    calories: "366",
    protein: "36.6",
    carbohydrates: "32.1",
    fat: "11",
    saturates: "2",
    sugars: "2.4",
    salt: "1.1",
    fibre: "5.8",
    cooking_difficulty: "2",
    cooking_time_mins: "20",
    method: [
      "Place the chicken breasts between two large sheets of greaseproof paper, and whack with the base of a large non-stick frying pan to flatten them to about 1cm thick.                                        ",
      "Tear the bread into a food processor, then peel, chop and add the garlic, and blitz into fairly fine crumbs.                                        ",
      "Pour the crumbs over the chicken, roughly pat on to each side, then re-cover with the paper and whack again, to hammer the crumbs into the chicken and flatten them further.                                        ",
      "Put the pan on a medium heat. Fry the crumbed chicken in 1 tablespoon of olive oil for 3 minutes on each side, or until crisp, golden and cooked through.                                        ",
      "Slice, plate up, season to perfection with sea salt and black pepper, sprinkle with lemon-dressed rocket, and serve with lemon wedges, for squeezing over.                                        ",
    ],
    url:
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/89080977.jpg?tr=w-330",
  },
];
const colors = ["#FFC9D9", "#FFF4BA", "#65676F", "#C4C4C4", "#FFF4BA"]; // CORRECT THIS TO COLOR SCHEME

const originalData = sampleRecipes.map((item, index) => ({
  text: "☰" + item.name,
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
}));

export default function MealPlanner() {
  const { userID, setRecipeList, recipeList } = useContext(AuthContext);
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

  // const [totalProt, setTotalProt] = useState("");
  // const [totalCarbs, setTotalCarbs] = useState("");
  // const [totalFat, setTotalFat] = useState("");

  // additional functionality if you want to alter how many people are eating the meals.

  const keyExtractor = (item) => item.text;

  const renderItem = ({ item, drag, index }) => (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: item.color }]}
      onLongPress={drag}
      onPress={() => {
        toggleModal(item, item.text, item.url, item.calories, item.fat);
        setVisual(item.url);
        setCarbs(item.carbohydrate);
        setProt(item.protein);
        setCals(item.calories);
        setsaturates(item.fat);
        setSugar(item.sugars);
        setCooking(item.cooktime);
        setDisplay(item.text);

        console.log(item.url);
        // console.log(item.image);
      }}
    >
      <Text>{item.text}</Text>
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
            <Text style={styles.headingText}>{display}</Text>
            <Image
              style={{
                width: 250,
                height: 150,

                resizeMode: "contain",
              }}
              source={{
                uri: visual,
              }}
            />
            <View styles={styles.textmovement}>
              <Text> Nutritional breakdown</Text>
              <Text> Carbohydrates: {carbs}g </Text>
              <Text> Protein: {prot}g</Text>
              <Text> Calories:{cals} /Kcals</Text>
              <Text> Sugars: {sugar}g </Text>
              <Text> Preparation Time: {cooking} minutes</Text>
              <Text> Fats: {saturates}</Text>
            </View>
          </View>

          <TouchableHighlight
            style={{
              ...styles.openButton,
              backgroundColor: "#2196F3",
              marginVertical: 17,
              bottom: 40,
            }}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={styles.textStyle}>Nice</Text>
          </TouchableHighlight>
        </View>
      </Modal>

      <FlatList
        style={styles.BG}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onMoveEnd={setData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textmovement: {
    alignSelf: "flex-start",
    fontSize: 20,
    right: 10,
  },
  BG: {
    backgroundColor: "black",
  },
  mainTitle: {
    fontSize: FORMAT_headings.F_headingMainTitle_fontSize,
    fontWeight: FORMAT_headings.F_headingMainTitle_fontWeight,
    marginBottom: FORMAT_headings.F_headingMainTitle_marginBottom,
    alignSelf: FORMAT_headings.F_heading_alignSelf,
  },
  item: {
    justifyContent: "space-around",
    width: 300,
    height: 40,
    padding: 10,
    paddingLeft: 50,
    margin: 5,
    fontSize: 10,

    borderRadius: 5,
    alignContent: "center",
    alignSelf: "center",
  },
  margin: {
    marginTop: 20,
    backgroundColor: COLS.C_BG,
    borderBottomColor: "black",
  },
  border: {
    borderRightColor: "black",
    borderColor: "black",
    backgroundColor: "white",
    bottom: 10,
    height: 120,
    width: 300,
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
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  headingText: {
    marginBottom: 15,
    borderRadius: 4,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "red",
    justifyContent: "space-around",
    fontWeight: "bold",
  },
});
