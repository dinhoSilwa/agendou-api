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
exports.comparePassHash = exports.createPassHash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
const createPassHash = (pass) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createHash = yield bcrypt_1.default.hash(pass, saltRounds);
        return createHash;
    }
    catch (error) {
        throw new Error("Erro ao criar o hash da senha");
    }
});
exports.createPassHash = createPassHash;
const comparePassHash = (pass, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ismatch = yield bcrypt_1.default.compare(pass, hashedPassword);
        if (!ismatch) {
            console.log("Senhas incompativeis");
        }
        return ismatch;
    }
    catch (error) {
        throw new Error("Erro ao criar o hash da senha");
    }
});
exports.comparePassHash = comparePassHash;
