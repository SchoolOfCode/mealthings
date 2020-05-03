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
  router.post("/login", async (req, res) => {
  })✅

  - Recieve a POST request✅

    - if POST request has JWT in the header.
      const { authorization } = req.headers;✅

      - Check if JWT is valid
        const token = authorization.split(" ")[1]; ✅
        const verifyResponse = verifyJwt(token)✅
        function verifyJwt(userJWT){
        - If yes return true, and if throws an error (which signals failed to jwt authenticate), return false
          let decoded;
          try {
          decoded = jwt.verify(token, JWT_SECRET);
          return true;
          } catch (err) {
          console.warn("Error in jwt verification:", err);
          return false;
          }✅
          }
          if(verifyResponse){
          res.status(200).json({success:true, message: "Welcome back!"})
          } else {
          return res.status(401).end()
          }✅

    - else if no JWT (means request is coming from the login form that the user has filled out.)

      - Check if email and password in body
        const {email_address, password} = req.body;✅
      - if there is a password in body,
        - Hash the password from the body of the POST request
        - Check whether POST hashed password === database hashed password - If yes - Generate JWT - Return JWT, and return true and logged in - if no - return false and a wrong password message.
          if(email_address && password){✅
          // Use email to get hashed password from database
          const hashedPassword = await getPassword(email_address);
          // The below function should be in models
          async function getPassword(email_address){✅
          const hashedPassword = await query("SELECT password FROM users WHERE email_address = \$1",[email_address]);
          return hashedPassword;
          }✅
          // use bcrypt to check the supplied password in the POST request  
           const bcryptResult = bcrypt.compareSync(password, hashedPassword);✅
          if(bcryptResult){✅
          // Generate a JWT
          const token = getToken(body);
          if(token){✅
          return res.status(200).json({success:true, message:"Welcome back!", token})
          } else {✅
          return res.status(500).json({success:false, message:"Problem generating JWT, internal server error. Please wait and retry login."})
          }
          }
          else {✅
          return res.status(400).json({success:false, message:"Incorrect password!"})
          }
          } else {✅
        - if no password in body, return failure and no password message
          return res.status(400).json({success:false, message:"Must supply a username and password!"})
          }

- Set up password reset route
  router.post("/passwordreset", async (req, res) => {✅
  //Get user email
  const {email} = req.body;✅
  // Generate a random temporary password
  const generator = require('generate-password');✅
  const randomTempPassword = generator.generate({
  length: 10,
  numbers: true
  });✅
  console.log("Random password:", randomTempPassword);✅
  });
  - Save temp password into database
    // Make below in models/users.js
    async saveTempPassword(email_address, randomTempPassword){
    const res = await query("UPDATE users SET password = $1 WHERE email_address = $2 RETURNING email_address", [randomTempPassword, email_address]);
    return res; // res.rows? res.rows[0] ?
    }✅
    // import function into routes
    const {saveTempPassword} = require("./models/users.js");✅
    const reply = saveTempPassword(email_address, randomTempPassword);
    if(!reply){
    return res.status(500).json({success:false, message: "Problem inserting recovery password into database."})
    }✅
  - Send a temp password to user email
    const nodemailer = require('nodemailer');✅
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'mealthings@gmail.com',
    pass: MEALTHINGS_GMAIL_PASSWORD
    }
    });
    var mailOptions = {
    from: 'mealthings@gmail.com',
    to: email_address,
    subject: 'Mealthings Password Reset',
    text: `Hi there! We've reset your password. Your new password is \${randomTempPassword}. You can sign in with this password; we reccomend you change it to something more memorable as soon as you can. If you weren't expecting this password reset then contact us straight away by replying to this email. Best wishes, The MealThings team x`
    };
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    }
    });✅

2. Front end

- Home screen (equivalent of HomeScreen.js - first page app opens on). Goal - check whether user is logged in with JWT.
- Change back end routes so when logged in, the userId is always sent back
  - Change in /register
    - Get as result from successful registration
      --> in SQL call in models: RETURNING email, userID✅
      --> in from routes: res.status(200).json({etc, userID})✅
  - Change in /login
    --> in SQL call in models: RETURNING email, userID✅
    --> in from routes: res.status(200).json({etc, userID})✅
