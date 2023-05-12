const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI)
  .then(db => console.log("Database is connected"))
  .catch(err => console.log("Mongo:", err));

