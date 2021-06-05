var express = require('express');
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const passport = require("passport");
const Customer = require('../model/customer');

var signupRouter = express.Router();

signupRouter.use(bodyParser.json());

/* GET Sign-up page. */
signupRouter.route("/")
.get((req, res) => {
  res.render('sign-up');
})
.post((req, res, next) => {

  Customer.findOne({email: req.body.email})
  .then((customer) => {
    if(customer != null) {
      var err = new Error('User ' + req.body.email + ' already exists!');
      err.status = 403;
      res.redirect("/signup");
    }
    else {
      return Customer.create({
        email: req.body.email,
        password: req.body.password,
        firstname : req.body.firstname,
        lastname : req.body.lastname
      });
    }
  })
  .then((customer) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    passport.authenticate("local")(req, res, () => {
      res.redirect("/");
    });
  }, (err) => next(err))
  .catch((err) => next(err));
});


module.exports = signupRouter;
