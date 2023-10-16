require("mongoose").connect("mongodb://0.0.0.0:27017/tss1").then(()=>{
    console.log("DATA CONNCECTED")
}).catch((ERR)=>{
    console.log("DATA IS NOT CONNECTED",ERR);
})