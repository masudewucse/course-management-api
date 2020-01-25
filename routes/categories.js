
const {validateCategory, Category} = require('../models/category');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res)=>{
    let category = await Category.find().select('name');
    res.send(category);
});
router.get('/:id', async (req,res)=>{
    let category = await Category.findById(req.params.id);
    if(!category) return res.status(400).send('No category found with your given id.')
    res.send(category);
});

router.post('/', async (req,res)=>{
    const {error} = validateCategory(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let category = new Category({name: req.body.name});
    category = await category.save();
    res.send(category);
});

router.put('/:id', async(req,res)=>{
    const {error} = validateCategory(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let category = await Category.findByIdAndUpdate(req.params.id, 
        {name: req.body.name},
        {new: true});
        if(!category) return res.status(400).send('Could not find any category with the given id.');
        res.send(category);
});

router.delete('/:id', async(req, res)=>{
    let category = await Category.findByIdAndDelete(req.params.id);
        if(!category) return res.status(400).send('Could not find any category to delete by the given id');
        res.send(category);


});



module.exports = router;