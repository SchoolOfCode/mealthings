//PLAN: SET UP AUTH COOKIES
//http://localhost:5000/posts?name=hannah
//http://localhost:5000/logout

~~Install Cookie-Parser~~
~~Add a cookie using response on all requests/set url paths~~
~~return a cookie as object, attributes, expire, send~~

//PLAN
//1. make a route for login
//2. set a cookie based on the query string of name
//3. 1 route for logging in with the query string
//4. Second route for post where you post to the name
//5. Third to clear the cookie

//PLAN: CREATE EXPRESS SERVER

- ~~Create db:reset script~~

- ~~Recreate tables and populate data to check nothing broken~~

- HTTP requests

  - Users

    - ~~Get user~~
    - ~~Get user by id~~
    - ~~Post (add) new user~~
    - ~~patch / change user~~

  - Recipes

    - ~~Get recipe~~
    - ~~Get recipe by id~~

* userFoodIntake

  - ~~Get userFoodIntake whole record~~
  - ~~Get all userFoodIntake by userFoodIntake_id (called meal_id)~~
  - ~~Get all userFoodIntake by recipe_id~~
  - ~~Get userFoodIntake by user_id~~
  - ~~Post (add) new userFoodIntake~~
  - ~~patch / change userFoodIntake~~

* ~~remove whatever_id from MOCKdata and populate script so id autogenerates (do for all)~~
* Add http status codes (e.g. 200 = all ok, 500 = server error) to our server replies.

  Stretch Goals (laterbase):

  - Post (add) new recipe
  - patch / change recipe

# Defensive programming plan

- Need routes to fail loudly
  - If database returns an error, return an error in the reply to the http request
    - try / catch / finally on each database request
      - ~~users~~
      - ~~recipes~~
      - foodIntake
  - Check all incoming types of requests
    - e.g. strings, numbers
      - user id must be a number not a string
      - user name must be a string not a number
      - recipe countOnly must be true or false
        - if false then reply
      - user post AND patch
        - name must have no numbers
        - email can't have slashes
        - birthday can't have letters (unless "april" ?! ) - possibly a job for the front end validation
        - username can't have slashes
        - Weight cant have letters
        - height can't have letters
