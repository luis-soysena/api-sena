"use strict";

class SubscriptionController {
  model;

  constructor(model) {
    // This model has all mongoose methods to get data from database
    this.model = model;
  }

  findAll(req, res) {
    res.status(200).send({
      code: 200,
      data: [],
    });
  }

  findByEmail(req, res) {
    const email = req.params.email;
  }
}

module.exports = SubscriptionController;
