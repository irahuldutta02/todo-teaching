import express from "express";
import { dbConnect } from "./db/index.js";

const app = express();

//connect database
dbConnect();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Server is up and running!",
  });
});

export default app;
