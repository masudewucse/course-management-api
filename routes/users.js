
const _ = require('lodash');
const bcrypt = require('bcrypt');
const {User, userValidation} = require('../models/user');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/:id', async(req, res)=>{
    const user =  await User.findById(req.params.id).select('-password');
    if(!user) return res.status(400).send('user id is not valid!');
    res.send(user);
});

router.post('/', async(req, res)=>{
        const {error} = userValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        let email = await User.findOne({email: req.body.email});
        if(email) return res.status(400).send('Email is already exist!');
        
        const user = new User(_.pick(req.body,['name','address','email','password']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.send(user);
});

module.exports = router;