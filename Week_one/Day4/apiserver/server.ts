


import express from 'express';
// create an express instance
const app = express();

// create an endpoint...
app.get('/hello',(req, res) =>{

    res.write("Hello response from the express server");
    res.write("Hello response from the express server");
    //end the message
    res.end();
});
// creating path parameter
app.get('/users/:id',(req,res)=>{
    res.send('Good Evening !!'+ req.params.id)
})
//prod endpoint....
app.get('/prod',(req,res)=>{
    var product = {
        "id":"P100",
        "name":"Laptop",
        "price":45670
    };
    res.send(product);
})
//creating another endpoint.....
app.get('/courses',(req,res)=>{
    var courses= ['angular','node','react'];
   // res.write(courses);
    //res.end();
    res.send(courses);
})

app.get('/users',(req, res) =>{

    res.write("Hello users response from the express server");
    //end the message
    res.end();
});
//queryString parameter..
app.get('/courses/byid',(req,res)=>{
    const query = req.query.id;
    res.send('Good evening!-'+query);
})
//express.json()= mateches the content type on the request as application/json
app.use(express.json())
app.post('/loginUser',(req,res)=>{
    console.log("To create a user login",req.body);
    const object =req.body.user;
    //send a response
    res.json({login:object})
})

app.use(express.json())
app.post('/createprod',(req,res)=>{
    console.log("To create a details of product",req.body);
    const object =req.body.product;
    
    //send a response
    res.json({result:object})
    
})
// listen to a port no.
const PORT = 3400;
app.listen(PORT,()=>{
    console.log(`Server is running at port no ${PORT} `);
});