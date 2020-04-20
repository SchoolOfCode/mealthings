const express = require("express");
const { getRecipes, getRecipeById } = require("../models/recipes");
const router = express.Router();

router.get("/", async (req, res) => {
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

router.get("/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  console.log("Recieved GET request for recipeId: ", recipeId);
  const data = await getRecipeById(recipeId);
  if (data.rows) {
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

module.exports = router;
