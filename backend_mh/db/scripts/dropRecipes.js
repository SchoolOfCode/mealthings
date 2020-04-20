const { query } = require("../index.js");

async function dropTableRecipe() {
  try {
    const res = await query(`
    DROP TABLE recipes
    `);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
dropTableRecipe();
