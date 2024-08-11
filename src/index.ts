import express, { Application } from "express";
import { connectDb } from "./config/db";
import { adminRoute } from "./routes/useradminRoutes/adminroute";
export const app: Application = express();
connectDb();
app.use(express.json());
app.use("/adminusers", adminRoute);
