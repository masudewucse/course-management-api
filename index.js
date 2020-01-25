
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/courses',(req,res)=>{
res.send('<h1>this is masud rana</h1>');
});

app.post('/api/courses',(req,res)=>{
    res.send(req.body);
    //console.log(req.body);
});




const port = process.env.PORT || 3005;
app.listen(port, ()=>console.log(`Listening on port ${port}`));