- In HomeScreen.js itself
- Set state for logged in or not and for whether finished checking server on not.
  const [loggedIn, setLoggedIn] = useState(false);✅
  const [finishedCheckingServer, setFinishedCheckingServer] = useState(false);✅
  -Check if JWT present.
  let token;✅
  // Try to get from AsyncStorage
  try{✅
  token = await AsyncStorage.getItem("token");✅
  } catch(err){✅
  console.log("No JWT found,");✅
  setFinishedCheckingServer(true);✅
  }✅
  // If JWT is found, ask server if JWT is verified
  if(token){✅
  const reply = await fetch(`.......:5000/users/login`, {✅
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  Authorization: 'Bearer' + " " + token,
  },
  body: {},
  })
  if(reply.success){✅
  // If yes, auto go through to LandingPage. Set loggedIn state to true. Possibly useContext for it.
  setFinishedCheckingServer(true);✅
  setLoggedIn(true);✅
  navigation.navigate("LandingPage"); // Possibly unneeded?❌
  } else {✅
  // If JWT is not verified, stay on Hello screen. Delete incorrect JWT. STRETCH GOAL show small popup saying you are not logged in.
  AsyncStorage.removeItem('token', (err) => console.log('userId', err));✅
  setFinishedCheckingServer(true);✅
  navigation.navigate("HomeScreen"); // Send to where user can choose to login or register.❌
  }✅
  else {
  setFinishedCheckingServer(true);✅
  }✅

  - Create SplashScreenLoad (new SplashScreenLoad)❌
    TODO❌
  - Call splash screen❌
    if(!finishedCheckingServer){✅
    return <SplashScreenLoad />❌
    }

    - Set up navigation structure✅
      loggedIn ? (
      <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      </>
      ) : (
      <>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      </>
      )

* Register screen (equivalent of RegisterScreen.js)✅
* Send POST request with details in the body (As currently being done, potentially nothing to change)
* Wait for server response.✅
  const postResponse = await fetch(`.......:5000/users/`, {✅
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: {...dataPlus}
  })

  //If get a message of email already in use, alert them // NOTE possibly needs state and conditionally render this alert.
  if(!postResponse.success){✅
  Alert.alert(✅
  `Error! Status code ${postResponse.status}`,
  postResponse.message,
  [
  { text: 'Dismiss', onPress: () => console.log('OK Pressed') },
  ],
  { cancelable: false }
  );
  } else {✅
  // If success, save JWT to AsyncLocalStorage, set Login to be true. Redirect to next page (Allergies).

  async function storeItem(key, item){✅
  try {✅
  await AsyncStorage.setItem(key, item);
  return true;
  } catch (err){✅
  console.log("Error in storeItem:", err);
  return false;
  }

  const didStoreItem = storeItem("token", postResponse.token);✅
  if(didStoreItem){✅
  setLoggedIn(true); // should be in Context
  navigation.navigate("Allergies");❌ - questionable
  }

  }

- Login screen (equivalent of LoginPage)

// Send POST request with email and password, and wait for server response
const loginResponse = await fetch(`http://ec2-3-250-10-162.eu-west-1.compute.amazonaws.com:5000/users/login`, {✅
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: {email_address, password},
})

// If server returns true and with JWT✅
if(loginResponse.success){✅
// Save JWT to local AsyncStorage✅
async function storeItem(key, item){
try {
await AsyncStorage.setItem(key, item);
return true;
} catch (err){
console.log("Error in storeItem:", err);
return false;
}
const itemWasStored = storeItem("token", loginResponse.token)

- Set logged in to true✅
  // Alter the context?
- Redirect to Landing Page
  navigation.navigate("HomeScreen");
  } else {❌- not required, Homescreen default route
- If server return false✅
  - Tell user incorrect password
    Alert.alert(
    `Error!`,
    "Could not verify email and password.",
    [
    { text: 'Dismiss', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false }
    );
  - Give user option to try signing in again, or reset their password // Nothing to do except have password reset link.
    }
  - STRETCH GOAL after 10 incorrect password attempts, block for 2 mins. (front end or back end?! )
  <!-- - Make sure there is a link for user to reset password for that email address.
    - Make link on Login screen to reset password
    - Make screen for reset password -->

* Password reset screen (2 screens)
* Screen 1: Ask for emailed temp password
  - Send POST request with email and temp password to check against the database
    - If enter correct temp password, got to screen 2
    - If incorrect, say incorrect temp password. Option to enter again or to go back so can request another temp password or try to log in again.
* Screen 2: Write out password twice

  - Send PATCH request to database with new password, and redirect to the landing page screen.

* deal with Errors, try / catch, and redirects
* Make logout screen remove JWT
