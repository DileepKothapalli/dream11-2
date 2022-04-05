const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Games = new Schema(
  {
    first: { type: Number, required: false },
    second: { type: Number, required: false },
    third: { type: Number, required: false },
    fourth: { type: Number, required: false },
    fifth: { type: Number, required: false },
    sixth: { type: Number, required: false },
    seventh: { type: Number, required: false },
    eighth: { type: Number, required: false },
    ninth: { type: Number, required: false },
    tenth: { type: Number, required: false },
    eleventh: { type: Number, required: false },
    first2: { type: Number, required: false },
    second2: { type: Number, required: false },
    third2: { type: Number, required: false },
    fourth2: { type: Number, required: false },
    fifth2: { type: Number, required: false },
    sixth2: { type: Number, required: false },
    seventh2: { type: Number, required: false },
    eighth2: { type: Number, required: false },
    ninth2: { type: Number, required: false },
    tenth2: { type: Number, required: false },
    eleventh2: { type: Number, required: false },
    first3: { type: Number, required: false },
    second3: { type: Number, required: false },
    third3: { type: Number, required: false },
    fourth3: { type: Number, required: false },
    fifth3: { type: Number, required: false },
    sixth3: { type: Number, required: false },
    seventh3: { type: Number, required: false },
    eighth3: { type: Number, required: false },
    ninth3: { type: Number, required: false },
    tenth3: { type: Number, required: false },
    eleventh3: { type: Number, required: false },
  },
  { timestamps: false }
);

module.exports = mongoose.model("games", Games);
