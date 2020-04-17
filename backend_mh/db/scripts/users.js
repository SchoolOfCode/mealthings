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
        weight NUMBER,
        password TEXT,
        new_mum BOOLEAN,
        food_prefs_inc TEXT,
        food_prefs_exc TEXT,
        goals TEXT
            )`
  );
  console.log(res);
}

// async function populateUsers() {
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

createUsers();
// populateUsers();
