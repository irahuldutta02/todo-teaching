import { User } from "../model/user.model.js";

export const allTaskUser = async (req, res) => {
  try {
    //find all task
    const allUser = await User.find({}).sort({ createdAt: -1 });
    //if no user
    if(!allUser){
      return res.status(400).json({
        status: 400,
        error: true,
        message: "No user found",
      })
    }
    return res.status(200).json({
      status: 200,
      error: false,
      message: "All User Show successfully",
      data: allUser,
    })
    
  } catch (error) {
    // Errors Handle 
    console.error(error);
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }

};
