"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin = void 0;
const adminuser_model_1 = require("../../models/mongoose-schemas/adminuser-model");
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, phone } = req.body;
    try {
        const createnewadmin = new adminuser_model_1.UserAdmin({ name, email, password, phone });
        yield createnewadmin.save();
        res.status(201).json(createnewadmin);
    }
    catch (error) {
        res.status(400).json({ msg: "Falha ao Criar usuário", errorMsg: error });
    }
});
exports.createAdmin = createAdmin;
