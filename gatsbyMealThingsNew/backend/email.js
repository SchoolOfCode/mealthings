const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config();

const auth = {
  auth: {
    api_key: process.env.API,
    domain: process.env.DOMAIN,
  },
};
//transporter = connecting you to host domain
let transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  let mailOptions = {
    from: email,
    to: "hannahmurphyk@gmail.com",
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
      console.log("Error occured, your email did not send");
    } else {
      cb(null, data);
      console.log("Your email has been sent");
    }
  });
};

module.exports = sendMail;

// sendMail("","","", function(err,data) {})

// {
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// };
