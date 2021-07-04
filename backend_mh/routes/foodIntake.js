const express = require("express");
const {
  getFoodIntake,
  getFoodIntakeById,
  getFoodIntakeByRecipeId,
  getFoodIntakeByUserId,
  addFoodIntake,
  patchFoodIntake,
} = require("../models/foodIntake");
const router = express.Router();

// Gets a specific foodIntake
router.get("/:foodIntakeId", async (req, res) => {
  const { foodIntakeId } = req.params;
  console.log("Recieved GET request for foodIntakeId: ", foodIntakeId);
  try {
    const data = await getFoodIntakeById(foodIntakeId);
    console.log("data is:", data);
    if (data.length > 0) {
      return res.status(200).json({
        message: "Received foodIntake Using ID",
        success: true,
        payload: data,
      });
    }
    console.warn(
      "Failed getting foodIntake id:",
      foodIntakeId,
      "from database."
    );
    return res.status(400).json({
      message: "Failed to fetch from database!",
      success: false,
    });
  } catch (err) {
    console.warn(
      "Failed getting foodIntake id:",
      foodIntakeId,
      "from database. Got an error:",
      err
    );
    return res.status(400).json({
      message: "Failed to fetch from database!",
      success: false,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    //if recipe undefined will run as below
    const { recipe_id, user_id } = req.query;
    if (recipe_id) {
      const data = await getFoodIntakeByRecipeId(recipe_id);
      console.log("data", data, recipe_id);
      if (data[0]) {
        return res.status(200).json({
          message: "foodIntake for recipeId" + recipe_id + " enclosed.",
          success: true,
          payload: data,
        });
      }
      //else if user id is defined, but recipe undefined, it will run as below
      return res
        .status(400)
        .json({ message: "Failed to access database", success: false });
    } else if (user_id) {
      const data = await getFoodIntakeByUserId(user_id);
      console.log("data", data);
      if (data[0]) {
        return res.status(200).json({
          message: "foodIntake for userId" + user_id + " enclosed.",
          success: true,
          payload: data,
        });
      }
      //else if user id is defined, and recipe undefined, it will run as below
      return res
        .status(400)
        .json({ message: "Failed to access database", success: false });
    } else {
      console.log("Received GET request for all foodIntake");
      const data = await getFoodIntake();
      console.log("data", data);
      if (data[0]) {
        return res.status(200).json({
          message: "All foodIntake enclosed",
          success: true,
          payload: data,
        });
      }
      return res
        .status(400)
        .json({ message: "Failed to access database", success: false });
    }
  } catch (err) {
    console.warn("Error recived:", err);
    return res
      .status(400)
      .json({ message: "Failed to access database", success: false, err });
  }
});

// Post request to add/insert new user
router.post("/", async (req, res) => {
  const { body } = req;
  if (!body || Object.keys(body) < 2) {
    return res.status(400).json({
      message:
        "Failed to insert foodIntake. No body found, or body too short:" + body,
      success: false,
    });
  }
  try {
    console.log("Recieved a POST request to foodIntake", body);
    const data = await addFoodIntake(body);
    if (data.rows) {
      return res
        .status(201)
        .json({ message: "Inserted new foodIntake", success: true });
    }
    return res
      .status(400)
      .json({ message: "Failed to insert foodIntake", success: false });
  } catch (err) {
    console.warn("Got an error in post request. Error:", err);
    return res.status(400).json({
      message: "Failed to insert foodIntake. Got an error.",
      success: false,
    });
  }
});

// Patch request to update a foodIntake
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (!id) {
    return res.status(400).json({
      message: "foodIntake Update failed. No id found.",
      success: false,
    });
  }
  if (!body) {
    return res.status(400).json({
      message: "foodIntake Update failed. No body found.",
      success: false,
    });
  }
  try {
    console.log(body);
    const data = await patchFoodIntake(body, id);
    console.log(data);
    if (data) {
      return res.status(200).json({
        message: "foodIntake Updated",
        success: true,
        payload: data,
      });
    }
    return res
      .status(400)
      .json({ message: "foodIntake Update failed", success: false });
  } catch (err) {
    return res.status(400).json({
      message: "foodIntake Update failed. Got an error",
      success: false,
    });
  }
});

module.exports = router;
