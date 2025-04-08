import { User } from "../model/user.model.js";

export const singleuser = async (req, res) => {
  try {
    // extract the id from the request parameters and renaming it to userid
    const { id: userid } = req.params;

    //select user
    const selected = await User.findById(userid);
    // handle error: if the user is not found
    if (!selected) {
      res.status(400).json({
        status: 400,
        error: true,
        message: "No user found with this id",
      });
    }
    return res.status(200).json({
      error: false,
      message: "user found success",
      data: selected,
    });
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
