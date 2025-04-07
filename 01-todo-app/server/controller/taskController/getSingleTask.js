import { Task } from "../../model/task.model.js";

export const getSingleTask = async (req, res) => {
  try {
    // extract the id from the request parameters and renaming it to taskId
    const { id: taskId } = req.params;

    const selectTask = await Task.findById(taskId);
    // handle error: if the task is not found
    if (!selectTask) {
      res.status(400).json({
        status: 400,
        error: true,
        message: "No task found with this id",
      });
    }

    return res.status(200).json({
      status: 200,
      error: false,
      message: "Task updated successfully",
      data: selectTask,
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
