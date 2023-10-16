require("../config/db");
const mongoose=require("mongoose");
const hotelsschema=mongoose.Schema({
    ownerid:mongoose.Schema.Types.ObjectId,
    hotelname:String,
    address:String,
    star:String,
    facilities:[],
    normal:{type:Number,default:0},
    luxary:{type:Number,default:0},
    delux:{type:Number,default:0}

})
module.exports=mongoose.model("hotels",hotelsschema);