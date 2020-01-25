
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const categories = require('./routes/categories');



mongoose.connect('mongodb://localhost/course_management', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> console.log('Mongodb database connection is successful!'))
        .catch((err) => console.log('Could not connect to MongoDB database! sorry!'));

app.use(express.json());
app.use('/api/category', categories);


// app.get('/api/courses',(req,res)=>{
// res.send('<h1>this is masud rana</h1>');
// });

// app.post('/api/courses',(req,res)=>{
//     res.send(req.body);
//     //console.log(req.body);
// });




const port = process.env.PORT || 3005;
app.listen(port, ()=>console.log(`Listening on port ${port}`));