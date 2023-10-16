const routes=require("express").Router();
const owner=require("../models/owner");
const sha1=require("sha1");
const jwt=require("jsonwebtoken");
const key=require("../config/secretekey");
routes.post("/",async(req,res)=>{
    let e=req.body.username;
    let p=req.body.password;
    let result=await owner.find({username:e});
    if(result.length>0){
    if(result[0].password==sha1(p)){
    let obj ={_id:result[0]._id};
    let token=jwt.sign(obj,key,{expiresIn:'2d'});
    res.send({success:true,token:token,hotelname:result[0].hotelname});
    }else{
        res.send({success:false,errType:2});
    }
}else{
res.send({success:false,errType:1});
}

});
module.exports=routes;


