"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const adminroute_1 = require("./routes/useradminRoutes/adminroute");
exports.app = (0, express_1.default)();
(0, db_1.connectDb)();
exports.app.use(express_1.default.json());
exports.app.use("/adminusers", adminroute_1.adminRoute);
