import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./server/src/routes/user.js";
import { recipesRouter } from "./server/src/routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.set('strictQuery', false); // Suppress deprecation warning

mongoose.connect(
  "mongodb+srv://esprit:12345@cluster0.wbggr.mongodb.net/recipeshare?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    () => console.log("DB connected...")
  )

app.listen(3001, () => console.log("Server started"));
