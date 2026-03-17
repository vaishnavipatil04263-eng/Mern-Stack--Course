const mongoose = require('mongoose')

//...............................
//schema - model (Database Strucrure)
//..................................

//Define structure of item documents in mongoDB
const itemsSchema = new mongoose.Schema({  
    //Item name    
    name:String,
    
    //Item  decription
    decription: String,

    //selling price of items
    sellingPrice: Number,

    //purchase price of items
    purchasePrice: Number,

    //Avalibale quantity
    quantity: Number,

    //Unit type (kg, pcs, box, etc)
    unit: String,
})

//creat collection/table called "items"
module.exports = mongoose.model("Items", itemsSchema)