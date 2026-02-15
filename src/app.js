//SEREVER KO CREATE KARTA HAI
// const express = require('express');

// const app = express();
// app.use(express.json());//json data ko read karne ke liye middleware use karte hai

// const notes=[]
// app.post('/notes',(req,res)=>{
//     console.log(req.body);
//     notes.push(req.body);
//     res.status(201).send("note created successfully");

// })
// app.get('/notes',(req,res)=>{
//     res.status(200).json({
//         message:"notes retrieved successfully",
//         notes:notes
//     })
// })
// app.patch('/notes/:id',(req,res)=>{//update note by id
//     const id=req.params.id;// jo id client ne bheja hai usko read karte hai
//     const discription=req.body.discription;
//     notes[id].discription=discription;
//     res.status(200).json({
//         message:"note updated successfully",
       
//     })
// })
// app.delete('/notes/:id',(req,res)=>{
//     const id=req.params.id;
//     delete notes[id];
//     res.status(200).json({
//         message:"note deleted successfully"
//     })
// })


//  module.exports = app;//app ko export karte hai taki server.js me use kar sake
app.post('/notes',async(req,res)=>{
})
app.get('/notes',async(req,res)=>{

    /*
    find=>[{},{}]or{}
    findoene=>{} or null
    */

    const notes = await noteModel.findOne({
        title:"note1"
    })//database se sare notes ko find karte hai\
    res.status(200).json({
        message:"notes retrieved successfully",
        notes:notes
    })
})

app.delete('/notes/:id',async(req,res)=>{
    const id=req.params.id;
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        message:"note deleted successfully"
    })
})

app.patch('/notes/:id',async(req,res)=>{//update note by id
    const id=req.params.id;
    const discription=req.body.discription;
    await noteModel.findByIdAndUpdate(id,{discription:discription});
    res.status(200).json({
        message:"note updated successfully",
       
    })
})
