var express = require('express');
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

var signinRouter = express.Router();

const Customer = require('../model/customer');

/* GET Sign-up page. */
signinRouter.route("/")
.get((req, res) => {
  res.render('sign-up');
})
.post((req, res) => {
  const fname = req.body.firstname;
  const lname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password

  const newCustomer = new Customer({
    firstname : fname,
    lastname : lname,
    email : email,
    password: password
  });

  newCustomer.save((err) => {
    if(err){
      console.log(err);
    }
    else {
      console.log("Customer added Successfully");
      res.redirect("/")
    }
  })
});


module.exports = signinRouter;
