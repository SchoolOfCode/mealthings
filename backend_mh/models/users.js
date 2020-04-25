const { query } = require("../db");

// Get all users
async function getUsers() {
  const res = await query(`SELECT * FROM users`);
  return res.rows;
}

// Get one user by id
async function getUserById(user_id) {
  const res = await query(`SELECT * FROM users WHERE user_id = $1`, [user_id]);
  return res.rows;
}

// Add a new user
async function addUser(body) {
  const {
    name,
    birthday,
    height,
    email_address,
    username,
    weight,
    password,
    new_mum,
    food_prefs_inc,
    food_prefs_exc,
    goals,
    gender,
  } = body;
  console.log(
    name,
    birthday,
    height,
    email_address,
    username,
    weight,
    password,
    new_mum,
    food_prefs_inc,
    food_prefs_exc,
    goals,
    gender
  );
  const res = await query(
    `INSERT INTO users(
        name,
        birthday,
        height,
        email_address,
        username,
        weight,
        password,
        new_mum,
        food_prefs_inc,
        food_prefs_exc,
        goals,
        gender
        )
        VALUES (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8,
            $9,
            $10,
            $11,
            $12
        ) RETURNING *`,
    [
      name,
      birthday,
      height,
      email_address,
      username,
      weight,
      password,
      new_mum,
      food_prefs_inc,
      food_prefs_exc,
      goals,
      gender,
    ]
  );
  return res;
}

// PATCH to change a user
async function patchUser(body, id) {
  const {
    name,
    birthday,
    height,
    email_address,
    username,
    weight,
    password,
    new_mum,
    food_prefs_inc,
    food_prefs_exc,
    goals,
    this_weeks_meals,
    last_weeks_meals,
    gender,
  } = body;
  const res = await query(
    `UPDATE users SET name = COALESCE($1, name),
         birthday = COALESCE($2, birthday),
         height = COALESCE($3, height),
         email_address = COALESCE($4, email_address),
         username = COALESCE($5, username),
         weight = COALESCE($6, weight),
         password = COALESCE($7, password),
         new_mum = COALESCE($8, new_mum),
         food_prefs_inc = COALESCE($9, food_prefs_inc),
         food_prefs_exc = COALESCE($10, food_prefs_exc),
         goals = COALESCE($11, goals),
         this_weeks_meals = COALESCE($12, this_weeks_meals),
         last_weeks_meals = COALESCE($13, last_weeks_meals),
         gender = COALESCE($14, gender), 
         late_date_meals_requested = COALESCE($15, late_date_meals_requested)
         WHERE user_id = $16
         RETURNING *
         `,
    [
      name,
      birthday,
      height,
      email_address,
      username,
      weight,
      password,
      new_mum,
      food_prefs_inc,
      food_prefs_exc,
      goals,
      this_weeks_meals,
      last_weeks_meals,
      gender,
      late_date_meals_requested,
      id,
    ]
  );
  console.log(res);
  return res.rows[0];
}

module.exports = { getUsers, getUserById, addUser, patchUser };
