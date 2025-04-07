import { Task } from "../../model/task.model.js";

export const updatedTask = async (req, res) => {
  try {
    // extract the id from the request parameters and renaming it to taskId
    const { id: taskId } = req.params;

    // extract the data from the request body
    const { title, description, tags, priority, status } = req.body;

    const selectTask = await Task.findById(taskId);
    // handle error: if the task is not found
    if (!selectTask) {
      res.status(400).json({
        status: 400,
        error: true,
        message: "No task found with this id",
      });
    }

    // update the properties that are not undefined or null
    if (title && title.trim()) {
      selectTask.title = title.trim();
    }
    if (description && description.trim()) {
      selectTask.description = description.trim();
    }
    if (tags) {
      if (Array.isArray(tags)) {
        selectTask.tags = tags;
      } else {
        return res.status(400).json({
          status: 400,
          error: true,
          message: "Tags should be an array",
        });
      }
    }
    if (priority && priority.trim()) {
      if (["low", "medium", "high"].includes(priority)) {
        selectTask.priority = priority;
      } else {
        return res.status(400).json({
          status: 400,
          error: true,
          message: "Priority should be either low, medium or high",
        });
      }
    }
    if (status && status.trim()) {
      if (["todo", "in-progress", "done"].includes(status)) {
        selectTask.status = status;
      } else {
        return res.status(400).json({
          status: 400,
          error: true,
          message: "Status should be either todo, in-progress or done",
        });
      }
    }

    // save the updated task to the database
    const updatedTask = await selectTask.save();

    return res.status(200).json({
      status: 200,
      error: false,
      message: "Task updated successfully",
      data: updatedTask,
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
