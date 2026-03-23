const mongoose = require('mongoose')

const connectDB = () => {
    try {
        //connect Node,js sever with MongoDB database
        // common URL same for all\database name
       // mongodb://localhost:27017/item-database
        mongoose.connect("mongodb://localhost:27017/item-database")

            //if connections successful show message in console
            .then(() => console.log("MongoDB connected"))

            //if error occurs print error
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error)

    }
}

module.exports = {connectDB}