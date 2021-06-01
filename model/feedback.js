const mongoose = require("mongoose");

require('../config/dbconnection');

const feedbackSchema = new mongoose.Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    areacode : {
        type: Number,
        required: true
    },
    contact : {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique : true
    },
    checkbox : {
        type: String
    },
    contactoption : {
        type: String
    },
    feedback : {
        type: String,
        required : true
    }

}, {
    timestamps: true
}
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;