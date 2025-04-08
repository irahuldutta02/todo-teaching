import { User } from "../model/user.model.js";
export const createTaskUser = async (req, res) => {
  try {
    //Extract data from request body
    const { name, email, phone, address } = req.body;

    //if no name
    if (!name) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: "there is no name",
      });
    }
    //if no email
    if (!email) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: "there is no email",
      });
    }
    //if no phone
    if (!phone) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: "there is no phone",
      });
    }
    //if no address
    if (!address) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: "there is no address",
      });
    }

    //create user
    const createdUser = await User.create({
      name,
      email,
      phone,
      address,
    });
    // Respond with the created task
    return res.status(201).json({
      status: 201,
      error: false,
      message: "User created successfully",
      data: createdUser,
    });
  } catch (error) {
    //Error Handle
    console.error(error);
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message || "Internal Server Error",
    });
  }
};
