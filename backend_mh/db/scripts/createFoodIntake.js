const { query } = require("../index");

async function createFoodIntake() {
  const res = await query(`CREATE TABLE IF NOT EXISTS food_intake (
      meal_id SERIAL PRIMARY KEY,
      user_id TEXT,
      recipe_id TEXT,
      meal_date_time TIMESTAMP, 
      confirmed_eaten BOOLEAN,
      additional_preferences TEXT
  )`);
  console.log("Res:", res);
}
createFoodIntake();
