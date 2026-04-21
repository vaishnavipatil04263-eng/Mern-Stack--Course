


// Register User API 

const register = async (req,res) => {
    try {
  
       const { name , email , password } = req.body
       const user = await Users.create({

       })
        res.status(201).json({
            message: "Register Account Successful"
        })


    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "Error while Register Account",
            error: error.message
        })
    }
}


// Login API

const login = async (req,res) => {
    try {

        res.status(201).json({
            message: "login Successful",
        })


    } catch (error) {
        console.log(error)
         res.status(404).json({
            message: "Error while Register Account",
            error: error.message
        })
    }
}

module.exports = { login, register }


