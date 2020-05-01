const express = require("express");
const bcrypt = require("bcryptjs");
const generator = require("generate-password");
const {
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
} = require("../models/users");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("Received GET request for all users");
  try {
    const data = await getUsers();
    console.log("data", data);
    if (data[0]) {
      return res.status(200).json({
        message: "All users enclosed",
        success: true,
        payload: data,
      });
    }
    console.warn("Failed to access database");
    return res
      .status(400)
      .json({ message: "Failed to access database", success: false });
  } catch (err) {
    console.warn("Error recived:", err);
    return res
      .status(400)
      .json({ message: "Failed to access database", success: false });
  }
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log("Recieved GET request for userId: ", userId);
  try {
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
  } catch (err) {
    console.warn(
      "Failed getting user id:",
      userId,
      "from database. Error:",
      err
    );
    return res.status(400).json({
      message: "Failed to fetch from database!",
      success: false,
    });
  }
});

// Post request to add/insert new user
router.post("/", async (req, res) => {
  const { body } = req;
  const { email_address } = body;
  if (!body || Object.keys(body).length < 4) {
    return res.status(400).json({
      message:
        "Failed to insert user. No body recieved on request, or body has less than 4 fields.",
      success: false,
    });
  }
  if (await checkEmail(email_address)) {
    return res
      .status(409)
      .json({ message: "Email is already in use!", success: false });
  }
  console.log("Recieved a POST request to users", body);
  try {
    const data = await saveNewUser(body);
    if (data.rows) {
      const token = await getToken(body);
      return res.status(201).json({
        message: "Inserted new user",
        success: true,
        email_address: data.rows[0].email_address,
        userID: data.rows[0].user_id,
        token,
      });
    }
    console.warn("Failed to insert new user. Request body:", body);
    return res.status(500).json({
      message: "Failed to create user in the database",
      success: false,
    });
  } catch (err) {
    console.warn(
      "Failed to insert new user. Request body:",
      body,
      "Error:",
      err
    );
    return res
      .status(400)
      .json({ message: "Failed to insert user", success: false });
  }
});

// User login and JWT verification route
router.post("/login", async (req, res) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split(" ")[1];
    const verifyResponse = await verifyJwt(token);
    if (verifyResponse) {
      res.status(200).json({
        success: true,
        message: "Welcome back!",
        email_address: verifyResponse[0].email_address,
        userID: verifyResponse[0].user_id,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "JWT verification failed!" });
    }
  } else {
    const { email_address, password } = req.body;
    const { body } = req;
    if (email_address && password) {
      const hashedPassword = await getPassword(email_address);
      if (!hashedPassword) {
        return res.status(400).json({
          success: false,
          message: "Couldn't find a user with that email.",
        });
      }
      const bcryptResult = bcrypt.compareSync(password, hashedPassword);
      if (bcryptResult) {
        const token = await getToken(body);
        if (token) {
          return res
            .status(200)
            .json({ success: true, message: "Welcome back!", token });
        } else {
          return res.status(500).json({
            success: false,
            message:
              "Problem generating JWT, internal server error. Please wait and retry login.",
          });
        }
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect password!" });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "Must supply a username and password!",
      });
    }
  }
});

// Password reset route
router.post("/passwordreset", async (req, res) => {
  //Get user email
  const { email_address } = req.body;
  if (!email_address) {
    return res.status(400).json({
      success: false,
      message: "No email address found; password reset unsuccessful.",
    });
  }
  // Generate a random temporary password
  const randomTempPassword = generator.generate({
    length: 10,
    numbers: true,
  });
  console.log("Random password:", randomTempPassword);
  const reply = saveTempPassword(email_address, randomTempPassword);
  if (!reply) {
    return res.status(500).json({
      success: false,
      message: "Problem inserting recovery password into database.",
    });
  }
  const emailOutcome = await sendTempPasswordEmail(
    email_address,
    randomTempPassword
  );
  if (emailOutcome) {
    return res
      .status(200)
      .json({ success: true, message: "Password reset email sent." });
  }
  return res.status(500).json({
    success: false,
    message: "Password reset email not sent; internal server error.",
  });
});

// Patch request to update a user
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (!id || !body) {
    return res.status(400).json({
      message: "User Update failed, problem with id or body",
      success: false,
      id,
      body,
    });
  }
  const data = await patchUser(body, id);
  console.log(data);
  try {
    if (data) {
      return res
        .status(200)
        .json({ message: "User Updated", success: true, payload: data });
    }
    console.warn("Failed to update  user. Request body:", body);
    return res
      .status(400)
      .json({ message: "User Update failed", success: false });
  } catch (err) {
    console.warn("Failed to update  user. Request body:", body, "Error:", err);
    return res
      .status(400)
      .json({ message: "User Update failed", success: false });
  }
});

module.exports = router;
