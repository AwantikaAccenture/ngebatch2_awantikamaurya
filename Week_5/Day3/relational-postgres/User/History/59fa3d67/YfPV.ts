import express from 'express'
 
import {getEmployees,deletemployees,insertEmployees,updateEmployees,alterEmployees} from './database-helper'
 
let app = express();
 
 
//http://localhost:3000/
app.get('/',(req, res)=>{
    res.send(`
<div align="center">
<h1>Hello , Welcome to my Express Server..</h1>
</div>
    `)
});
 
//http://localhost:3000/employees
app.get('/employees',getEmployees);

//http://localhost:3000/insertemployees
app.get('/insertemployees',insertEmployees);

//http://localhost:3000/alteremployees
app.get('/alteremployees',alterEmployees);

//http://localhost:3000/updateemployees
app.get('/updateemployees',updateEmployees);

//http://localhost:3000/deleteemployees
app.get('/deleteemployees',deletemployees);
 
 
 
app.listen(3000, ()=>{
    console.log("My Express Server is Running on Port No 3000....");
})