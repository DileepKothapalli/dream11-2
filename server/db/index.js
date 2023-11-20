const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://dbuser:Pass123@cluster0.hvyj5.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;


// mongodb+srv://dileep:Pass123@cluster0.hvyj5.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://dileep:Pass123@cluster0.tncxi.mongodb.net/dream11?retryWrites=true&w=majority
