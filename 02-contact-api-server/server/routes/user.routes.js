import express from "express";
import { allTaskUser } from "../controller/allTaskUser.controller.js";
import { createTaskUser } from "../controller/createUser.controller.js";

const userRouter = express.Router();

//get: /api/user/alluser
userRouter.get("/alluser", allTaskUser);
// POST: /api/tasks/create-user
userRouter.post("/create-user", createTaskUser);

export default userRouter;
