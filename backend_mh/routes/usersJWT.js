//npm i jwtauthentication
//npm i jsonwebtoken
// npm i connect-pg-simple
// npm i pg

const express = require("express");
const jwt = require("jsonwebtoken");
const { loginUser } = require("../models/users");
const { authenticate } = require("../middleware/authenticate");

//allowing the secret to be dynamic using process.env
const { JWT_SECRET } = require("../config");
// router.use(authenticate);

const {
  getUsers,
  getUserById,
  addUser,
  patchUser,
} = require("../models/users");
const router = express.Router();

/* GET users listing. */
router.get("/", authenticate, async (req, res) => {
  console.log("Received GET request for all users");
  const data = await getUsers();
  console.log("data", data);
  if (data[0]) {
    return res.status(200).json({
      message: "All users enclosed",
      success: true,
      payload: data,
    });
  }
  return res
    .status(400)
    .json({ message: "Failed to access database", success: false });
});

//POST TO LOGIN will give us a JWT - have to apply to all?...
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = loginUser({ username, password });
  if (user) {
    //give successful login a jwt

    //JSON.sign 1st Arg Info (i.e.User), 2nd arg(Secret)
    const token = jwt.sign(
      {
        //whatever returned from users.js in models
        user,
      },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.json({ success: true, token });
  }
  return res.json({ success: false });
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log("Recieved GET request for userId: ", userId);
  const data = await getUserById(userId);
  if (data.length) {
    return res.status(200).json({
      message: "Received User Using ID",
      success: true,
      payload: data,
    });
  }
  console.warn("Failed getting user id:", userId, "from database.");
  return res.status(400).json({
    message: "Failed to fetch from database!",
    success: false,
  });
});

// Post request to add/insert new user
router.post("/", async (req, res) => {
  const { body } = req;
  console.log("Recieved a POST request to users", body);
  const data = await addUser(body);
  if (data.rows) {
    return res
      .status(201)
      .json({ message: "Inserted new user", success: true });
  }
  return res
    .status(400)
    .json({ message: "Failed to insert user", success: false });
});

// Patch request to update a user
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (!id || !body) {
    return res
      .status(400)
      .json({ message: "User Update failed", success: false });
  }
  const data = await patchUser(body, id);
  console.log(data);
  if (data) {
    return res
      .status(200)
      .json({ message: "User Updated", success: true, payload: data });
  }
  return res
    .status(400)
    .json({ message: "User Update failed", success: false });
});

module.exports = router;
