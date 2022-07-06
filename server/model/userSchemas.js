const mongoose = require('mongoose');
// Value input for Contact Us form page, send to database
const userSchamaa = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    message:{
        type: String,
        required:true
    },
});

const UserData = mongoose.model('USERN', userSchamaa);

module.exports = UserData;