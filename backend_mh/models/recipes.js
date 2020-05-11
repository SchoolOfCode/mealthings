const { query } = require("../db");
const { parse, combine } = require("recipe-ingredient-parser-v2");

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

module.exports = { getRecipes, getRecipeById, getShoppingList };
