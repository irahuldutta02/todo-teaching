import { Task } from "../../model/task.model.js";

export const createTask = async (req, res) => {
  try {
    // Extract data from request body
    const { title, description, tags, priority } = req.body;

    console.log("Request Body:", req.body);

    // Validate request body
    const requiredFields = ["title"];
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Create a new task
    const newTask = await Task.create({
      title,
      description,
      tags,
      priority,
    });

    // Respond with the created task
    return res.status(201).json({
      status: 201,
      error: false,
      message: "Task created successfully",
      data: newTask,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message || "Internal Server Error",
    });
  }
};
