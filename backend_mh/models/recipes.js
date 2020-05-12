const { query } = require("../db");
const { getRecipeCount } = require("./getNumerOfRecipes");
const { parse, combine } = require("recipe-ingredient-parser-v2");
const { diets } = require("../data/diets");

// Get all recipes
async function getRecipes() {
  const res = await query(`SELECT * FROM recipes`);
  return res.rows;
}

// Get one recipe by id
async function getRecipeById(recipe_id) {
  const res = await query(`SELECT * FROM recipes WHERE recipe_id = $1`, [
    recipe_id,
  ]);
  return res.rows;
}

// Get shopping list
async function getShoppingList(arrayOfRecipeIDs) {
  try {
    const recipeArray = [];
    for (id of arrayOfRecipeIDs) {
      const recipe = await getRecipeById(id);
      recipeArray.push(recipe[0]);
    }
    const standardizedIngredients = [];
    recipeArray.forEach((recipe) => {
      recipe.ingredients
        .replace(/\s+/g, " ")
        .replace(/{|}/g, "")
        .split('","')
        .forEach((ingred, index) => {
          standardizedIngredients.push(
            parse(
              `${recipe.ingredientsquantities
                .replace(/{|}|/g, "")
                .replace(/\s+/g, " ")
                .split('","')
                [index].replace(/"/g, "")} ${ingred
                .replace(/"/g, "")
                .replace(/\s+/g, " ")}`
            )
          );
        });
    });
    const listOfIngredients = combine(standardizedIngredients);
    const finalIngredientStrings = [];
    for (obj of listOfIngredients) {
      finalIngredientStrings.push(
        `${obj.quantity ? obj.quantity : ""} ${obj.unit ? obj.unit : ""} ${
          obj.ingredient
        }`
          .replace(", ,", "")
          .replace(/^\s+|\s+$/g, "")
          .replace(/\s+/g, " ")
      );
    }
    return finalIngredientStrings;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function getUserSpecificRecipes(id, numOfRecipes) {
  // Make an array of recipes to return
  const newRecipesArray = [];
  // Get the user's diet and allergies
  const res = await query(`SELECT * FROM users where user_id = $1`, [id]);
  // Split allergies into an array
  const allergies = res.rows[0].food_prefs_exc
    .replace('"', "")
    .toLowerCase()
    .split(",");
  // Get relevant array of ingredients to exclude for diet
  let ingredientsToExclude = [];
  for (allergen of allergies) {
    if (Object.keys(diets).includes(allergen)) {
      ingredientsToExclude = [...ingredientsToExclude, ...diets[allergen]];
      if (allergen === "lactoVegetarian") {
        ingredientsToExclude = [...ingredientsToExclude, ...diets.vegetarian];
      } else if (allergen === "ovovegetarian") {
        ingredientsToExclude = [...ingredientsToExclude, ...diets.vegetarian];
      } else if (allergen === "vegan") {
        ingredientsToExclude = [...ingredientsToExclude, ...diets.vegetarian];
        ingredientsToExclude = [
          ...ingredientsToExclude,
          ...diets.lactoVegetarian,
        ];
        ingredientsToExclude = [
          ...ingredientsToExclude,
          ...diets.ovovegetarian,
        ];
        ingredientsToExclude = [...ingredientsToExclude, ...diets.crustaceans];
        ingredientsToExclude = [...ingredientsToExclude, ...diets.fish];
        ingredientsToExclude = [...ingredientsToExclude, ...diets.molluscs];
      }
    } else {
      ingredientsToExclude = [...ingredientsToExclude, allergen];
    }
  }
  // Get total number of recipes
  const res2 = await getRecipeCount();
  const totalNumOfRecipes = res2.count;
  // Randomly shuffle from 1 to totalNumOfRecipes
  const recipesIndexs = [...Array(parseInt(totalNumOfRecipes)).keys()]
    .map((x) => x + 1)
    .sort((x) => Math.random() - 0.5);
  // Loop through list of numbers (while newRecipeArray.length < numOfRecipes)
  let safetyCounter = 0;
  while (
    newRecipesArray.length < numOfRecipes &&
    safetyCounter < totalNumOfRecipes
  ) {
    // Define variable to let recipe be pushed to return array
    let isOk = true;
    // Get recipe with that id.
    const recipe = await getRecipeById(recipesIndexs[safetyCounter]);
    // Make sure capitalization
    const recipeIngredientsLowerCase = recipe[0].ingredients.toLowerCase();
    // loop though allergies
    for (j of ingredientsToExclude) {
      // if recipe contains allergen, set isOk to false
      if (recipeIngredientsLowerCase.includes(j)) {
        isOk = false;
      }
    }
    // isOk is true, push to newRecipesArray
    if (isOk) {
      newRecipesArray.push(recipe);
    }
    safetyCounter++;
  }
  // When finished, return newRecipesArray
  return newRecipesArray;
}

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getUserSpecificRecipes,
};
