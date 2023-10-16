require("../config/db");
const mongoose=require("mongoose");
const ownerschema=mongoose.Schema({
    name:String,
    username:String,
    hotelname:String,
    city:String,
    password:String,
    address:String,
    gender:String,
    contact:String

})
module.exports=mongoose.model("owner",ownerschema);

