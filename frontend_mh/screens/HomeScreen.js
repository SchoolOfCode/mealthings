// import React, { useState, useEffect, createContext } from "react";
// import { AsyncStorage, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import LoginPage from "./Loginpage";
// import RegisterScreen from "./RegisterScreen";
// import RegisterScreen2 from "./RegisterScreen2";
// import HomeScreen2 from "./HomeScreen2";
// import Goals from "./Goals";
// import SplashSuccess from "./SplashSuccess";
// import Allergies from "./Allergies";
// import Preferences from "./DietaryPreference";
// import ShoppingList from "./ShoppingList";
// import NewRecipe from "./NewRecipe";
// import TodaysRecipe from "./TodaysRecipe";
// import YourStats from "./YourStats";
// import SplashScreenDrink from "./SplashScreenDrink";
// import SplashScreenExerciseSlow from "./SplashScreenExerciseSlow";
// import SplashScreenExerciseQuick from "./SplashScreenExerciseQuick";
// import LandingPage from "./Landingpage";
// import mealplanner from "./Mealplanner";
// import { COLS } from "./COLS";
// const Stack2 = createStackNavigator();
// export const RecipeContext = createContext({});

// AsyncStorage.clear(); // TODO remove this for production.

// const _storeRecipes = async recipeArray => {
//   try {
//     const now = new Date();
//     const jsonRecipeArray = await JSON.stringify(recipeArray);
//     await AsyncStorage.setItem("userRecipes", jsonRecipeArray);
//     await AsyncStorage.setItem("recipeSetDate", JSON.stringify(now));
//     console.log("Sucessfullly stored data in AsyncStorage");
//   } catch (error) {
//     console.log("Failed to store recipes in local storage.");
//     console.warn(error);
//   }
// };

// const _retrieveData = async key => {
//   try {
//     const value = await AsyncStorage.getItem(key);
//     if (value !== null) {
//       console.log(
//         "Retrieved",
//         key,
//         "from AsyncStorage, returning value:",
//         value
//       );
//       return JSON.parse(value);
//     }
//     console.log(
//       "Returned null when trying to get key:" + key + " from local storage."
//     );
//     return null;
//   } catch (error) {
//     console.log(
//       "Threw an error trying to get key:" +
//         key +
//         " from local storage. Returning null."
//     );
//     console.warn(error);
//     return null;
//   }
// };

// export default function HomeScreen({ navigation }) {
//   const [recipeList, setRecipeList] = useState([]);
//   const [userID, setUserID] = useState(null);

//   async function getLastRecipeDate() {
//     console.log(
//       "Fetching last recipe date from remote server for userID:",
//       userID
//     );
//     try {
//       const res = await fetch(
//         `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/${userID}`
//       );
//       const data = await res.json();
//       return data.payload[0].last_date_meals_requested;
//     } catch (err) {
//       console.log("Failed to get last recipe date:", err);
//       return null;
//     }
//   }

//   async function getTotalNoRecipes() {
//     console.log("Fetching total number of recipes from remote server");
//     try {
//       const res = await fetch(
//         `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/recipes?countOnly=true`
//       );
//       const data = await res.json();
//       console.log("Recieved from total number of recipes:", data);
//       return parseInt(data.payload.count);
//     } catch (err) {
//       console.log("Failed to get total number of recipes:", err, data);
//     }
//   }

//   async function getUserIdAsync() {
//     const localStorageUserID = (await _retrieveData("userID")) || 3; // TODO change this from a constant to redirect to login/register
//     console.log("localStorageUserID:", localStorageUserID);
//     setUserID(localStorageUserID);
//   }

//   // Get userID if null
//   if (!userID) {
//     console.log(
//       "userID state is falsy; trying to get userID from local storage..."
//     );
//     getUserIdAsync();
//   }

