"use strict";

class SubscriptionController {
  model;

  constructor(model) {
    this.model = model;
  }

  async findAll(req, res) {
    const data = await this.model.find({});
    res.status(200).send({ data });
  }

  async findByEmail(req, res) {
    const { email } = req?.params;
    const data = await this.model.find({ email });
    res.status(200).send({ data });
  }
}

module.exports = SubscriptionController;
