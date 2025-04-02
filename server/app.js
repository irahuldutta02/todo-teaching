import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.con.js";
import routes from "./routes/routes.js";

const app = express();
app.use(bodyParser.text()); // for parsing text/plain
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

connectDB();

app.use("/api", routes);

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Server is up and running!",
  });
});

export default app;
