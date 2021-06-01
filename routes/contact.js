var express = require('express');
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

var contactRouter = express.Router();

const Feedback = require('../model/feedback');

/* GET Contact page. */
contactRouter.route("/")
.get((req, res) => {
  res.render('contact');
})
.post((req, res) => {
  const fname = req.body.firstname;
  const lname = req.body.lastname;
  const areacode = req.body.areacode;
  const telnum = req.body.telnum;
  const email = req.body.emailid;
  const checkbox = req.body.approve;
  const option = req.body.contactoption;
  const feedback = req.body.feedback;

  const newFeedback = new Feedback({
    firstname: fname,
    lastname: lname,
    areacode: areacode,
    contact: telnum,
    email: email,
    checkbox: checkbox,
    contactoption: option,
    feedback : feedback
  });

  newFeedback.save((err) => {
    if(err){
      console.log(err);
    }else{
      console.log("Feedback saved");
      res.redirect("/contact");
    }
  })
});

module.exports = contactRouter;
