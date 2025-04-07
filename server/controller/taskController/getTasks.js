import { Task } from "../../model/task.model.js";

export const getTasks = async (req, res) => {
  try {
    // getting all tasks from the database
    // sort by createdAt in descending order
    const AllTask = await Task.find({}).sort({ createdAt: -1 });

    // handing error: if no task found
    if (!AllTask) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: "No task found",
      });
    }

    // sending response to the client
    return res.status(200).json({
      status: 200,
      error: false,
      message: "All Task Show successfully",
      data: AllTask,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }
};
