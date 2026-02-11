// const express = require('express');// create a server

// const app = express();//server instance created
// app.get('/',(req,res)=>{//send response to client
//     res.send("hello world");
// })

// app.listen(3000);//listen to port 3000   


/* SERVER KO CREATE KARTA HAI */
const app = require("./src/app")
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
