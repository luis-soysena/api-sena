"use strict";

class SubscriptionController {
  model;

  constructor(model) {
    this.model = model;
  }

  async findAll(req, res) {
    const data = await this.model.find({});
    res.status(200).send({
      code: 200,
      data,
    });
  }

  async findByEmail(req, res) {
    const { email } = req.params;
    const data = await this.model.find({ email });
    res.status(200).send({
      code: 200,
      data,
    });
  }

  save(req, res) {
    const { email, start_date, end_date, status, price } = req.body;

    const fields = {
      email,
      start_date,
      end_date,
      status,
      price,
    };

    this.model.save(fields, (error) => {
      if (!error) {
        res.status(200).send({
          code: 200,
          message: "Subscription saved successfully!",
        });
      } else {
        this.handleError(error);
      }
    });
  }

  update(req, res) {
    const { email, start_date, end_date, status, price } = req.body;

    const fields = {
      email,
      start_date,
      end_date,
      status,
      price,
    };

    const fieldsFiltered = fields.filter((field) => field !== "");

    this.model.updateOne({ email }, fieldsFiltered, (error) => {
      if (!error) {
        res.status(200).send({
          code: 200,
          message: "Subscription updated successfully!",
        });
      } else {
        this.handleError(error);
      }
    });
  }

  updateStatus(req, res) {
    const { email, status } = req.body;

    this.model.updateOne({ email }, { status }, (error) => {
      if (!error) {
        res.status(200).send({
          code: 200,
          message: "Subscription updated successfully!",
        });
      } else {
        this.handleError(error);
      }
    });
  }

  delete(req, res) {
    const { email } = req.body;

    this.model.deleteOne({ email }, (error) => {
      if (!error) {
        res.status(200).send({
          code: 200,
          message: "Subscription deleted successfully!",
        });
      } else {
        this.handleError(error);
      }
    });
  }

  handleError(error) {
    res.status(500).send({
      code: 500,
      message: "An error has ocurred, please try again.",
      error,
    });
  }
}

module.exports = SubscriptionController;
