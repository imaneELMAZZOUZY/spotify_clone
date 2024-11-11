import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname :{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true,
    },
    clerkId:{
        type :String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }}
,{timestamps:true} 
);

export const User = mongoose.model("User", userSchema);