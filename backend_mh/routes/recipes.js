const express = require("express");
const {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getUserSpecificRecipes,
} = require("../models/recipes");
const { getRecipeCount } = require("../models/getNumerOfRecipes");
const router = express.Router();

router.post("/shoppinglist", async (req, res) => {
  console.log("Recieved POST request for shopping list");
  const { body } = req;
  const list = await getShoppingList(body.recipeIDs);
  if (list && list.length > 0) {
    return res.status(200).json({
      success: true,
      payload: list,
      message: "Shopping list enclosed.",
    });
  } else {
    return res
      .status(400)
      .json({ success: false, message: "Failed to get shopping list." });
  }
});

router.post("/userspecificrecipes", async (req, res) => {
  console.log("Recieved POST request for userspecificrecipes");
  const { body } = req;
  const recipes = await getUserSpecificRecipes(body.userID, body.numRecipes);
  if (recipes && recipes.length > 0) {
    return res.status(200).json({
      success: true,
      payload: recipes,
      message: "Specific user recipes enclosed.",
    });
  } else {
    return res
      .status(400)
      .json({
        success: false,
        message: "Failed to get specific user recipes.",
      });
  }
});

router.get("/:recipeId", async (req, res) => {
  // Get recipeId from http query
  const { recipeId } = req.params;
  console.log("Recieved GET request for recipeId: ", recipeId);
  // Try to get from database
  try {
    const data = await getRecipeById(recipeId);
    console.log("data", data);
    // check if returned data has greater than length zero (which would mean it's failed)
    if (data.length) {
      return res.status(200).json({
        message: "Received Recipe Using ID",
        success: true,
        payload: data,
      });
    }
    // If returned data doesn't have length greater than 0, it's failed, so return a 400.
    console.warn("Failed getting recipe id:", recipeId, "from database.");
    return res.status(400).json({
      message: "Failed to fetch from database!",
      success: false,
    });
    // If database return an error, return an error.
  } catch (err) {
    // Log error
    console.warn(
      "Failed getting recipe id. Request recipeId:",
      recipeId,
      "Error:",
      err
    );
    // Send a message to the user that the request returned an error.
    return res.status(400).json({
      message: "Failed to fetch from database, got an error!",
      success: false,
    });
  }
});

router.get("/", async (req, res) => {
  //Send a request to http / route
  try {
    //set const countOnly and require a query
    const { countOnly } = req.query;
    //if count only received correctly at http route return message confirming in the console
    if (countOnly) {
      console.log(
        "Recieved a GET request for the number of recipes in the database"
      );
      //if count only is not false or count only is not true return an error message, status 400
      if (countOnly == true || countOnly == "true") {
        //create a constant data and send an asyncronous request to get number of recipes
        const data = await getRecipeCount();
        //if the data is truthy return data in json format with confirmation status
        if (data) {
          return res.status(200).json({
            message: "Total number of recipes enclosed.",
            success: true,
            payload: data,
          });
        }
      } else {
        return res.status(400).json({
          message:
            "Failed to fetch total number of recipes from database. countOnly can only be true or false!",
          success: false,
        });
      }
      //else if the data is not available return data in json format with confirmation status
      return res.status(400).json({
        message: "Failed to fetch total number of recipes from database!",
        success: false,
      });
    }
    // if something in the first row of data, successful, therefore will return everything
    console.log("Received GET request for all recipes");
    const data = await getRecipes();
    if (data[0]) {
      return res.status(200).json({
        message: "All recipes enclosed",
        success: true,
        payload: data,
      });
    }
    //
    return res.json({ message: "Failed to get all recipes", success: false });
  } catch (err) {
    console.warn("Failed to get all recipes. Got an error:", err);
    return res.json({ message: "Failed to access database", success: false });
  }
});
module.exports = router;
