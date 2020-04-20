const express = require("express");

const { getUser, getUserById, getUserByName } = require("../models/users");
const { patchUser } = require("../models/patchUsers");
const router = express.Router();

// router.get("/user", async (req, res) => {
//     const {}
// });

// To Test
// Need to do req.params, and /user:id ?
router.get("/userId", async (req, res) => {
  const { body } = req;
  const data = await getUserById(body);
  console.log(data);
  res.json({ message: "Received User Using ID" });
});

// To Test
// Need to do as a query string ?
router.get("/userName", async (req, res) => {
  const { body } = req;
  const data = await getUserByName(body);
  console.log(data);
  res.json({ message: "Received User Using Name" });
});

// Post request to add/insert new user

// To Test
router.patch("/updateUser", async (req, res) => {
  const { body } = req;
  const data = await patchUser(body);
  console.log(data);
  res.json({ message: "User Updated" });
});
