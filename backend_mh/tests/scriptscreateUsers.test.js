function sum(a, b) {
  return a + b;
}

it.skip("adds 1 + 2 to equal 3", () => {
  console.log("testing");
  expect(sum(1, 2)).toBe(3);
});

// const { addUser } = require("../models/users");

// describe(`post endpoint`, () => {
//   it(`creates a successful post request`, async () => {
//     const res = await addUser({ name: "bob" });
//     //   .post("/")
//     console.log(res);
//     expect(res.message).toEqual("Inserted new user");
//   });
// });

// // Post request to add/insert new user
// router.post("/", async (req, res) => {
//     const { body } = req;
//     console.log("Recieved a POST request to users", body);
//     const data = await addUser(body);
//     if (data.rows) {
//       return res
//         .status(201)
//         .json({ message: "Inserted new user", success: true });
//     }
//     return res
//       .status(400)
//       .json({ message: "Failed to insert user", success: false });
//   });
