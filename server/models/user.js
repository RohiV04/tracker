const  mongoose=require('mongoose');
const userschema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      // minlength: 3,
    },
    password:{
      type:String,
      required:true,
      trim:true
    }
  },
  {
    timestamps: true,
  }
);
const User=mongoose.model('User',userschema);
module.exports=User;