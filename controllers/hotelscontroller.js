const routes=require("express").Router();
const key = require("../config/secretekey");
const hotels=require("../models/hotels");
const jwt=require("jsonwebtoken");
routes.post("/",async(req,res)=>{
    let token=req.headers.authorization;
    let obj=jwt.decode(token,key);
    req.body.ownerid=obj._id;
    await hotels.create(req.body);
    res.send({success:true});
});
routes.get("/",async(req,res)=>{
    let result=await hotels.find();
    res.send(result);
})
module.exports=routes;