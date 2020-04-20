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
      cooking_time_mins INT
  )`);
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

module.exports = { createRecipes };
