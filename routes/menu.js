var express = require('express');
var menuRouter = express.Router();

/* GET About page. */
menuRouter.route("/")
.get((req, res) => {
  res.render('menu');
});

module.exports = menuRouter;
