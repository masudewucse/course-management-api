
const mongoose = require('mongoose');
const Joi = require('joi');

const bookingSchema = new mongoose.Schema({
        user:{
            type:new mongoose.Schema({
                name:{
                    type: String,
                    minlength:3,
                    maxlength:255,
                    required:true
                },
                email:{
                    type: String,
                    minlength:3,
                    maxlength:255,
                    required:true
                },
                phone:{
                    type: Number,
                    default: false
                }
            }),
            required: true
        },
        course:{
            type: new mongoose.Schema({
                name:{
                    type: String,
                    minlength:3,
                    maxlength:255,
                    required:true
                },
                price:{
                    type:{
                        type: Number,
                        min: 0
                    }
                }
            }),
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        } 
});

const Booking = mongoose.model('bookings', bookingSchema);

function bookingValidation(booking){
    const schema = {
        userId: Joi.objectId().required(),
        courseId: Joi.objectId().required()
    }

    return Joi.validate(booking, schema);
}

exports.Booking = Booking;
exports.bookingValidation = bookingValidation;
exports.bookingSchema = bookingSchema;