const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

require('../config/dbconnection');

const customerSchema = new mongoose.Schema ({
    username: {
        type: String,
        require: true
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

customerSchema.plugin(passportLocalMongoose);

const Customer = mongoose.model("Customer", customerSchema);

passport.serializeUser(Customer.serializeUser());
passport.deserializeUser(Customer.deserializeUser());

module.exports = Customer;