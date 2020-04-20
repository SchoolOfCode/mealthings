const { query } = require("../db");

// get all recipes
async function getRecipes() {
  const res = await query(`SELECT * FROM recipes`);
  return res.rows;
}

// get one recipe by id
async function getRecipeById(recipe_id) {
  const res = await query(`SELECT * FROM recipes WHERE recipe_id = $1`, [
    recipe_id,
  ]);
  return res.rows;
}

module.exports = { getRecipes, getRecipeById };
