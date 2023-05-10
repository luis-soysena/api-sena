"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;
