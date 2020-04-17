const { query } = require("../index");

async function createRecipes() {
  const res = await query(`CREATE TABLE IF NOT EXISTS recipes (
      recipe_id SERIAL PRIMARY KEY,
      ingredients TEXT,
      calories TEXT,
      protein TEXT, 
      carbohydrates TEXT,
      fat TEXT,
      cooking_difficulty TEXT,
      cooking_time_mins INT
  )`);
  console.log(res);
}

async function populateRecipes() {
  const json = await readFile(
    path.join(__dirname, ".", "./populateRecipes.js")
  );
  const data = JSON.parse(json);
  const res = await Promise.all(
    data.map(
      async ({
        recipe_id,
        ingredients,
        calories,
        protein,
        carbohydrates,
        fat,
        cooking_difficulty,
        cooking_time_mins
      }) => {
        const res = await query(
          `INSERT INTO recipes (
            recipe_id,
            ingredients,
            calories,
            protein,
            carbohydrates,
            fat,
            cooking_difficulty,
            cooking_time_mins
                   ) VALUES (
                     $1,
                     $2,
                     $3,
                     $4,
                     $5,
                     $6,
                     $7,
                     $8
                   ) RETURNING *`,
          [
            recipe_id,
            ingredients,
            calories,
            protein,
            carbohydrates,
            fat,
            cooking_difficulty,
            cooking_time_mins
          ]
        );
        return res.rows[0];
      }
    )
  );
  console.log(res);
}

//async function populateUsers() {
//   const json = await readFile(path.join(__dirname, "..", "populateRecipes.js"));
//   const data = JSON.parse(json);
//   const res = await Promise.all(
//     data.map(
//       async ({
//         user_id,
//         name,
//         birthday,
//         height,
//         email_address,
//         username,
//         weight,
//         password,
//         new_mum,
//         food_prefs_inc,
//         food_prefs_exc,
//         goals,
//       }) => {
//         const res = await query(
//           `INSERT INTO users (
//             user_id ,
//             name ,
//             birthday ,
//             height ,
//             email_address ,
//             username ,
//             weight ,
//             password ,
//             new_mum ,
//             food_prefs_inc ,
//             food_prefs_exc ,
//             goals
//       ) VALUES (
//         $1,
//         $2,
//         $3,
//         $4,
//         $5,
//         $6
//       ) RETURNING *`,
//           [
//             user_id,
//             name,
//             birthday,
//             height,
//             email_address,
//             username,
//             weight,
//             password,
//             new_mum,
//             food_prefs_inc,
//             food_prefs_exc,
//             goals,
//           ]
//         );
//         return res.rows[0];
//       }
//     )
//   );
//   console.log(res);
// }

createRecipes();
populateRecipes();
