var express = require('express');
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

var indexrouter = express.Router();

const Reservation = require('../model/reservation');

/* GET home page. */
indexrouter.route("/")
.get((req, res) => {
  res.render('index');
})
.post((req, res) => {
  const guests = req.body.guestno;
  const AC = req.body.AC;
  const nonAC = req.body.NONAC;
  const date = req.body.date;
  const time = req.body.time;

  const newReservation = new Reservation({
    guests : guests,
    AC : AC,
    nonAC : nonAC,
    date : date,
    time: time
  });

  newReservation.save((err) => {
    if(err){
      console.log(err);
    }else{
      console.log("Reserved Successfully");
      res.redirect("/")
    }
  });


});

module.exports = indexrouter;
