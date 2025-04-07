import { Task } from "../../model/task.model.js";

export const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const selectTask = await Task.findById(taskId);
    if (!selectTask) {
      res.status(400).json({
        status: 400,
        error: true,
        message: "Not Task On This Id",
      });
    }

    // delete the task
    await Task.findByIdAndDelete(taskId);

    return res.status(200).json({
      status: 200,
      error: false,
      message: "Task deleted successfully",
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
