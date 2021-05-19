var express = require('express');
var contactRouter = express.Router();

/* GET Contact page. */
contactRouter.route("/")
.get((req, res) => {
  res.render('contact');
});

module.exports = contactRouter;
