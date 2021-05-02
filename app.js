var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

const app = express();

const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

// MySQL

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hotel"
});

con.connect(function(err){
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
});

app.get('/', (req, res) => {
    res.render("index");
});
app.get('/menu', (req, res) => {
    res.render("menu");
});
app.get('/aboutus', (req, res) => {
    res.render("about");
});

app.get('/contactus', (req, res) => {
    res.render("contact");
});

app.post('/addcustomer', async (req, res) => {
    var user = req.body.cname;
    var address = req.body.caddress;
    var contact = req.body.ccontact;
    // console.log(user + address + contact)
    const query = `
    INSERT INTO customers (name, contact, address)
    VALUES ('${user}', ${contact}, '${address}')
    `;    
    try {
        const res = await client.query(query);
        console.log('User is successfully added');
    } catch (err) {
        console.log(err);
        res.redirect('back');
    }
    res.redirect('back');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

  