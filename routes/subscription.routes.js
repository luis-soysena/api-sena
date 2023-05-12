"use strict";

const express = require("express");
const router = express.Router();

const SubscriptionController = require("../controllers/subscription.controller");
const SubscriptionModel = require("../models/subscription.model");
const Subscription = new SubscriptionController(SubscriptionModel);

// Get all subscription
router.get("/", (req, res) => 
  Subscription.findAll(req, res)
);

// Find subscription by email
router.get("/search", (req, res) => 
  Subscription.findByEmail(req, res)
);

// Save subscription
router.post("/save", (req, res) => 
  Subscription.save(req, res)
);

// Admin Update
router.put("/update", (req, res) => 
  Subscription.update(req, res)
);

// User Update (status only)
router.put("/update-status", (req, res) => 
  Subscription.updateStatus(req, res)
);

// Delete
router.delete("/delete", (req, res) => 
  Subscription.delete(req, res)
);

module.exports = router;
