import express from "express"
import userRouter from "./user.routes.js"

const router = express.Router()

//api/user  for go to user routers
router.use("/user",userRouter)

export default router