import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

//port
export const PORT = process.env.PORT || 5000;
//database url
export const DB_URI = process.env.DB_URI;
