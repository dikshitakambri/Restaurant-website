const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

require('../config/dbconnection');

const customerSchema = new mongoose.Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    admin : {
        type : Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;