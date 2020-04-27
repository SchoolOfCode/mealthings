const { Pool } = require("pg");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);

var pool = new Pool({});

module.exports = session({
  store: new pgSession({
    pool, // Connection pool
  }),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
});
