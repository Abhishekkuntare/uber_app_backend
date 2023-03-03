import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config({ path: "./config/config.env" });
const app = express();

//Using Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
const corsOrigin = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));

//Importing and using routes
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import other from "./routes/otherRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", other);

export default app;

app.get("/", (req, res) => {
  res.send(
    `<h1>Site is working click front on <a href=${process.env.FRONTEND_URL}>here</a></h1>`
  );
});

app.use(ErrorMiddleware);
