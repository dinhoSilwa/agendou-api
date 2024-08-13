import express, { Application, Request, Response } from "express";
import { connectDb } from "./config/db";
import { adminRoute } from "./routes/useradminRoutes/adminroute";
import cors from "cors";
export const app: Application = express();
connectDb();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/adminusers", adminRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Rodou");
});
