"use strict";

const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");
const UserModel = require("../models/user.model");
const User = new UserController(UserModel);

router.get("/search", (req, res) => User.findByEmail(req, res));

router.post("/login", (req, res) => User.login(req, res));

router.post("/new", (req, res) => User.create(req, res));

router.put("/update", (req, res) => User.update(req, res));

router.delete("/delete", (req, res) => User.delete(req, res));

module.exports = router;
