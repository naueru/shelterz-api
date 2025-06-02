import mongoose from "mongoose";

const url = `${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tinuaxm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`;

mongoose
  .connect(url)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Connection failed", error));
