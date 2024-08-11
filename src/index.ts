import { Application } from "express";
import { connectDb } from "./config/db";
import { adminRoute } from "./routes/useradminRoutes/adminroute";
export const app: Application = express();
app.use();
connectDb();
app.use(express.json())
app.use("/adminusers", adminRoute)