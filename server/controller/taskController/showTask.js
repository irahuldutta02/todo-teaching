import { Task } from "../../model/task.model.js";

export const showTask = async (req, res) => {
  try {
    const AllTask = await Task.find();
    if (!AllTask) {
      return res.status(200).json({
        status: 200,
        error: false,
        message: "No Task Yet",
      });
    }
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
