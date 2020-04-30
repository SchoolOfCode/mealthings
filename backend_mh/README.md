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
      - ~~foodIntake~~
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

## Plan for JWT based authentication

1. Back end

- Set up /register route

  - Change POST /users (dont make a new /register route) ✅
  - Get body of request (already happening) ✅
  - Check if email address already in use in the database✅
    //Make the following function in models/users.js✅
    async function checkEmail(emailInBodyOfRequest){
    const emails = await query("SELECT email FROM users");✅
    return emails.includes(emailInBodyOfRequest) ? true : false;
    }
    //import function into routes
    const {checkEmail} = require("./models/users");✅
    - if function true, send failure to front end, otherwise continue
      if(checkEmail(body.email)){
      return res.status(401).json({message:"Email is already in use!", success: false})
      }✅
  - bcrypt to hash password
    const bcrypt = require('bcryptjs');✅
    const {password} = body;✅
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
    // save new user, and hashed password, into database.
    async function saveNewUser(body, hash) {
    const data = await addUser({...body, password:hash})
    };✅
    saveNewUser()✅
    - if database record creation sucessful generate JWT
      const jwt = require('jsonwebtoken')✅
    - Make .env variables for JWT_SECRET ✅
    - Make config file for if no .env variable✅
      const JWT_SECRET = process.env.JWT_SECRET || "murray_and_hannahs_secret";✅
      module.exports { JWT_SECRET };✅
    - import configs
      const { JWT_SECRET } = require("../config");✅
      const token = jwt.sign({ email:email, userID:userID }, JWT_SECRET);✅
    - Send back JWT in success message
      return res.status(200).json({success:true, message:"Sucessfully created new user!", token})✅
    - if unsucessful
    - Send error mesage to user at front end.
      return res.status(500).json({success:false, message: "Failed to create new user in the database."})✅
      });
      });

- Set up /login route (Note 2 use cases, either comes from Home with JWT, or from Login with email/password in body.)

  - Recieve a POST request

    - if POST request has JWT in the header.
      const { authorization } = req.headers;
      - Check if JWT is valid
        const token = authorization.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        - If yes return true, and if throws an error (which signals failed to jwt authenticate), return false
          let jwtPayload
          try {
          jwtPayload = jwt.verify(token, jwtKey)
          } catch (e) {
          if (e instanceof jwt.JsonWebTokenError) {
          return res.status(401).end()
          }
          return res.status(400).end()
          }
          res.status(200).json({success:true, message: "Welcome back!"})
    - else if no JWT

      - Check if email and password in body
      - if there is a password in body,

        - Hash the password from the body of the POST request
        - Check whether POST hashed password === database hashed password - If yes - Generate JWT - Return JWT, and return true and logged in - if no - return false and a wrong password message.
          const {email, password} = req.body;
          if(email && password){
          // Use email to get hashed password from database
          const hashedPassword = await getPassword(email);
          // The below function should be in models
          async getPassword(email){
          const hashedPassword = await query("SELECT password FROM users WHERE email = \$1",[email]);
          return hashedPassword;
          }
          // use bcrypt to check the supplied password in the POST request  
           const bcryptResult = bcrypt.compareSync(password, hashedPassword);
          if(bcryptResult){
          // Generate a JWT
          const token = jwt.sign({ email:email, userID:userID }, JWT_SECRET);
          return res.status(200).json({success:true, message:"Welcome back!", token})
          } else {
          return res.status(400).json({success:false, message:"Incorrect password!"})
          }
          } else {
        - if no password in body, return failure and no password message
          return res.status(400).json({success:false, message:"Must send a username and password!"})
          }

- Set up password reset route
  - Get user email
    const {email} = req.body;
    - Generate a random temporary password
      const generator = require('generate-password');
      const randomTempPassword = generator.generate({
      length: 10,
      numbers: true
      });
    - Save temp password into database
      // Make below in models/users.js
      async saveTempPassword(email, randomTempPassword){
      const res = await query("UPDATE users SET password = $1 WHERE email = $2 RETURNING email", [randomTempPassword, email]);
      return res;
      }
      // import into this file
      const {saveTempPassword} = require("./models/users.js");
      const reply = saveTempPassword(email, randomTempPassword);
      if(!reply){
      return res.status(500).json({success:false, message: "Problem inserting recovery password into database."})
      }
    - Send a temp password to user email - var nodemailer = require('nodemailer');
      var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
      }
      });
      var mailOptions = {
      from: 'youremail@gmail.com',
      to: email,
      subject: 'Mealthings password reset',
      text: `Hi there! \n We've reset your password. Your new password is ${randomTempPassword}. You can sign in with this password; we reccomend you change it to something more memorable as soon as you can.\nIf you weren't expecting this password reset then contact us straight away by replying to this email.\n\nBest wishes,\nThe MealThings team x`
      };
      transporter.sendMail(mailOptions, function(error, info){
      if (error) {
      console.log(error);
      } else {
      console.log('Email sent: ' + info.response);
      }
      });

2. Front end
   - Hello screen - Check if JWT present.
   - If yes, ask server if JWT is verified
     - If yes, auto go through to the homescreen. Set loggedIn state to true. Possibly useContext for it.
     - If no, stay on Hello screen. Delete incorrect JWT. STRETCH GOAL show small popup saying you are not logged in.
   - Register screen
   - Send POST request with details in the body (As currently being done, potentially nothing to change)
     - If get a message of email already in use, redirect user to a screen that says email already in use (Or just an alert)
     - Make sure there is a link for user to reset password for that email address.
   - Wait for server response.
     - If success, save JWT to AsyncLocalStorage, set Login to be true. Redirect to next page (Allergies).
     - If failure, tell user what field failed.
   - Login screen
   - Send POST request with email and password
   - Wait for server response
   - If server returns true and with JWT
     - Save JWT to local AsyncStorage
     - Set logged in to true
     - Redirect to Landing Page
   - If server return false
     - Tell user incorrect password
     - Give user option to try signing in again, or reset their password
     - STRETCH GOAL after 10 incorrect password attempts, block for 2 mins. (front end or back end?! )
   - Password reset screen (2 screens)
   - Screen 1: Ask for emailed temp password
     - Send POST request with email and temp password to check against the database
       - If enter correct temp password, got to screen 2
       - If incorrect, say incorrect temp password. Option to enter again or to go back so can request another temp password or try to log in again.
   - Screen 2: Write out password twice
     - Send PATCH request to database with new password, and redirect to the landing page screen.

- deal with Errors, try / catch, and redirects
- Make logout screen remove JWT
