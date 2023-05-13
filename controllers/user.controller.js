"use strict";
class UserController {
  model;

  constructor(model) {
    this.model = model;
  }

  async findByEmail(req, res) {
    const { email } = req.query;
    const data = await this.model.findOne({ email });
    
    if (data) {
      const userInfo = {
        email,
        name: data?.name,
        role: data?.role,
      };
      res.status(200).send({
        code: 200,
        data: userInfo,
      });
    } else {
      this.handleError({
        res,
        code: 404,
        message: "User doesn't exist!",
      });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    const data = await this.model.findOne({ email });

    if (password === data?.password) {
      res.status(200).send({
        code: 200,
        message: "Valid user credentials!",
        user: {
          name: data?.name,
          email: data?.email,
          role: data?.role,
        },
      });
    } else {
      this.handleError({
        res,
        code: 401,
        message: "Invalid user credentials!",
      });
    }
  }

  create(req, res) {
    const { name, password, email, role } = req.body;
    const fields = { name, password, email, role };
    const user = new this.model(fields);

    user
      .save()
      .then(() => {
        res.status(200).send({
          code: 200,
          message: "User created successfully!",
        });
      })
      .catch((error) => this.handleError({ res, error }));
  }

  update(req, res) {
    const { name, password, new_email, email, role } = req.body;
    const fields = { name, password, email, new_email, role };
    const fieldsFiltered = {};

    for (const [key, value] of Object.entries(fields)) {
      if (value) fieldsFiltered[key] = value;
    }

    if (new_email) fieldsFiltered.email = new_email;

    this.model
      .updateOne({ email }, fieldsFiltered)
      .then((response) => {
        const code = response?.modifiedCount > 0 ? 200 : 404;
        const message =
          response?.modifiedCount > 0
            ? "User updated successfully!"
            : "User doesn't exist!";

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
          ? "User deleted successfully!"
          : "User doesn't exist!";

        res.status(code).send({ code, message });
      })
      .catch((error) => this.handleError(res, error));
  }

  handleError({
    res,
    error = "No details.",
    code = 500,
    message = "An error has ocurred, please try again.",
  }) {
    res.status(code).send({
      code,
      message,
      details: error,
    });
  }
}

module.exports = UserController;
