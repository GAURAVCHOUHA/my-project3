// require("mongoose").connect("mongodb://0.0.0.0:27017/tss1").then(()=>{
//     console.log("DATA CONNCECTED")
// }).catch((ERR)=>{
//     console.log("DATA IS NOT CONNECTED",ERR);
// })
require("mongoose").connect("mongodb+srv://gchouhan942:3ql7HsWAWbJ5gYv1@cluster0.ngbuuxx.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("DATA CONNCECTED")
}).catch((ERR)=>{
    console.log("DATA IS NOT CONNECTED",ERR);
})


// mongodb+srv://gchouhan942:<password>@cluster0.ngbuuxx.mongodb.net/?retryWrites=true&w=majority