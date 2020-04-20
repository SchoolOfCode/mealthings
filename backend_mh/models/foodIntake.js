const { query } = require("../db");

// Get all foodIntake
async function getFoodIntake() {
  const res = await query(`SELECT * FROM food_intake`);
  return res.rows;
}

// Get one user by id
async function getFoodIntakeById(foodIntake_id) {
  const res = await query(`SELECT * FROM food_intake WHERE meal_id = $1`, [
    foodIntake_id,
  ]);
  return res.rows;
}

async function getFoodIntakeByRecipeId(recipe_id) {
  const res = await query(`SELECT * FROM food_intake WHERE recipe_id = $1`, [
    recipe_id,
  ]);
  return res.rows;
}

async function getFoodIntakeByUserId(user_id) {
  const res = await query(`SELECT * FROM food_intake WHERE user_id = $1`, [
    user_id,
  ]);
  return res.rows;
}

// Add a new user
async function addFoodIntake(body) {
  const {
    user_id,
    recipe_id,
    meal_date_time,
    confirmed_eaten,
    additional_preferences,
  } = body;
  const res = await query(
    `INSERT INTO food_intake(
    user_id, 
    recipe_id, 
    meal_date_time, 
    confirmed_eaten, 
    additional_preferences
        )
        VALUES (
            $1,
            $2,
            $3,
            $4,
            $5
        ) RETURNING *`,
    [
      user_id,
      recipe_id,
      meal_date_time,
      confirmed_eaten,
      additional_preferences,
    ]
  );
  return res;
}

// PATCH to change a user
async function patchFoodIntake(body, meal_id) {
  const {
    user_id,
    recipe_id,
    meal_date_time,
    confirmed_eaten,
    additional_preferences,
  } = body;
  console.log(
    user_id,
    recipe_id,
    meal_date_time,
    confirmed_eaten,
    additional_preferences,
    meal_id
  );
  const res = await query(
    `UPDATE food_intake SET user_id= COALESCE($1,user_id),
    recipe_id= COALESCE($2,recipe_id),
    meal_date_time= COALESCE($3,meal_date_time),
    confirmed_eaten= COALESCE($4,confirmed_eaten),
    additional_preferences= COALESCE($5,additional_preferences)
         WHERE meal_id = $6
         RETURNING *
         `,
    [
      user_id,
      recipe_id,
      meal_date_time,
      confirmed_eaten,
      additional_preferences,
      meal_id,
    ]
  );
  console.log(res);
  return res.rows[0];
}

module.exports = {
  getFoodIntake,
  getFoodIntakeById,
  getFoodIntakeByRecipeId,
  getFoodIntakeByUserId,
  addFoodIntake,
  patchFoodIntake,
};
