
const mongoose = require('mongoose')

// Schema defines the structure of one document (row) in MongoDB collection (table)
const itemsSchema = new mongoose.Schema({

       userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    
    name: String,

    decription: String,

    sellingPrice: Number,

    purchasePrice: Number,

    quantity: Number,

        unit: String
})

const Items = mongoose.model("Items", itemsSchema)

// Export Items so we can use it in controllers to save/find/delete items
module.exports = Items
