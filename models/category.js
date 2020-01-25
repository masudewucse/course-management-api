
const mongoose = require('mongoose');
const Joi = require('joi');

const categorySchema = new mongoose.Schema({
        name:{
            type: String,
            minlength:3,
            maxlength:255,
        },
        time:{
           type: Date,
           default: Date.now() 
        }
});

const Category = mongoose.model('category', categorySchema);

 function validateCategory(category){
        const schema = {
                name: Joi.string().min(3).max(255).required()
        }
        return Joi.validate(category,schema);
 }

 exports.Category = Category;
 exports.categorySchema = categorySchema;
 exports.validateCategory = validateCategory;
 

