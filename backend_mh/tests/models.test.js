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
    console.log("Got an error!", e);
    return false;
  }
  return true;
}

let user2;

beforeAll(async () => {
  user2 = await getUserById(2);
});

describe("User models ", () => {
  test("query all, should have at least 3 items in database", async () => {
    const allUsers = await getUsers();
    expect(allUsers.length).toBeGreaterThanOrEqual(3);
  });
});

describe.each([
  ["user_id", 2],
  ["name", "anya"],
  ["height", 182],
  ["email_address", "anyaforward@gmail.com"],
  ["username", "anyaforward"],
  ["weight", 55],
  ["weight", 55],
  ["new_mum", false],
  ["food_prefs_inc", "beer"],
  ["food_prefs_exc", "celiac"],
  ["goals", "lose weight"],
  ["gender", "Female"],
])("User 2", (key, expected) => {
  test(`${key} should be ${expected}`, () => {
    // console.log(user2);
    expect(user2[0][key]).toBe(expected);
  });
});

test("User 2 password should be hashed, so should not be password", () => {
  expect(user2[0].password).not.toEqual("password");
});

/* 
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
