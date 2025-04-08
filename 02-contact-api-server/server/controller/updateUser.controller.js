// Importing the User model from the user.model.js file
import { User } from "../model/user.model.js";

// Controller function to update a user by ID
export const updateUser = async (req, res) => {
  try {
    // Destructuring the 'id' from the request parameters and renaming it to 'userid'
    const { id: userid } = req.params;

    // Destructuring the fields from the request body
    const { name, email, phone, address } = req.body;

    // Attempting to find the user by ID in the database
    const selectUser = await User.findById(userid);

    // If no user is found, send a 400 response with an error message
    if (!selectUser) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: "No user found with this ID",
      });
    }

    // If 'name' is provided and not just whitespace, update it
    if (name?.trim()) selectUser.name = name.trim();

    // If 'email' is provided and not just whitespace, update it
    if (email?.trim()) selectUser.email = email.trim();

    // If 'phone' is provided and not just whitespace, update it
    if (phone?.trim()) selectUser.phone = phone.trim();

    // If 'address' is provided and not just whitespace, update it
    if (address?.trim()) selectUser.address = address.trim();

    // Save the updated user document to the database
    const updatedUser = await selectUser.save();

    // Send a success response with the updated user data
    return res.status(200).json({
      status: 200,
      error: false,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    // Catch any unexpected errors and log them to the console
    console.error("Update User Error:", error);

    // Return a 500 response indicating server error
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message || "Internal Server Error",
    });
  }
};
