// // Backend Project //Node js //Express js //DB MongoDB

//API'S - url- DB opretions -CRUD



//Import Express framework (used to create server and APIs)
const express = require('express') 

// create express application instance
const app = express()         

//import CORS library (allowws frontend apps to call backend APIs)
const cors = require('cors')         

//connect MongoDB database
const { connectDB } = require('./config/db') //inform function from another file

const { addItem , editItems, deleteItems , getAllItems} = require('./controlllers/itemscontrollers')

//Missleware convert incomming request data into JSON format
//const userinfo= {"name" : "hoc"}
app.use(express.json())             

//Middlness: enable cross- origin resource sharing
app.use(cors())

connectDB()

//API 1- Create Item
app.post( "/api/create-item" , addItem)

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