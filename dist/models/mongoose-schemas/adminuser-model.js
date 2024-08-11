"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdmin = void 0;
const mongoose_1 = require("mongoose");
const adminUserModel = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });
exports.UserAdmin = (0, mongoose_1.model)("adm-user", adminUserModel);
//# sourceMappingURL=adminuser-model.js.map