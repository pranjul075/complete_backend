const mongoose=require("mongoose");


async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:BIbCohuj3JDxV3or@complete-backend.ll8ftzl.mongodb.net/halley")//connect server to database

    console.log("connected to db")
}

 module.exports=connectDB;//connectDB function ko export karte hai taki server.js me use kar sake
 async function disconnectDB(){//disconnect server from database
    await mongoose.disconnect();
    console.log("disconnected from db")
}
module.exports=disconnectDB;//disconnectDB function ko export karte hai taki server.js me use kar sake

