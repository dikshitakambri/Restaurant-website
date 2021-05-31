var express = require('express');
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

var indexrouter = express.Router();

const Customer = require('../model/customer');

/* GET home page. */
indexrouter.route("/")
.get((req, res) => {
  res.render('index');
})
.post((req, res) =>{
  const email = req.body.email;
  const password = req.body.password

  Customer.findOne({email: email}, (err, foundCustomer) =>{
    if(err){
      console.log(err);
    }
    else{
      if(foundCustomer){
        if(foundCustomer.password === password){
          console.log(foundCustomer);
          console.log("Signed in successfully");
          res.redirect("/about");
        }
      }
    }
  })
});

module.exports = indexrouter;
