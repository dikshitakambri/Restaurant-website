var express = require('express');
var indexrouter = express.Router();

/* GET home page. */
indexrouter.route("/")
.get((req, res) => {
  res.render('index');
});

module.exports = indexrouter;
