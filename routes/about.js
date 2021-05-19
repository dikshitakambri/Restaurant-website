var express = require('express');
var aboutrouter = express.Router();

/* GET About page. */
aboutrouter.route("/")
.get((req, res) => {
  res.render('about');
});

module.exports = aboutrouter;
