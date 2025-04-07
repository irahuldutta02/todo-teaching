 import {User} from "../../model/user.model.js"
 const registrationUser = async function (req , res) {
    //min due
    //email varifecation
    //varifecation token
    try {
        
        const {email , password , name} = req.body;
        if (!email) {
        return res.status(404).json({
            status: 404,
            message: "email is not found"
        })
    }
    if (!name) {
        return res.status(404).json({
            status: 404,
            message: "name is not found"
        })
    }
    if (!password) {
        return res.status(404).json({
            status: 404,
            message: "password is not found"
        })
    }
    const newUser =await  User.create({
        name,
        email,
        password
    })


    return res.status(201).json({
        status: 201,
        error: false,
        message: "user registrion sucesfull",
        data: newUser,
      });
    
    
    
} catch (error) {
    // Handle errors
    console.error(error);
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message ,
    });
}
}
export default registrationUser