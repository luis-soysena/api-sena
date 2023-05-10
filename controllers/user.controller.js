"use strict"

class UserController {
  model;

  constructor(model) {
    this.model = model;
  }

  login(req, res) {
    const {email, passwd} = req.body;
    //ToDo
  }

  create(req, res) {
    const {email, passwd} = req.body;
    //ToDo
  }
}

module.exports = UserController;
