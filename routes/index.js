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
.post((req, res) => {
  const 
})
;

module.exports = indexrouter;
