const { query } = require("../index");

async function createRecipes() {
  const res = await query(`CREATE TABLE IF NOT EXISTS recipes (
      recipe_id SERIAL PRIMARY KEY,
      ingredients TEXT,
      calories TEXT,
      protein TEXT, 
      carbohydrates TEXT,
      fat TEXT,
      cooking_difficulty TEXT
      cooking_time_mins INT
  )`);
  console.log(res);
}

createRecipes();
