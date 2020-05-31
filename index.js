var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var insertSchema = require('./util/schema/schema')
var register = require('./util/Register/register')
const port = process.env.PORT || 3456;

app.listen(port, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Running in ", port);
    }
});

app.use(bodyParser.json());

const mongodb = 'mongodb://Karthic:Karthick1@ds019033.mlab.com:19033/resume';

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("build")); 
//     app.get("*", (req, res) => {
//          res.sendFile(path.resolve(__dirname,  "build", "index.html"));
//     });
// }

let dbConnect = mongoose.connect(mongodb, { useNewUrlParser: true }, function (err, db) {
    if (!err) {
        console.log('Connected to DB');
    }
    else {
        console.log(' Failed to  Connect');
    }
});

let listFile = []
let obj1 = {
    id : 1,
    firstName : 'John',
    lastName : 'Smith',
    email : 'abc@xyz.com',
    phoneNumber : '+91-1234567890',
    designation : 'Developer',
    img : '',
    about : 'I am developer version 1.0',
    experience : [],
    education : [],
    skill : []
}
app.post('/', (req, res) => {
    let data = register.register(obj1)
    insertSchema.find({id:1},function(err,ob){
        console.log('oOo -> ',ob)
    })
})

app.post('/insert', (req, res) => {
    let data = register.register(obj1)
    console.log(data)
    data.save(function (err) {
        if (!err) {
            console.log('SignUp successful.')
        }
        else {
            console.log('SignUp Error')
        }
    });
})