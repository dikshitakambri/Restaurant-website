var express = require('express');
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

var signinRouter = express.Router();

const Customer = require('../model/customer');

/* GET Sign-up page. */
signinRouter.route("/")
.get((req, res) => {
  res.render('sign-in');
})
.post((req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    Customer.findOne({email: email}, (err, foundCustomer) => {
        if(err){
            console.log(err);
        }else {
            if(foundCustomer){
                bcrypt.compare(password, saltRounds, (err, result) => {
                    result == true;
                    console.log("Signed in successfully");
                    res.redirect("/");
                });
            }
        }
    });
});
  

module.exports = signinRouter;