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

//create collection/table called "items"
 const Items =mongoose.model("Items",itemsSchema)

module.exports =  Items