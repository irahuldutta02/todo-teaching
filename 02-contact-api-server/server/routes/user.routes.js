import express from "express";
import { allTaskUser } from "../controller/allTaskUser.controller.js";
import { createTaskUser } from "../controller/createUser.controller.js";
import { deleteUser } from "../controller/deleteUser.controller.js";
import { singleuser } from "../controller/singleUser.controller.js";
import { updateUser } from "../controller/updateUser.controller.js";

const userRouter = express.Router();

//get: /api/user/alluser
userRouter.get("/alluser", allTaskUser);

//get: /api/user/singleuser/id — get one user by ID
userRouter.get("/singleuser/:id", singleuser);

// POST: /api/user/create-user
userRouter.post("/create-user", createTaskUser);

//put : /api/user/edit
userRouter.put("/edit/:id", updateUser);

//delete: /api/user/delete-user/id
userRouter.delete("/delete-user/:id", deleteUser);

export default userRouter;
