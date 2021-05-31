var express = require('express');
var signinRouter = express.Router();

/* GET home page. */
signinRouter.route("/")
.get((req, res) => {
  res.render('sign-in');
});

module.exports = signinRouter;
