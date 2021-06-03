const mongoose = require("mongoose");

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
    }
}, {
    timestamps: true
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;