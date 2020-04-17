const { query } = require("../index");

async function createFoodIntake() {
  const res = await query(`CREATE TABLE IF NOT EXISTS food_intake (
      meal_id SERIAL PRIMARY KEY,
      user_id INT FOREIGN KEY,
      recipe_id INT FOREIGN KEY,
      meal_date_time DATETIME, 
      confirmed_eaten BOOLEAN,
      additional_preferences NULL,

  )`);
  console.log(res);
}

createFoodIntake();