//   // Get recipes
//   useEffect(() => {
//     console.log("Starting useEffect in HomeScreen");
//     async function runGetRecipes() {
//       if (recipeList.length < 14) {
//         console.log("Recipe list is less than 1 in length");
//         // Try to get of last recipes from local storage
//         const last_date_meals_requested_temp = await _retrieveData(
//           "recipeSetDate"
//         );
//         let last_date_meals_requested;
//         // Try to get last date meals requested
//         if (last_date_meals_requested_temp) {
//           console.log(
//             "inside if, last_date_meals_requested_temp",
//             last_date_meals_requested_temp
//           );
//           last_date_meals_requested = new Date(last_date_meals_requested_temp);
//         } else {
//           // If date of last recipes not in local storage, get from server
//           const last_date_meals_requested_temp2 = await getLastRecipeDate();
//           last_date_meals_requested = new Date(last_date_meals_requested_temp2);
//         }
//         console.log("last_date_meals_requested", last_date_meals_requested);
//         const now = new Date();
//         const timeDiffInDays =
//           (now.getTime() - last_date_meals_requested.getTime()) /
//           (1000 * 3600 * 24); // 1000*3600*24 = miliseconds in a day.
//         // If need new recipes, get new recipes.
//         if (timeDiffInDays > 6.5) {
//           console.log(
//             `Last date: ${last_date_meals_requested}, today's date: ${now}, timeDiffInDays:${timeDiffInDays}`
//           );
//           getNewRecipes(userID);
//         } else {
//           // If don't need new recipes, try to get them from local storage
//           const localCopyOfRecipes = await _retrieveData("userRecipes");
//           // If not in local storage, get from database
//           if (!localCopyOfRecipes || localCopyOfRecipes.length < 1) {
//             console.log(
//               "localCopyOfRecipes not found or length shorter than 1. Re-requesting from remote server..."
//             );
//             reRequestRecipes(userID);
//           } else {
//             console.log("Found local copy of recipes. Setting state...");
//             setRecipeList(localCopyOfRecipes);
//           }
//         }
//       }
//     }
//     runGetRecipes();
//   }, [userID]);

//   // Get new recipes and load into state
//   async function getNewRecipes(userID2) {
//     const uID = userID || userID2 || 2;
//     console.log("getNewRecipes triggered. userID2:", uID);
//     let last_week_food = [];
//     const res = await fetch(
//       `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/${uID}`
//     );
//     const data = await res.json();
//     console.log("here2");
//     console.log(
//       "Got the result of getNewRecipes:",
//       data.payload[0].this_weeks_meals
//     );
//     last_week_food = data.payload[0].this_weeks_meals
//       .replace(/"|{|}/g, "")
//       .split(",")
//       .map(x => +x);
//     // Get total number of recipes
//     const totalNumRecipes = (await getTotalNoRecipes()) || 50;
//     console.log("totalNumber of recipes", totalNumRecipes);
//     // Get 14 random numbers with no duplicates of last weeks meals
//     const tempNumbers = [...Array(totalNumRecipes).keys()].map(num => num + 1);
//     // Check that none of the recipes were in last weeks recipes by getting from database and checking
//     last_week_food.forEach(x => {
//       const index = tempNumbers.indexOf(x);
//       if (index > -1) {
//         tempNumbers.splice(index, 1);
//       }
//     });
//     tempNumbers.sort(() => Math.random() - 0.5);
//     const randNums = tempNumbers.slice(0, 14);
//     // Get the recipes from the database
//     console.log("here3");
//     const fetchData = URI => {
//       return fetch(URI)
//         .then(response => response.json())
//         .then(data => {
//           console.log("here7", data);
//           return data.payload[0];
//         });
//     };
//     const requests = [];
//     randNums.forEach(num => {
//       requests.push(
//         fetchData(
//           `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/recipes/${num}`
//         )
//       );
//     });
//     Promise.all(requests).then(arrayWithData => {
//       console.log("All promises resolved. Setting state...");
//       setRecipeList(arrayWithData);
//       // Save recipes to local storage
//       _storeRecipes(arrayWithData);
//     });
//     // Send PATCH to set last_weeks_recipes to the current this_weeks_recipes and this_weeks_recipes to the newly generated recipes (currently in variable randNums), and lastRecipeFetchDate to be today
//     console.log(
//       "json body object: ",
//       JSON.stringify({
//         last_weeks_meals: last_week_food,
//         this_weeks_meals: randNums,
//         last_date_meals_requested: new Date().toISOString()
//       })
//     );
//     const patchResponse = await fetch(
//       `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/${userID}`,
//       {
//         method: "PATCH",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           last_weeks_meals: last_week_food,
//           this_weeks_meals: randNums,
//           last_date_meals_requested: new Date().toISOString()
//         })
//       }
//     );
//     console.log("patchResponse:", patchResponse);
//   }

