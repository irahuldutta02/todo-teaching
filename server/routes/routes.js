import express from "express";
import taskRoutes from "./task.route.js";

const routes = express.Router();

routes.use("/tasks", taskRoutes);

export default routes;
