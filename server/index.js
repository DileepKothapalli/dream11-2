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
  const first = req.body.first;
  const second = req.body.second;
  const third = req.body.third;
  const fourth = req.body.fourth;
  const fifth = req.body.fifth;
  const sixth = req.body.sixth;
  const seventh = req.body.seventh;
  const eighth = req.body.eighth;
  const ninth = req.body.ninth;
  const tenth = req.body.tenth;
  const eleventh = req.body.eleventh;
  const first2 = req.body.first2;
  const second2 = req.body.second2;
  const third2 = req.body.third2;
  const fourth2 = req.body.fourth2;
  const fifth2 = req.body.fifth2;
  const sixth2 = req.body.sixth2;
  const seventh2 = req.body.seventh2;
  const eighth2 = req.body.eighth2;
  const ninth2 = req.body.ninth2;
  const tenth2 = req.body.tenth2;
  const eleventh2 = req.body.eleventh2;
  const first3 = req.body.first3;
  const second3 = req.body.second3;
  const third3 = req.body.third3;
  const fourth3 = req.body.fourth3;
  const fifth3 = req.body.fifth3;
  const sixth3 = req.body.sixth3;
  const seventh3 = req.body.seventh3;
  const eighth3 = req.body.eighth3;
  const ninth3 = req.body.ninth3;
  const tenth3 = req.body.tenth3;
  const eleventh3 = req.body.eleventh3;
  const email = new Game({
    first: first,
    second: second,
    third: third,
    fourth: fourth,
    fifth: fifth,
    sixth: sixth,
    seventh: seventh,
    eighth: eighth,
    ninth: ninth,
    tenth: tenth,
    eleventh: eleventh,
    first2: first2,
    second2: second2,
    third2: third2,
    fourth2: fourth2,
    fifth2: fifth2,
    sixth2: sixth2,
    seventh2: seventh2,
    eighth2: eighth2,
    ninth2: ninth2,
    tenth2: tenth2,
    eleventh2: eleventh2,
    first3: first3,
    second3: second3,
    third3: third3,
    fourth3: fourth3,
    fifth3: fifth3,
    sixth3: sixth3,
    seventh3: seventh3,
    eighth3: eighth3,
    ninth3: ninth3,
    tenth3: tenth3,
    eleventh3: eleventh3,
  });
  try {
    await email.save();
    console.log(first);
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  try {
    const total = await db.collection("games").find().toArray();
    res.send(total);
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
