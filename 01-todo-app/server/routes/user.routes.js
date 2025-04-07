import express from "express";
import registrationUser from "../controller/userContriller/registration.User.js";
import Login from "../controller/userContriller/Login.User.js";
import isverifyed from "../Middleware/User/IsVerifyed.js";
import Logout from "../controller/userContriller/Logout.User.js";
import Profile from "../controller/userContriller/Profile.User.js";

const userrouter = express.Router();

// POST: /api/user/registration
userrouter.post("/registration", registrationUser);

// GET: /api/user/login
userrouter.get("/login", Login);

// GET: /api/user/logout (Requires verification)
userrouter.get("/logout", isverifyed, Logout);

// POST: /api/user/profile (Requires verification)
userrouter.post("/profile", isverifyed, Profile);

export default userrouter;
