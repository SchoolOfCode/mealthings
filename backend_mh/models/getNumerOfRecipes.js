const { query } = require("../db");

// Get total number of recipes
async function getRecipeCount() {
  const res = await query(`SELECT COUNT(*) FROM recipes`);
  // console.log("Num recipes:", res);
  return res.rows[0];
}

module.exports = { getRecipeCount };
