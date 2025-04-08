import mongoose, { Schema } from "mongoose";

// Define the schema for the User model
const userSchema = new Schema(
  {
    // User's name - required field, trimmed to remove extra spaces
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // User's email - required, unique, and trimmed
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // User's phone number - required and unique
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // User's address - optional but trimmed if provided
    address: {
      type: String,
      trim: true,
    },
  },
  {
    // Automatically manage createdAt and updatedAt fields
    timestamps: true,
  }
);

// Create and export the User model
export const User = mongoose.model("User", userSchema);
