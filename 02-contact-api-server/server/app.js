import express from "express";

const app = express();
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Server is up and running!",
  });
});

export default app;
