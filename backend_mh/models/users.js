const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { JWT_SECRET, MEALTHINGS_GMAIL_PASSWORD } = require("../config");
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

// Add a function to check whether the user's email already exists in the database.
async function checkEmail(emailInBodyOfRequest) {
  const emails = await query("SELECT email_address FROM users");
  return emails.rows
    .map((item) => item.email_address)
    .includes(emailInBodyOfRequest);
  //returns a boolean by default, (therefore no true/false prompt required)
}

// Hash a new user's password then call addUser().
async function saveNewUser(body) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(body.password, salt);
  const data = await addUser({ ...body, password: hash });
  return data;
}

function verifyJwt(token) {
  let decoded;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
    return true;
  } catch (err) {
    console.warn("Error in jwt verification:", err);
    return false;
  }
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

async function getToken(body) {
  //Note to selves - toDo - ensure we can pull the user id not only email - work out how to do this. Also think carefully as to whether we actually NEED to do this...?
  const token = await jwt.sign({ email: body.email_address }, JWT_SECRET);
  return token;
}

async function getPassword(email_address) {
  const hashedPassword = await query(
    "SELECT password FROM users WHERE email_address = $1",
    [email_address]
  );
  return hashedPassword.rows[0] ? hashedPassword.rows[0].password : null;
}

async function saveTempPassword(email_address, randomTempPassword) {
  const res = await query(
    "UPDATE users SET password = $1 WHERE email_address = $2 RETURNING email_address",
    [randomTempPassword, email_address]
  );
  return res; // res.rows? res.rows[0] ?
}

async function sendTempPasswordEmail(email_address, randomTempPassword) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mealthings@gmail.com",
      pass: MEALTHINGS_GMAIL_PASSWORD,
    },
  });
  var mailOptions = {
    from: "mealthings@gmail.com",
    to: email_address,
    subject: "Mealthings Password Reset",
    text: `
Hi there!
We've reset your password. Your new password is ${randomTempPassword}. You can sign in with this password; we reccomend you change it to something more memorable as soon as you can.
If you weren't expecting this password reset then contact us straight away by replying to this email.
Best wishes,
The MealThings team x`,
  };
  const emailResp = await transporter.sendMail(mailOptions);
  console.log("emailResp:", emailResp);
  return emailResp.accepted[0] ? true : false;
  /*   , function (error, info) {
    if (error) {
      console.log("Error:", error);
      return false;
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  } */
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
    last_date_meals_requested,
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
         last_date_meals_requested = COALESCE($15, last_date_meals_requested)
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
      last_date_meals_requested,
      id,
    ]
  );
  console.log(res);
  return res.rows[0];
}

module.exports = {
  getUsers,
  getUserById,
  checkEmail,
  saveNewUser,
  verifyJwt,
  addUser,
  getToken,
  getPassword,
  saveTempPassword,
  sendTempPasswordEmail,
  patchUser,
};
