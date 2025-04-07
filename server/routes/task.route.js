import express from "express";
import { createTask } from "../controller/taskController/createTask.js";
import { deleteTask } from "../controller/taskController/deleteTask.js";
import { getSingleTask } from "../controller/taskController/getSingleTask.js";
import { getTasks } from "../controller/taskController/getTasks.js";
import { updatedTask } from "../controller/taskController/updatedTask.js";

const taskRoutes = express.Router();

// GET: /api/tasks/tasks_get ✅
taskRoutes.get("/tasks_get", getTasks);

// GET: /api/tasks/single_task_get ✅
taskRoutes.get("/single_task_get/:id", getSingleTask);

// PUT: /api/tasks/task_update ✅
taskRoutes.put("/task_update/:id", updatedTask);

// POST: /api/tasks/task_create ✅
taskRoutes.post("/task_create", createTask);

// DELETE: /api/tasks/task_delete
taskRoutes.delete("/task_delete", deleteTask);

export default taskRoutes;
