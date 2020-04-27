//npm i cookie-parser

const express = require("express");
const cookieParser = require("cookie-parser");

const {
  getUsers,
  getUserById,
  addUser,
  patchUser,
} = require("../models/users");
const router = express.Router();

router.use(cookieParser());

router.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

//Get request to get Users
router.get("/", async (req, res) => {
  console.log("Received GET request for all users");
  const data = await getUsers();
  // console.log("data", data);
  if (data[0]) {
    return res
      .cookie("cookie successful, returning data", data)
      .status(200)
      .json({
        message: "All users enclosed",
        success: true,
        payload: data,
      });
  }
  return res
    .cookie("unsuccessful cookie, cannot return data", null)
    .status(400)
    .json({ message: "Failed to access database", success: false });
});

//Get request to get Users by ID
router.get("/:userId", async (req, res) => {
  const { userId } = req.params.cookies;
  // console.log("Recieved GET request for userId: ", userId);
  const data = await getUserById(userId);
  if (data.length) {
    return res
      .cookie("cookie successful, returning data", data)
      .status(200)
      .json({
        message: "Received User Using ID",
        success: true,
        payload: data,
      });
  }
  console.warn("Failed getting user id:", userId, "from database.");
  return res
    .cookie("cookie unsuccessful, cannot return data", null)
    .status(400)
    .json({
      message: "Failed to fetch from database",
      success: false,
    });
});

// Post request to add/insert new user
router.post("/", async (req, res) => {
  const { body } = req.cookies;
  // console.log("Recieved a POST request to users", body);
  const data = await addUser(body);
  if (data.rows) {
    return res
      .cookie("cookie successful new user inserted")
      .status(201)
      .json({ message: "Inserted new user", success: true });
  }
  return res
    .cookie("cookie unsuccessful, cannot insert user")
    .status(400)
    .json({ message: "Failed to insert user", success: false });
});

// Patch request to update a user
router.patch("/:id", async (req, res) => {
  const { id } = req.params.cookies;
  const { body } = req;
  if (!id || !body) {
    return res
      .cookie("cookie unsuccessful, cannot update user")
      .status(400)
      .json({ message: "User Update failed", success: false });
  }
  const data = await patchUser(body, id);
  console.log(data);
  if (data) {
    return res
      .cookie("cookie successful, user updated")
      .status(200)
      .json({ message: "User Updated", success: true, payload: data });
  }
  return res
    .status(400)
    .json({ message: "User Update failed", success: false });
});

//LOGIN & LOGOUT?

app.get("/login", (req, res) => {
  const { name } = req.query;
  res.cookie("email, password", email, password);
  res.send({ success: true });
});

router.get("/logout", (req, res) => {
  res.clearCookie("email,password");
  res.send("logged out");
});

module.exports = router;
