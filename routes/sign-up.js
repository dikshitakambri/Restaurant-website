var express = require('express');
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const passport = require("passport");
const Customer = require('../model/customer');

var signupRouter = express.Router();

signupRouter.use(bodyParser.json());

const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(Customer.authenticate()));

/* GET Sign-up page. */
signupRouter.route("/")
.get((req, res) => {
  res.render('sign-up');
})
.post((req, res, next) => {

  Customers = new Customer({
    username : req.body.fullname,
    email: req.body.email,
    password : req.body.password
  });

  Customer.register(Customers, req.body.password, (err, customer) => {
    if(err){
      console.log(err);
      res.redirect("/signup");
    }
    else {
      console.log("Your account has been saved");
      res.redirect("/");
    }
  });    
});


module.exports = signupRouter;
