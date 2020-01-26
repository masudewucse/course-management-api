
const {Category} = require('../models/category');
const {validateCourse, Course, courseSchema} = require('../models/course');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>{
    let course = await Course.find();
    res.send(course);
});

router.get('/:id', async(req, res)=>{
    let course = await Course.findById(req.params.id);
    if(!course) return res.status(400).send('No course has been found by your given id.')
    
    res.send(course);
});

router.post('/', async(req, res)=>{
        const {error} = validateCourse(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const category = await Category.findById(req.body.categoryId);
        if(!category) return res.status(400).send('No category found with your given id');

        let course = new Course({
            name: req.body.name,
            category: {
                _id: category.id,
                name: category.name
            },
            endDate: req.body.endDate,
            price: req.body.price,
            inStock: req.body.inStock
        });
        course = await course.save();
        res.send(course);
});

router.put('/:id', async(req, res) => {
        let cat = await Category.findById(req.body.category);
        if(!cat) return res.status(400).send('Course id is invalid!');

        let {error} = validateCourse(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        let course = await Course.findByIdAndUpdate(req.params.id,
            {
                name: req.body.name,
                category: {
                    _id: cat._id,
                    name: cat.name
                },
                endDate: req.body.endDate,
                price: req.body.price,
                inStock: req.body.inStock
            },
            {new:true});

            if(!course) return res.status(404).send("The Course with the given ID is not found!");
           res.send(course);
});

router.delete('/:id', async(req, res)=>{
        let course = await Course.findByIdAndDelete(req.params.id);
        if(!course) return res.status(404).send('The course with the given ID is not found');

        res.send(course);
});


module.exports = router;