const { query } = require("../index");

// To Test as our real data has changed.
async function createRecipes() {
  const res = await query(`CREATE TABLE IF NOT EXISTS recipes (
      recipe_id SERIAL PRIMARY KEY,
      name TEXT,
      ingredients TEXT,
      calories TEXT,
      protein TEXT, 
      carbohydrates TEXT,
      fat TEXT,
      saturates TEXT,
      sugars TEXT,
      salt TEXT,
      fibre TEXT,
      cooking_difficulty TEXT,
      cooking_time_mins INT,
      method TEXT
  )`);
  console.log(res);
}
createRecipes();
