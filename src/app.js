//SEREVER KO CREATE KARTA HAI
const express = require('express');

const app = express();
app.use(express.json());//json data ko read karne ke liye middleware use karte hai

const notes=[]
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(201).send("note created successfully");

})
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes retrieved successfully",
        notes:notes
    })
})
app.patch('/notes/:id',(req,res)=>{
    const id=req.params.id;
    const discription=req.body.discription;
    notes[id].discription=discription;
    res.status(200).json({
        message:"note updated successfully",
       
    })
})
app.delete('/notes/:id',(req,res)=>{
    const id=req.params.id;
    delete notes[id];
    res.status(200).json({
        message:"note deleted successfully"
    })
})


 module.exports = app;