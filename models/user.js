require("../config/db");
const mongoose=require("mongoose");
const userschema=mongoose.Schema({
    fullname:String,
    username:String,
    city:String,
    password:String,
    address:String,
    gender:String,
    contact:String

})
module.exports=mongoose.model("user",userschema);


