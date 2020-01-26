
const mongoose = require('mongoose');
const Joi = require('joi');
const {categorySchema} = require('./category');

let courseSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength:3,
        maxlength:255,
        required:true
    },
    category: {
        type: categorySchema,
        required: true
    },
    startDate:{
        type: Date,
        required: true,
        default: Date.now()
    },
    endDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min:0
    },
    inStock:{
        type: Number,
        min:0
    }
});

const Course = mongoose.model('courses', courseSchema);


function validateCourse(course){
    const schema = {
        name: Joi.string().min(0).max(255).required(),
        category: Joi.objectId().required(),
        endDate: Joi.date().required(),
        price: Joi.number().min(0).required(),
        inStock: Joi.number().min(0).required()
    }
    return Joi.validate(course, schema);
}

exports.validateCourse = validateCourse;
exports.courseSchema = courseSchema;
exports.Course = Course;