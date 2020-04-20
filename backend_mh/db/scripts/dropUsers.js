const { query } = require("../index.js");

async function dropTableUsers() {
  try {
    const res = await query(`
    DROP TABLE users
    `);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
dropTableUsers();
