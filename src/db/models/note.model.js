const mongoose = require('mongoose');



const noteSchema = new mongoose.Schema({//schema define karte hai
   title: String,
    discription: String,
})

const noteModel = mongoose.model('Note', noteSchema);//model create karte hai

module.exports = noteModel;//model ko export karte hai taki controller me use kar sake