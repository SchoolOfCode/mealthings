const { query } = require("../index");

async function populateRecipes() {
  const json = await readFile(
    path.join(__dirname, ".", "./populateRecipes.js")
  );
  const data = JSON.parse(json);
  const res = await Promise.all(
    data.map(
      async ({
        recipe_id,
        ingredients,
        calories,
        protein,
        carbohydrates,
        fat,
        cooking_difficulty,
        cooking_time_mins
      }) => {
        const res = await query(
          `INSERT INTO recipes (
              recipe_id,
              ingredients,
              calories,
              protein,
              carbohydrates,
              fat,
              cooking_difficulty,
              cooking_time_mins
                     ) VALUES (
                       $1,
                       $2,
                       $3,
                       $4,
                       $5,
                       $6,
                       $7,
                       $8
                     ) RETURNING *`,
          [
            recipe_id,
            ingredients,
            calories,
            protein,
            carbohydrates,
            fat,
            cooking_difficulty,
            cooking_time_mins
          ]
        );
        return res.rows[0];
      }
    )
  );
  console.log(res);
}

populateRecipes();
