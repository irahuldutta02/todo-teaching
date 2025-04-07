import express from "express";
import taskRoutes from "./task.route.js";
import userRoutes from "./user.routes.js"

const routes = express.Router();

routes.use("/tasks", taskRoutes);
routes.use("/user", userRoutes);

export default routes;
