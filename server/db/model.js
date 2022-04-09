const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Games = new Schema(
  {
    first: { type: Number, required: true },
    second: { type: Number, required: true },
    third: { type: Number, required: true },
    fourth: { type: Number, required: true },
    fifth: { type: Number, required: true },
    sixth: { type: Number, required: true },
    seventh: { type: Number, required: true },
    eighth: { type: Number, required: true },
    ninth: { type: Number, required: true },
    tenth: { type: Number, required: true },
    eleventh: { type: Number, required: true },
    first2: { type: Number, required: true },
    second2: { type: Number, required: true },
    third2: { type: Number, required: true },
    fourth2: { type: Number, required: true },
    fifth2: { type: Number, required: true },
    sixth2: { type: Number, required: true },
    seventh2: { type: Number, required: true },
    eighth2: { type: Number, required: true },
    ninth2: { type: Number, required: true },
    tenth2: { type: Number, required: true },
    eleventh2: { type: Number, required: true },
    first3: { type: Number, required: true },
    second3: { type: Number, required: true },
    third3: { type: Number, required: true },
    fourth3: { type: Number, required: true },
    fifth3: { type: Number, required: true },
    sixth3: { type: Number, required: true },
    seventh3: { type: Number, required: true },
    eighth3: { type: Number, required: true },
    ninth3: { type: Number, required: true },
    tenth3: { type: Number, required: true },
    eleventh3: { type: Number, required: true },
    teamscore: { type: Number, required: true },
    teamwickets: { type: Number, required: true },
    teamscore2: { type: Number, required: true },
    teamwickets2: { type: Number, required: true },
  },
  { timestamps: false }
);

module.exports = mongoose.model("games", Games);
