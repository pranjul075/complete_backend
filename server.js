const express = require('express');// create a server

const app = express();
app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(3000);