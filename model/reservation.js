const mongoose = require("mongoose");

require('../config/dbconnection');

const reservationSchema = new mongoose.Schema ({
    guests: {
        type: Number,
        min: 1,
        max: 30,
    },
    AC : {
        type: String
    },
    nonAC : {
        type: String
    },
    date : {
        type: Date,
        required: true
    },
    time : {
        type: String,
        required: true
    }

}, {
    timestamps: true
}
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;