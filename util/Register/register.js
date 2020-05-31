var sign = require('../schema/schema');
var util = require('../Encryption/encryption');

module.exports = {
    register:function(userDetail){
        // console.log('Sign -> ',sign.schema.obj)
        var register = new sign(userDetail);      
        console.log('Sign -> ',register)  
        return register;
    }

    
}