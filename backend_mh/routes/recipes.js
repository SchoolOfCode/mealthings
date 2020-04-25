const express = require("express");
const { getRecipes, getRecipeById } = require("../models/recipes");
const { getRecipeCount } = require("../models/getNumerOfRecipes");
const router = express.Router();

router.get("/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  console.log("Recieved GET request for recipeId: ", recipeId);
  const data = await getRecipeById(recipeId);
  console.log("data", data);
  if (data.length) {
    return res.status(200).json({
      message: "Received Recipe Using ID",
      success: true,
      payload: data,
    });
  }
  console.warn("Failed getting recipe id:", recipeId, "from database.");
  return res.status(400).json({
    message: "Failed to fetch from database!",
    success: false,
  });
});

router.get("/", async (req, res) => {
  const { countOnly } = req.query;
  if (countOnly) {
    console.log(
      "Recieved a GET request for the number of recipes in the database"
    );
    const data = await getRecipeCount();
    if (data) {
      return res.status(200).json({
        message: "Total number of recipes enclosed.",
        success: true,
        payload: data,
      });
    }
    return res.status(400).json({
      message: "Failed to fetch total number of recipes from database!",
      success: false,
    });
  }
  console.log("Received GET request for all recipes");
  const data = await getRecipes();
  if (data[0]) {
    return res.status(200).json({
      message: "All recipes enclosed",
      success: true,
      payload: data,
    });
  }
  return res.json({ message: "Failed to access database", success: false });
});
module.exports = router;
