/* global jest expect, describe, it */
/* eslint-disable no-console */

import {
  getFoodIntake,
  getFoodIntakeById,
  getFoodIntakeByRecipeId,
  getFoodIntakeByUserId,
  addFoodIntake,
  patchFoodIntake,
} from "../models/foodIntake";
import { isMainThread } from "worker_threads";

// async function getFoodIntake() {
//     const res = await query(`SELECT * FROM food_intake`);
//     return res.rows;
//   }

describe(`foodIntake returns getFoodIntake`, async () => {
  it(`queries foodIntake sent`, () => {
    const mockQuery = jest.fn()
    await getFoodIntake(`SELECT * FROM food_intake`)(mockQuery);
    //all of the calls the mock function was invoked on
    console.log(mockQuery.mock.calls)
    expect(mockQuery.mock.calls[0][0]).toEqual({type: })
  })

it(`queries foodIntake fulfilled`), () => {
const mockQuery = jest.fn()
const foodIntake = (meal_id,
    user_id,
    recipe_id,
    meal_date_time,
    confirmed_eaten,
    additional_preferences)
=> {
    if (meal_id.typeof === "string" &&
    user_id.typeof === "string" &&
    recipe_id ==="string"  &&
    meal_date_time ==="number" &&
    confirmed_eaten ==="boolean" &&
    additional_preferences ==="string"
    )
    return `foodIntake generating correctly in tables`
}
throw new Error(`incorrect query for FoodIntake`)
}
await actions.getFoodIntake("string", "string", "string", "number","boolean","string",mockQuery)

expect(mockQuery.mock.calls)

  });

describe("foodIntake returns getFoodIntakeById");
describe("foodIntake returns foodIntakeByRecipeId");
describe("foodIntake returns getFoodIntakeByRecipeId");
describe("foodIntake returns getFoodIntakeByUserId");
describe("foodIntake returns patchFoodIntake");
