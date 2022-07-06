const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Value input for Signup/register, send to database
const userSchama = new mongoose.Schema({
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
    work: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    cpassword: {
        type: String,
        required:true
    },
    tokens: [
        {
           token: {
             type: String,
             required:true
           } 
        }
    ]
});

// hashing password  

userSchama.pre('save', async function(next) {
    console.log("hast inside");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await  bcrypt.hash(this.cpassword, 12);
    }
    next();
});

//generating user token
userSchama.methods.generateAuthToken = async function() {
    try {
        let token =jwt.sign({ _id: this._id}, process.env.SECRET_KEY);
        this.token = this.tokens.concat({ token: token});
        await this.save();
        console.log(this.token);
        return token; 
    }catch(err){
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchama);

module.exports = User;