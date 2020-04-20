// Need pool query thing - might work or might not! Is in index.js, so possibly will find automatically...
const { query } = require("../db");

// To Test
// res.rows[0] ?
async function getUser() {
  const res = await query(`SELECT * FROM users`);
  return res.rows;
}

// To Test
async function getUserById(user_id) {
  const res = await query(`SELECT * FROM users WHERE id = $1`, [user_id]);
  return res.rows[0];
}

// To Test
async function getUserByName(name) {
  const res = await query(
    `SELECT * FROM users WHERE name ILIKE '%' || $1 || '%'`,
    [name]
  );
  return res.rows[0];
}

// TODO
// POST to add a user (below)
// PATCH to change a user

// async function addUser(user) {
//   const {
//     user_id,
//     name,
//     birthday,
//     height,
//     email_address,
//     username,
//     weight,
//     password,
//     new_mum,
//     food_prefs_inc,
//     food_prefs_exc,
//     goals
//   } = user;
//   const res = await query(
//     `INSERT INTO users(
//             user_id,
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
//         goals
//         )
//         VALUES (
//             $1,
//             $2,
//             $3,
//             $4,
//             $5,
//             $6,
//             $7,
//             $8,
//             $9,
//             $10,
//             $11,
//             $12
//         )`,
//     [
//       user_id,
//       name,
//       birthday,
//       height,
//       email_address,
//       username,
//       weight,
//       password,
//       new_mum,
//       food_prefs_inc,
//       food_prefs_exc,
//       goals
//     ]
//   );
//   return res.rows[0];
// }

module.exports = { getUser, getUserById, getUserByName };

// return [
//         {
//           name: "James",
//           birthday: "2020-04-19",
//           height: "180",
//           email_address: "samblahblah@gmail.com",
//           username: "samwwww",
//           weight: "84",
//           password: "password",
//           new_mum: "false",
//           food_prefs_inc: "pork",
//           food_prefs_exc: "peanuts",
//           goals: "weight loss",
//         },
//       ];
//     }
