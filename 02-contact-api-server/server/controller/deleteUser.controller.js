import { User } from "../model/user.model.js";

export const deleteUser = async (req, res) => {
  try {
    // extract the id from the request parameters and renaming it to userid
    const { id: userid } = req.params;
    //select the user
    const selectUser = await User.findById(userid)
    //error if no user
    if(!selectUser){
      res.status(400).json({
        status: 400,
        error: true,
        message: "No user found with this id",
      });
    }

    await User.findByIdAndDelete(userid)
    //if all ok
    return res.status(200).json({
      status: 200,
      error: false,
      message: "Task deleted successfully",
    });


  } catch (error) {
    console.error(error);
    //Error Handel
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }
};
