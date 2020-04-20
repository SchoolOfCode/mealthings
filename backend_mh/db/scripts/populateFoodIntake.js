const { query } = require("../index");

const fs = require("fs");
const { promisify } = require("util");
const path = require("path");
const readFile = promisify(fs.readFile);

async function populateFoodIntake() {
  const json = await readFile(
    path.join(__dirname, ".", "./MOCKFOODINTAKE.json")
  );
  const data = JSON.parse(json);
  const res = await Promise.all(
    data.map(
      async ({
        meal_date_time,
        user_id,
        recipe_id,
        confirmed_eaten,
        additional_preferences,
      }) => {
        const res = await query(
          `INSERT INTO food_intake (
        user_id,
        recipe_id,
        meal_date_time, 
        confirmed_eaten,
        additional_preferences
                     ) VALUES (
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
        return res.rows[0];
      }
    )
  );
  console.log(res);
}
populateFoodIntake();
