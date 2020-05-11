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

const { getRecipes } = require("../models/recipes");

let allUsers,
  user2,
  user1Index,
  user2Index,
  user3Index,
  user1Email,
  user2Email,
  user3Email,
  user99999,
  userasdf,
  usernull,
  userundefined,
  addRecipes;

beforeAll(async () => {
  user2 = await getUserById(2);
  allUsers = await getUsers();
  user99999 = await getUserById(99999);
  userasdf = await getUserById("asdf");
  usernull = await getUserById(null);
  userundefined = await getUserById(undefined);
  user1Index = allUsers.map((x) => x.user_id).indexOf(1);
  user2Index = allUsers.map((x) => x.user_id).indexOf(2);
  user3Index = allUsers.map((x) => x.user_id).indexOf(3);
  user1Email =
    allUsers[allUsers.map((x) => x.user_id).indexOf(1)].email_address;
  user2Email =
    allUsers[allUsers.map((x) => x.user_id).indexOf(2)].email_address;
  user3Email =
    allUsers[allUsers.map((x) => x.user_id).indexOf(3)].email_address;
  allRecipes = await getRecipes();
});

describe("User models ", () => {
  test("query all, should have at least 3 items in database", async () => {
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
    expect(user2[0][key]).toBe(expected);
  });
});

describe("User 2", () => {
  test("password should be hashed, so should not be password", () => {
    expect(user2[0].password).not.toEqual("password");
  });
});

describe("Somewhere in users", () => {
  test("there should be the first dummy name", () => {
    expect(user1Index).toBeGreaterThanOrEqual(0);
  });
  test("there should be the second dummy name", () => {
    expect(user2Index).toBeGreaterThanOrEqual(0);
  });
  test("there should be the third dummy name", () => {
    expect(user3Index).toBeGreaterThanOrEqual(0);
  });
});

describe("Email", () => {
  test("1 should exist", () =>
    expect(user1Email).toEqual("bobforward@gmail.com"));
  test("2 should exist", () =>
    expect(user2Email).toEqual("anyaforward@gmail.com"));
  test("3 should exist", () =>
    expect(user3Email).toEqual("aylaforward@gmail.com"));
});

describe("Should return sensible error messages when getUserID is called", () => {
  test("with number 99999", () => expect(user99999).toEqual(false));
  test("with string 'asdf'", () => expect(userasdf).toEqual(false));
  test("with null", () => expect(usernull).toEqual(false));
  test("with undefined", () => expect(userundefined).toEqual(false));
});

describe("Recipes", () => {
  test("query all, should have at least 70 recipes in database", async () => {
    expect(allRecipes.length).toBeGreaterThanOrEqual(70);
  });
});

describe.each([
  ["calories", 525],
  ["carbohydrates", 60.5],
  ["cooking_difficulty", 2],
  ["cooking_time_mins", 12],
  ["fat", 23],
  ["fibre", 1.9],
  ["protein", 23.4],
  ["salt", 2],
  ["saturates", 6.5],
  ["sugars", 15.4],
])("Recipes", (key, value) => {
  test("first item should have correct calories value", async () => {
    expect(Number(allRecipes[0][key])).toEqual(value);
  });
});

describe("In all recipes", () => {
  test("first item should have correct name value", async () => {
    expect(allRecipes[0].name).toEqual("Egg & mango chutney flatbreads    ");
  });
  test("first item should have correct url value", async () => {
    expect(allRecipes[0].url).toEqual(
      "https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/55846381.jpg?tr=w-330"
    );
  });
});

describe("In all recipes", () => {
  test("contains the string Chicken noodle stir-fry", async () => {
    const jsonAllRecipes = JSON.stringify(allRecipes);
    expect(jsonAllRecipes.includes("Chicken noodle stir-fry")).toEqual(true);
  });
  test("contains the string Chianti crudo", async () => {
    const jsonAllRecipes = JSON.stringify(allRecipes);
    expect(jsonAllRecipes.includes("Chianti crudo")).toEqual(true);
  });
  test("contains the string Simple noodle soup", async () => {
    const jsonAllRecipes = JSON.stringify(allRecipes);
    expect(jsonAllRecipes.includes("Simple noodle soup")).toEqual(true);
  });
  test("contains the string Toasted popeye bread", async () => {
    const jsonAllRecipes = JSON.stringify(allRecipes);
    expect(jsonAllRecipes.includes("Toasted popeye bread")).toEqual(true);
  });
  test("contains the string Comforting sausage bake", async () => {
    const jsonAllRecipes = JSON.stringify(allRecipes);
    expect(jsonAllRecipes.includes("Comforting sausage bake")).toEqual(true);
  });
});

// Query recipe 999999, should return correct error message
// Query recipe with string, should return correct error

// Text checkEmail
// Text saveNewUser
// Text verifyJwt
// Text addUser
// Text getToken
// Text getPassword
// Text saveTempPassword
// Text sendTempPasswordEmail
// Text patchUser
