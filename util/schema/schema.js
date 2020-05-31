var mongoose = require('mongoose');
        var insertSchema = new mongoose.Schema({
            id : Number,
            firstName : String,
            lastName : String,
            email : String,
            phoneNumber : String,
            designation : String,
            img : String,
            about : String,
            experience : Array,
            education : Array,
            skill : Array
        });
module.exports = mongoose.model('SignUp',insertSchema);