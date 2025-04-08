import express from "express";
import { allTaskUser } from "../controller/allTaskUser.controller.js";
import { createTaskUser } from "../controller/createUser.controller.js";
import{singleuser} from "../controller/singleUser.controller.js"

const userRouter = express.Router();

//get: /api/user/alluser
userRouter.get("/alluser", allTaskUser);

//get: /api/user/singleuser/id — get one user by ID
userRouter.get("/singleuser/:id", singleuser);

// POST: /api/tasks/create-user
userRouter.post("/create-user", createTaskUser);

export default userRouter;
