const { query } = require("../index");

const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const readFile = promisify(fs.readFile);

async function populateUsers() {
  const json = await readFile(path.join(__dirname, ".", "./MOCKUSERS.json"));
  const data = JSON.parse(json);
  const res = await Promise.all(
    data.map(
      async ({
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
        last_weeks_meals,
        this_weeks_meals,
        gender,
        late_date_meals_requested,
      }) => {
        const res = await query(
          `INSERT INTO users (
            name,
            birthday,
            height,
            email_address,
            username ,
            weight,
            password,
            new_mum,
            food_prefs_inc,
            food_prefs_exc,
            goals, 
            last_weeks_meals,
            this_weeks_meals,
            gender,
            late_date_meals_requested 
                     ) VALUES (
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
                       $12, 
                       $13,
                       $14, 
                       $15
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
            last_weeks_meals,
            this_weeks_meals,
            gender,
            late_date_meals_requested,
          ]
        );
        return res.rows[0];
      }
    )
  );
  console.log(res);
}

populateUsers();
