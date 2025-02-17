const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
         type:String,
         required:true
    },
    name:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User',userschema);

module.exports = {User};