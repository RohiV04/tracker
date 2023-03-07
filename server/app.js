import mongoose from  "mongoose";
import express  from "express";
import cores from "cores";
const app=express();
const port=process.env.PORT || 9000;
const url="mongodb+srv://rohi:21B91A6257@cluster0.1y8k6g0.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);
const con =mongoose.connection;
con.on('open',()=>console.log("connected"));

app.use(express.json());




app.listen(port,()=>{console.log(`server is running on port:${port}`);});