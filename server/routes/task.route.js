import express from "express";
import { createTask } from "../controller/taskController/createTask.js";

const taskRoutes = express.Router();

// GET: /api/tasks/task_get
taskRoutes.get("/task_get", (req, res) => {});

// POST: /api/tasks/task_create
taskRoutes.post("/task_create", createTask);

// PUT: /api/tasks/task_update
taskRoutes.put("/task_update", (req, res) => {});

// DELETE: /api/tasks/task_delete
taskRoutes.delete("/task_delete", (req, res) => {});

export default taskRoutes;
