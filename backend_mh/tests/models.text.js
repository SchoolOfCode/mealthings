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

// Small function that returns whether a string is JSON or not.
function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

describe("User models ", () => {
  test("query all, response should be JSON", async () => {
    const allUsers = await getUsers();
    const allUsersIsJson = isJsonString(allUsers);
    expect(allUsersIsJson).toBe(true);
  });
});

/* 

Query all users, response should be JSON
Query all users, first line should equal first line of dummy data  // But check this incase they come in a random order!
Query all users, somewhere within should be all 3 names in dummy 
Query all users, somewhere within should be all 3 email address

Query user 2 specifically, should contain correct name
Query user 2 specifically, should contain correct gender
Query user 2 specifically, should contain correct email
Query user 2 specifically, should contain correct 🇩🇿 

Query user 999999, should return correct error message 
Query user with string, should return correct error 




Query all recipes, response should be JSON
Query all recipes, first line should equal first line of dummy data  // But check this incase they come in a random order!
Query all recipes, somewhere within should be several of the correct recipe names
Query all recipes, somewhere within should be all 

Query recipe 2 specifically, should contain correct name
Query recipe 2 specifically, should contain correct calories
Query recipe 2 specifically, should contain correct protein
Query recipe 2 specifically, should contain correct carbohydrates
Query recipe 2 specifically, should contain correct fat
Query recipe 2 specifically, should contain correct saturates
Query recipe 2 specifically, should contain correct sugars
Query recipe 2 specifically, should contain correct salt
Query recipe 2 specifically, should contain correct fibre
Query recipe 2 specifically, should contain correct cooking_difficulty
Query recipe 2 specifically, should contain correct cooking_time_mins

Query recipe 999999, should return correct error message 
Query recipe with string, should return correct error 

*/
