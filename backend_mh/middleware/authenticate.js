const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config");

function authenticate(req, res, next) {
  //gain access to token
  //decode with jwt library
  //if successful, add the decoded information to the request
  // and then call next
  // if not successful, respond to the user
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    console.log({ token });
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log({ decoded });
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(403);
  }
}
module.exports = { authenticate };
