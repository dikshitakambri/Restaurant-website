const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/customerdb", {
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

// mongoose.hospitalDB = mongoose.createConnection("mongodb://localhost:27017/hospitalDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex : true
// });

module.exports = mongoose;



