const { query } = require("../index");

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
    goals
  } = body;
  const res = await query(
    `UPDATE users SET name= COALESCE($1, name),
         birthday= COALESCE($2, birthday),
         height= COALESCE($3, height)
         email_address= COALESCE($4, email_address)
         username= COALESCE($5, username)
         weight= COALESCE($6, weight)
         password= COALESCE($7, password)
         new_mum= COALESCE($8, new_mum)
         food_prefs_inc= COALESCE($9, food_prefs_inc)
         food_prefs_exc= COALESCE($10, food_prefs_exc)
         goals= COALESCE($11, goals)
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
      goals
    ]
  );
  return res.rows[0];
}

module.exports = {
  patchUser
};
