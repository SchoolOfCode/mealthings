const express = require("express");
const { getRecipes, getRecipeById } = require("../models/recipes");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("Received GET request for all recipes");
  const data = await getRecipes();
  console.log("data", data);
  if (data[0]) {
    return res.json({
      message: "All recipes enclosed",
      success: true,
      payload: data,
    });
  }
  return res.json({ message: "Failed to access database", success: false });
});

router.get("/:recipeId", async (req, res) => {
  const { userId } = req.params;
  console.log("Recieved GET request for recipeId: ", recipeId);
  const data = await getRecipeById(recipeId);
  if (data.rows) {
    return res.json({
      message: "Received Recipe Using ID",
      success: true,
      payload: data,
    });
  }
  console.warn("Failed getting recipe id:", recipeId, "from database.");
  return res.json({
    message: "Failed to fetch from database!",
    success: false,
    payload: data,
  });
});

module.exports = router;
