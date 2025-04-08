import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { dbConnect } from "./db/index.js";
import router from "./routes/routes.js";


const app = express();

app.use(bodyParser.text()); // for parsing text/plain
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

//connect database
dbConnect();
// routes
app.use("/api", router);

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Server is up and running!",
  });
});



export default app;
