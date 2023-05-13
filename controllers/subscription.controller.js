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
    const { email } = req.query;
    const data = await this.model.findOne({ email });
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
    const subscription = new this.model(fields);

    subscription
      .save()
      .then((response) => {
        res.status(200).send({
          code: 200,
          message: "Subscription saved successfully!",
          response,
        });
      })
      .catch((error) => this.handleError(res, error));
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
    const fieldsFiltered = {};

    for (const [key, value] of Object.entries(fields)) {
      if (value) {
        fieldsFiltered[key] = value;
      }
    }

    this.model
      .updateOne({ email }, fieldsFiltered)
      .then((response) => {
        const code = response?.modifiedCount > 0 ? 200 : 404;
        const message =
          response?.modifiedCount > 0
            ? "Subscription updated successfully!"
            : "Subscription doesn't exist!";

        res.status(code).send({ code, message });
      })
      .catch((error) => this.handleError(res, error));
  }

  updateStatus(req, res) {
    const { email, status } = req.body;

    this.model
      .updateOne({ email }, { status })
      .then((response) => {
        const code = response?.modifiedCount > 0 ? 200 : 404;
        const message =
          response?.modifiedCount > 0
            ? "Subscription updated successfully!"
            : "Subscription doesn't exist!";

        res.status(code).send({ code, message });
      })
      .catch((error) => this.handleError(res, error));
  }

  delete(req, res) {
    const { email } = req.body;

    this.model
      .deleteOne({ email })
      .then((response) => {
        const wasDeleted = response?.deletedCount > 0;
        const code = wasDeleted ? 200 : 404;
        const message = wasDeleted
          ? "Subscription deleted successfully!"
          : "Subscription doesn't exist!";

        res.status(code).send({ code, message });
      })
      .catch((error) => this.handleError(res, error));
  }

  handleError(res, error) {
    res.status(500).send({
      code: 500,
      message: "An error has ocurred, please try again.",
      details: error,
    });
  }
}

module.exports = SubscriptionController;
