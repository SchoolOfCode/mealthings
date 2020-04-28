/* global jest expect, describe, it */

/* eslint-disable no-console */
function sum(a, b) {
  return a + b;
}
// 1. Sample test, not linked to our code
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
// 2. Testing POST users route
const { addUser } = require("../models/users");
describe(`POST Endpoint for USERS`, () => {
  it(`Creates a successful POST request for USERS`, async () => {
    const res = await addUser({ name: "Bob" });
    console.log(res);
    expect(res.message).toEqual("Inserted new user");
  });
});
// 3. Testing GET users route
const { getUsers } = require("../models/users");
describe(`GET Endpoint for USERS`, () => {
  it(`Creates a successful GET request for USERS`, async () => {
    const res = await getUsers({});
    console.log(res);
    expect(res.message).toEqual("All users enclosed");
  });
});
// 4. Testing GET users by ID route
const { getUserById } = require("../models/users");
describe(`GET by ID Endpoint for USERS`, () => {
  it(`Creates a successful GET by ID request for USERS`, async () => {
    const res = await getUserById({ id: 3 });
    console.log(res);
    expect(res.message).toEqual("Received User Using ID");
  });
});
// 5. Testing PATCH users route
const { patchUser } = require("../models/users");
describe(`PATCH by ID Endpoint for USERS`, () => {
  it(`Creates a successful PATCH request for USERS`, async () => {
    const res = await patchUser({ id: 3 });
    console.log(res);
    expect(res.message).toEqual("User Updated");
  });
});
// 6. Testing GET recipes route
const { getRecipes } = require("../models/recipes");
describe(`GET Endpoint for RECIPES`, () => {
  it(`Creates a successful GET request for RECIPES`, async () => {
    const res = await getRecipes({});
    console.log(res);
    expect(res.message).toEqual("All recipes enclosed");
  });
});
// 7. Testing GET recipes by ID route
const { getRecipeById } = require("../models/recipes");
describe(`GET by ID Endpoint for RECIPES`, () => {
  it(`Creates a successful GET by ID request for RECIPES`, async () => {
    const res = await getRecipeById({ id: 5 });
    console.log(res);
    expect(res.message).toEqual("Received Recipe Using ID");
  });
});
// 8. Testing GET recipe count route
const { getRecipeCount } = require("../models/recipes");
describe(`GET Endpoint for RECIPES count`, () => {
  it(`Creates a successful GET for total RECIPES count`, async () => {
    const res = await getRecipeCount({});
    console.log(res);
    expect(res.message).toEqual("Total number of recipes enclosed");
  });
});
// 9. Testing GET foodIntake route
const { getFoodIntake } = require("../models/recipes");
describe(`GET Endpoint for FOODINTAKE`, () => {
  it(`Creates a successful GET for FOODINTAKE`, async () => {
    const res = await getFoodIntake({});
    console.log(res);
    expect(res.message).toEqual("All foodIntake enclosed");
  });
});
// 10. Testing GET foodIntake by ID route
const { getFoodIntakeById } = require("../models/recipes");
describe(`GET Endpoint by ID for FOODINTAKE`, () => {
  it(`Creates a successful GET by ID for FOODINTAKE`, async () => {
    const res = await getFoodIntakeById({});
    console.log(res);
    expect(res.message).toEqual("Received foodIntake Using ID");
  });
});
// 11. Testing POST foodIntake route
const { addFoodIntake } = require("../models/recipes");
describe(`POST Endpoint for FOODINTAKE`, () => {
  it(`Creates a successful POST for FOODINTAKE`, async () => {
    const res = await addFoodIntake({});
    console.log(res);
    expect(res.message).toEqual("Inserted new foodIntake");
  });
});
// 12. Testing PATCH foodIntake route
const { patchFoodIntake } = require("../models/recipes");
describe(`PATCH Endpoint for FOODINTAKE`, () => {
  it(`Creates a successful PATCH for foodIntake`, async () => {
    const res = await patchFoodIntake({});
    console.log(res);
    expect(res.message).toEqual("foodIntake Updated");
  });
});
