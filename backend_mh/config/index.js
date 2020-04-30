const JWT_SECRET = process.env.JWT_SECRET || "murray_and_hannahs_secret";
const MEALTHINGS_GMAIL_PASSWORD = process.env.MEALTHINGS_GMAIL_PASSWORD || null;

module.exports = {
  JWT_SECRET,
  MEALTHINGS_GMAIL_PASSWORD,
};
