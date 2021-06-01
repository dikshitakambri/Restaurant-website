const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/restaurantdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex : true
})
.then(con => {
    console.log("mongodb connected");
})
.catch(err => {
    console.log("Error" + err.message);
})

mongoose.reservationDB = mongoose.createConnection("mongodb://localhost:27017/reservationDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
});

mongoose.feedbackDB = mongoose.createConnection("mongodb://localhost:27017/feedbackDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
});

module.exports = mongoose;



