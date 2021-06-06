var express = require('express');
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const passport = require("passport");

var signinRouter = express.Router();

const Customer = require('../model/customer');

/* GET Sign-up page. */
signinRouter.route("/")
.get((req, res) => {
  res.render('sign-in');
})
.post(passport.authenticate("local"),(req, res) => {
    console.log("logged-in Successfully");
    res.redirect("/");
});
  

module.exports = signinRouter;