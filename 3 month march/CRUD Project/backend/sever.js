// // Backend Project

// //Node js
// //Express js                                                                    
// //DB MongoDB

// // API list
// //  1. Create iteam - Get data value from frontend {iteam details} and store into DB
// // 2. Update iteam - get iteam details from frontend which iteam we need to update
// // 3. Delete iteam - get iteam details from frontend and on delete this record from database
// // 4. get ALL Records - get ALL records from DB and show to UI frontend


const express = require('express')          //expres js is framework of node js creat api use
const app = express()                      //app=variable => stores express js

const cors = require('cors')             //cross 
const { connectDB } = require('./config/db')

app.use(express.json())                   // frontend converts all data in json format
app.use(cors())

connectDB()

//API 1- Create Item
app.post( "/api/create-item" ,addItems)

//API 2- Update/Edit
app.put( "/api/update-item", editItems  )

//API 1- Delete Item
app.delete("/api/delete-item/:id", deleteItems )

//API 1- GetAll Item
app.get("/api/get-all-item" , getAllItems  )

//Health API
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server Is Running" })
})
//server Start
const PORT = 9090
app.listen(PORT, () => {
    console.log('Server Started')
})