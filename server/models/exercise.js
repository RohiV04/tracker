import mongoose from "mongoose"; 
const exerciseschema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number
    },
    time:{
        type:Date
    }
},
    {
        timestamps:true
    
});
const Exercise =mongoose.model('Exercise',exerciseschema);
module.exports=Exercise;