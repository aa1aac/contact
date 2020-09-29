import express, { Express } from "express";

import { router as AuthRoute } from "./routes/AuthRoute";

const app: Express = express();

app.use("/api/auth", AuthRoute);

export { app };
