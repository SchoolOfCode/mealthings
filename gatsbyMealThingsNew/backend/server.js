const express = require("express");
const sendMail = require("./email.js");
const log = console.log;
const app = express();
const path = require("path");

const PORT = 5000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Configured Data parsing - when client sends data we can receive and process
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.post("/email", (req, res) => {
  console.log("anything");
  const { email, subject, text } = req.body;
  sendMail(email, subject, text, function (err, data) {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Message sent" });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "views", "index.html"));
});

app.listen(PORT, () => log("Server is listening on PORT", 5000));
