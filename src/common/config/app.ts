import express from "express";
import { Application } from "express";
import { MainRouter } from "../../api/index";
import { loadErrorHandlers } from "../helpers/error-handling";
import session from "express-session";
import helmet from "helmet";
import compression from "compression";
import { SESSION_SECRET } from "./secrets";
import "./database"; // initialize database

const app: Application = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 60000,
    },
    resave: false,
    saveUninitialized: false,
  })
);
app.use("/api", MainRouter);

loadErrorHandlers(app);

export default app;
