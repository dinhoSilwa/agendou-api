"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoute = void 0;
const express_1 = require("express");
const admin_1 = require("../../controllers/admin-controllers/admin");
exports.adminRoute = (0, express_1.Router)();
exports.adminRoute.post("/createAdmin", admin_1.createAdmin);
//# sourceMappingURL=adminroute.js.map