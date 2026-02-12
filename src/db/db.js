const mongoose=require("mongoose");


async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:BIbCohuj3JDxV3or@complete-backend.ll8ftzl.mongodb.net/halley")//connect server to database

    console.log("connected to db")
}
 module.exports=connectDB