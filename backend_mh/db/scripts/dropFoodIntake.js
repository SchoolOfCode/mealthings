const { query } = require("../index.js");

async function dropTableFoodIntake() {
  try {
    const res = await query(`
    DROP TABLE food_intake
    `);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
dropTableFoodIntake();
