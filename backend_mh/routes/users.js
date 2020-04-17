const express = require("express");

const { getUser, getUserById, getUserByName } = require("../models/users");
const { patchUser } = require("../db/scripts/patchUsers");
const router = express.Router();

// router.get("/user", async (req, res) => {
//     const {}
// });

router.get("/userId", async (req, res) => {
  const { body } = req;
  const data = await getUserById(body);
  console.log(data);
  res.json({ message: "Received User Using ID" });
});

router.get("/userName", async (req, res) => {
  const { body } = req;
  const data = await getUserByName(body);
  console.log(data);
  res.json({ message: "Received User Using Name" });
});

router.patch("/updateUser", async (req, res) => {
  const { body } = req;
  const data = await patchUser(body);
  console.log(data);
  res.json({ message: "User Updated" });
});
