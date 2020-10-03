import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import MongoStore from "connect-mongo";

import { passport } from "./services/passport";
import { router as AuthRoute } from "./routes/AuthRoute";
import { router as ContactsRoute } from "./routes/ContactRoute";

dotenv.config();

const app: Express = express();

let mongoStore = MongoStore(session);

app.use(express.json());
if (process.env.SECRET)
  app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
      store: new mongoStore({
        mongooseConnection: mongoose.connection,
      }),
    })
  );

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", AuthRoute);
app.use("/api/contacts", ContactsRoute);

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to mongo db database"))
    .catch((e: Error) => console.error(e));
}

export { app };
