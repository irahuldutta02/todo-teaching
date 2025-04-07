import express from "express";
import { createTask } from "../controller/taskController/createTask.js";
import { showTask } from "../controller/taskController/showTask.js";
import { updatedTask } from "../controller/taskController/updatedTask.js";
import { deleteTask } from "../controller/taskController/deleteTask.js";

const taskRoutes = express.Router();

// GET: /api/tasks/task_get
taskRoutes.get("/task_get", showTask);

// POST: /api/tasks/task_create
taskRoutes.post("/task_create", createTask);

// PUT: /api/tasks/task_update
taskRoutes.put("/task_update", updatedTask);

// DELETE: /api/tasks/task_delete
taskRoutes.delete("/task_delete", deleteTask);

export default taskRoutes;
