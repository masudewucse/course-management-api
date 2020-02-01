
const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
        name:{
            type: String,
            minlength: 3,
            maxlength:255,
            required: true
        },
        address:{
            type: String,
            minlength: 3,
            required: true
        },
        phone:{
            type: Number,
            required: true
        },
        email:{
            type: String,
            minlength: 3,
            unique: true,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        isAdmin: Boolean
});

const User = mongoose.model('users', userSchema);

function userValidation(user){
    const schema = {
        name: Joi.string().min(3).required(),
        address: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.userValidation = userValidation;
