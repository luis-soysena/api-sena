"use strict";

const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");
const UserModel = require("../models/user.model");
const User = new UserController(UserModel);

router.post("/login", (req, res) => User.login(req, res));

router.post("/new", (req, res) => User.create(req, res));

router.put("/update", (req, res) => User.create(req, res));

router.delete("/delete", (req, res) => User.create(req, res));

module.exports = router;
