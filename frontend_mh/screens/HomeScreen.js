import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLS } from "./COLS";

export default function HomeScreen({ navigation }) {
  // Record date of getting 7 days of recipes
  // Every time app is opened:
  // Check if 7 days passed
  // If yes, set getNewRecipes to true
  // If getNewRecipes = true
  // Inside useEffect, get random numbers between 0 and number of rows -> SELECT COUNT(*) FROM recipes
  // Check that none of the recipes were in last weeks recipes by getting from database and checking
  // Get the recipes with those random numbers and put them in state
  // Record in database that week's recipes, and move last weeks recipes into last weeks recipes
  // If no recipes in state, try to fetch from local storage. If none in local storage, fetch from database
  // Pass recipes to relevant screens
  // Save in local storage

  // db TODO list 
  // Fix recipe Id 
  // Add field for last weeks meals 
  // Add field for this weeks meals 
  // Add gender field to users db 
  // Check patch route for users 
  

  const [recipeList, setRecipeList] = useState();

  // Get recipes 
  useEffect(() => {
    if(!recipeList){
      // Get date of last recipes
      const lastRecipeFetchDate = new Date(); // Change this to getting the last date when not debugging.
      const now = new Date(); 
      const timeDiffInDays = (now.getTime() - lastRecipeFetchDate.getTime()) / (1000 * 3600 * 24); // 1000*3600*24 = miliseconds in a day.  
      if(timeDiffInDays > 6){
        getNewRecipes(); 
        // Set lastRecipeFetchDate to be now 
      }
      // Try to get from local storage 
      // 
    }
  }, [])

  // Get new recipes and load into state 
  function getNewRecipes(){
    // Get total number of recipes TODO add backend function for this 
    const totalNumRecipes = 40; 
    // Get 14 random numbers with no duplicates 
    const tempNumbers = [ ...Array(100).keys() ].map(num => num + 1);
    tempNumbers.sort(() => Math.random() - 0.5);
    const randNums = tempNumbers.slice(0, 14);
    // TODO Check that none of the recipes were in last weeks recipes by getting from database and checking

    // Get the recipes from the database 
    let newRecipes = []
    randNums.forEach(num => {
      fetch(`http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/recipes/${num}`)
      .then(
        res => res.json()
      ).then(
        data => {newRecipes = [...newRecipes, data]})
    })
    setRecipeList(newRecipes)
  }

  // Check if it's time to get new recipes
  useEffect(() => {
    if(){
      // 
      // 
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <View style={styles.logoCircle}>
          <Image source={require("../assets/images/Mealthings.png")} />
        </View>
        <Text style={styles.tagLine}>Eat Well. Feel Amazing.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBackground}
          onPress={() => navigation.navigate("Register1")}
        >
          <Text style={styles.buttonText}>Try out now!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackground}>
          <Text
            onPress={() => navigation.navigate("LandingPage")}
            style={styles.buttonText}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLS.C_BG,
    justifyContent: "center",
  },
  mealThingsLogo: {
    alignItems: "center",
    margin: "auto",
    justifyContent: "center",
  },
  logoCircle: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: COLS.C_LOGO_BG,
  },
  tagLine: {
    color: COLS.C5_LIGHT_TEXT,
  },
  buttonContainer: {
    marginTop: "20%",
  },
  buttonBackground: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    alignSelf: "center",
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: COLS.C4_DARK_TEXT,
    textAlign: "center",
    padding: 5,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});
