import { Router } from "express";
import { createAdmin } from "../../controllers/admin-controllers/admin";

export const adminRoute = Router();
adminRoute.post("/createAdmin", createAdmin);
