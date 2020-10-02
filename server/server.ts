import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { router as AuthRoute } from "./routes/AuthRoute";

dotenv.config();

const app: Express = express();

app.use(express.json());

app.use("/api/auth", AuthRoute);

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to mongo db database"))
    .catch((e: Error) => console.error(e));
}

export { app };
