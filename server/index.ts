import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

const app = express();
const databaseUrl = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;

if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is not set");
}

// Connect to MongoDB
const db = mongoose
  .connect(databaseUrl)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server started on port ${port}!`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());
