const { query } = require("../index");

async function createUsers() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS users(
        user_id SERIAL PRIMARY KEY,
        name TEXT,
        birthday DATE,
        height INT,
        email_address TEXT,
        username TEXT,
        weight INT,
        password TEXT,
        new_mum BOOLEAN,
        food_prefs_inc TEXT,
        food_prefs_exc TEXT,
        goals TEXT
            )`
  );
  console.log(res);
}

module.exports = { createUsers };
