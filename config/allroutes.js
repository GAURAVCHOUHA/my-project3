const routes=require("express").Router();
const usercontroller=require("../controllers/usercontroller");
const citycontroller=require("../controllers/citycontroller");
const hotelscontroller=require("../controllers/hotelscontroller");
const ownercontroller=require("../controllers/ownercontroller");
const userauthcontroller=require("../controllers/UserAuthController");
const ownerauthcontroller=require("../controllers/OwnerAuthController");

routes.use("/api/user",usercontroller);
routes.use("/api/city",citycontroller);
routes.use("/api/hotels",hotelscontroller);
routes.use("/api/owner",ownercontroller);
routes.use("/api/user/auth",userauthcontroller);
routes.use("/api/owner/auth",ownerauthcontroller);
module.exports=routes;
