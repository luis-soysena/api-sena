"use strict";

const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  email: String,
  start_date: Date,
  end_date: Date,
  status: Number,
  price: Number,
});

const SubscriptionModel = mongoose.model("SubscriptionModel", subscriptionSchema);

module.exports = SubscriptionModel;
