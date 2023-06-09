const express = require('express');
const mongoose=require('mongoose');
const app=express();
const port=process.env.PORT || 9000;
const url="mongodb+srv://crud:1dCC3EXc5XFKxaR7@cluster0.z2eheqt.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);
const con =mongoose.connection;
con.once('open',()=>console.log("connected"));

app.use(express.json());
const userschema=require('./routers/user');
const exerciseschema=require('./routers/exercise');
app.use('/',userschema);
app.use('/',exerciseschema);



app.listen(port,()=>{console.log(`server is running on port:${port}`);});