"use strict";
class UserController {
  model;

  constructor(model) {
    this.model = model;
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
          role: data?.role
        }
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
      .catch((error) => this.handleError({res, error}));
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
