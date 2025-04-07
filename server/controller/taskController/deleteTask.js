import { Task } from "../../model/task.model.js";

export const deleteTask = async (req, res) => {
  try {
    const selectTask = await Task.findById(_id);
    if (!selectTask) {
      res.status(404).json({
        message: "Not Task On This Id",
      });
    }
    const delTask = selectTask.destroy();
    if (!delTask) {
      res.status(404).json({
        message: "Your Task Not Delete",
      });
    }

    return res.status(200).json({
      status: 200,
      error: false,
      message: "Task created successfully",
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
