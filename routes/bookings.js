const {Booking, bookingSchema, bookingValidation} = require('../models/booking');
const {Course} = require('../models/course');
const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Fawn = require('fawn');
Fawn.init(mongoose); // register fawn


router.get('/', async(req,res)=>{
    const booking = await Booking.find();
    if(!booking) return res.status(400).send('No item found');
    res.send(booking);
});
router.get('/:id', async(req,res)=>{
    const booking = await Booking.findById(req.params.id);
    if(!booking) return res.status(400).send('No item found');
    res.send(booking);  
});

router.post('/', async(req, res)=>{
        const {error} = bookingValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        
        const user = await User.findById(req.body.userId);
        if(!user) return res.status(400).send('Your given user ID is is not found!');

        let course = await Course.findById(req.body.courseId);
        if(!course) return res.status(400).send('Your given course ID is is not found!');
        
        if(course.inStock === 0) return res.status(400).send('This course has no place left');

        let booking = new Booking({
            user:{
                _id: user._id,
                name: user.name,
                phone: user.email
            },
            course:{
                _id: course._id,
                name: course.name,
                price: course.price
            }
        });

        try{
            new Fawn.Task()
                    .save('bookings', booking)
                    .update('courses',{_id: course._id},{
                        $inc:{inStock:-1}
                    })
                    .run();
                    res.send(booking);
        }catch(error){
            res.status(500).send('Something went wrong with')
        }
});


module.exports = router;