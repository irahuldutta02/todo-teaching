import express from "express";
import {createTaskUser} from "../controller/createUser.controller.js"

const userRouter = express.Router();

// POST: /api/tasks/create-user 
userRouter.post("/create-user", createTaskUser);

export default userRouter;