//   // Get new recipes and load into state
//   async function reRequestRecipes(userIDNotState) {
//     console.log("reRequestRecipes triggered...");
//     console.log("userID:", userIDNotState);
//     const res = await fetch(
//       `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/${userIDNotState}`
//     );
//     const data = await res.json();
//     console.log("reRequested data arrived:", data);
//     console.log("here4");
//     const this_week_food = data.payload[0].this_weeks_meals
//       .replace(/"|{|}/g, "")
//       .split(",")
//       .map(x => +x);
//     console.log("This weeks food:", this_week_food);
//     // Get the recipes from the database
//     const fetchData = URI => {
//       return fetch(URI)
//         .then(response => response.json())
//         .then(data => {
//           console.log("here5", data);
//           return data.payload[0];
//         });
//     };
//     const requests = [];
//     this_week_food.forEach(num => {
//       requests.push(
//         fetchData(
//           `http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/recipes/${num}`
//         )
//       );
//     });
//     Promise.all(requests).then(arrayWithData => {
//       console.log("Resolved all promises for re-requested recipes");
//       setRecipeList(arrayWithData);
//       // Save recipes to local storage
//       _storeRecipes(arrayWithData);
//     });
//   }

//   return (
// <NavigationContainer independent={true}>
//   <RecipeContext.Provider value={recipeList}>
//     <Stack2.Navigator initialRouteName="Home2">
//       <Stack2.Screen
//         name="Home2"
//         component={HomeScreen2}
//         options={{ title: "Home" }}
//       />
//       <Stack2.Screen
//         name="LoginPage"
//         component={LoginPage}
//         options={{ title: "Login" }}
//       />
//       <Stack2.Screen
//         name="Register1"
//         component={RegisterScreen}
//         options={{ title: "Sign Up" }}
//       />
//       <Stack2.Screen
//         name="Register2"
//         component={RegisterScreen2}
//         options={{ title: "Sign Up" }}
//       />
//       <Stack2.Screen
//         name="SplashSuccess"
//         component={SplashSuccess}
//         options={{ title: "Splash Success" }}
//       />
//       <Stack2.Screen
//         name="Goals"
//         component={Goals}
//         options={{ title: "Goals" }}
//       />

//       <Stack2.Screen
//         name="Allergies"
//         component={Allergies}
//         options={{ title: "Allergies" }}
//       />
//       <Stack2.Screen
//         name="Preferences"
//         component={Preferences}
//         options={{ title: "Preferences" }}
//       />
//       <Stack2.Screen
//         name="ShoppingList"
//         component={ShoppingList}
//         options={{ title: "Shopping List" }}
//       />
//       <Stack2.Screen
//         name="NewRecipe"
//         component={NewRecipe}
//         options={{ title: "Add a new recipe" }}
//       />
//       <Stack2.Screen
//         name="TodaysRecipe"
//         component={TodaysRecipe}
//         options={{ title: "Today's recipe" }}
//       />
//       <Stack2.Screen
//         name="YourStats"
//         component={YourStats}
//         options={{ title: "Your stats" }}
//       />
//       <Stack2.Screen
//         name="SplashScreenDrink"
//         component={SplashScreenDrink}
//         options={{ title: "Grab some water!" }}
//       />
//       <Stack2.Screen
//         name="SplashScreenExerciseSlow"
//         component={SplashScreenExerciseSlow}
//         options={{ title: "Alert" }}
//       />
//       <Stack2.Screen
//         name="SplashScreenExerciseQuick"
//         component={SplashScreenExerciseQuick}
//         options={{ title: "Alert" }}
//       />
//       <Stack2.Screen
//         name="LandingPage"
//         component={LandingPage}
//         options={{ title: "Landing Page" }}
//       />
//       <Stack2.Screen
//         name="Mealplanner"
//         component={mealplanner}
//         options={{ title: "Meal Planner" }}
//       />
//     </Stack2.Navigator>
//   </RecipeContext.Provider>
// </NavigationContainer>
//   // );
// }

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: "black"
//   }
// });
