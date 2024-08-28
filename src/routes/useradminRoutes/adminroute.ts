import { Router } from "express";
import {
  createAdmin,
  getAdmin,
} from "../../controllers/admin-controllers/admin";
import { authenticateToken } from "../../middleware/authtoken";

export const adminRoute = Router();
adminRoute.post("/createAdmin", createAdmin);
adminRoute.post("/get-admin", getAdmin, authenticateToken);
