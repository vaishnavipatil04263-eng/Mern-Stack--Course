// APILits

//1.API create item-get data values from front end (items details) and store into Db
//2. API update item-get item details from front end which item we need to update
//3. API delet item-get ieem detels from front end andelete this record from database
//4 API get all recordes -get all recoreds from DB and show to ui front end 

// const getdata =()=>{

// }
// function getdata(){
    
// }

console.log("hello")

const express = require("express")
const { ServerDescription } = require("mongodb")
const app = express()
const mongoose = require("mongoose")


app.use(express.json())
mongoose.connect("mongodb://localhost:27017/item-database").then( () => console.log("mongo DB Connected")).catch((error)=> console.log(error))

const itemsSchema = new mongoose.Schema({
    name  :String,
    Description : String,
    sellingprice : Number
})

const items = new mongoose.model("Item", itemsSchema)