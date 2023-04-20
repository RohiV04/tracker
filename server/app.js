const express = require('express');
const mongoose=require('mongoose');
const app=express();
const port=process.env.PORT || 9000;
const url="mongodb+srv://root:root@cluster0.1y8k6g0.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);
const con =mongoose.connection;
con.once('open',()=>console.log("connected"));

app.use(express.json());
const userschema=require('./routers/user');
const exerciseschema=require('./routers/exercise');
app.use('/',userschema);
app.use('/',exerciseschema);



app.listen(port,()=>{console.log(`server is running on port:${port}`);});