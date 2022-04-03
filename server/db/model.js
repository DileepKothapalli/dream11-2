const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Games = new Schema(
  {
    first: { type: Number, required: true },
    second: { type: Number, required: true },
    third: { type: Number, required: true },
    fourth: { type: Number, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("games", Games);
