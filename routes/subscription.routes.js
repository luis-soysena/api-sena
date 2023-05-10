"use strict";

const express = require("express");
const router = express.Router();

const SubscriptionController = require("../controllers/subscription.controller");
const SubscriptionModel = require("../models/subscription.model");
const Subscription = new SubscriptionController(SubscriptionModel);

router.get("/", Subscription.findAll);

module.exports = router;
