const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Game = require("./db/model");
const mongoose = require("mongoose");

const db = require("./db");

const app = express();

const PORT = 8080;

app.use(bodyParser.urlencoded(true));
app.use(cors());
app.use(bodyParser.json());

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.post("/insert", async (req, res) => {
  const email_id = req.body.first;
  const account = req.body.second;
  const balance = req.body.third;
  const email = new Game({
    first: email_id,
    second: account,
    third: balance,
  });
  try {
    await email.save();
    console.log(email_id);
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
