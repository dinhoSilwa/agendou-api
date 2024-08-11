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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdmin = exports.createAdmin = void 0;
const adminuser_model_1 = require("../../models/mongoose-schemas/adminuser-model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const saltRounds = 10;
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, phone } = req.body;
    try {
        const createHash = yield bcryptjs_1.default.hash(password, saltRounds);
        const createnewadmin = new adminuser_model_1.UserAdmin({
            name,
            email,
            password: createHash,
            phone,
        });
        yield createnewadmin.save();
        res.status(201).json(createnewadmin);
    }
    catch (error) {
        res.status(400).json({ msg: "Falha ao Criar usuário", errorMsg: error });
    }
});
exports.createAdmin = createAdmin;
const getAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(404).json({
                msg: "Campos de Email e Senha Obrigatórios",
            });
            throw new Error("Os Campos são Obrigátorios");
        }
        const getAdminUser = yield adminuser_model_1.UserAdmin.findOne({ email });
        if (!getAdminUser) {
            return res.status(404).json({ msg: "Usuário não Encontrado" });
        }
        const ismatch = bcryptjs_1.default.compare(password, getAdminUser.password);
        if (!ismatch) {
            return res.status(400).json({ msg: "Senha inválida" });
        }
        return res.status(200).json({ msg: "Usuário validado com Sucesso" });
    }
    catch (error) {
        console.error("Falha ao Buscar usuário", error);
    }
});
exports.getAdmin = getAdmin;
//# sourceMappingURL=admin.js.map