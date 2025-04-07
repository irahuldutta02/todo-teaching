export const updatedTask = async (req, res) => {
  try {
    const selectTask = await Task.findById(id);
    if (!selectTask) {
      res.status(404).json({
        message: "Not Task On This Id",
      });
    }
    const updateTask = selectTask.update();
    return res.status(200).json({
      status: 200,
      error: false,
      message: "Task updated successfully",
      data: updateTask,
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
