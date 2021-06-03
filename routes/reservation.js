var express = require('express');
var reservationRouter = express.Router();

/* GET Reservation page. */
reservationRouter.route("/")
.get((req, res) => {
  res.render('Reservation');
});

module.exports = reservationRouter;
