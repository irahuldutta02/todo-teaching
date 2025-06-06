import dotenv from "dotenv";
dotenv.config(
    {
        path : "./.env"
    }
);

export const PORT = process.env.PORT || 5000;
export const DB_URL = process.env.DB_URL ;
