import type { Request, Response } from "express";
import { UserAdmin } from "../../models/mongoose-schemas/adminuser-model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const jwtsecret = process.env.JWTSECRET as string;

export const createAdmin = async (req: Request, res: Response) => {
  const { name, email, password, phone } = req.body;
  try {
    const createHash = await bcrypt.hash(password, saltRounds);
    const createnewadmin = new UserAdmin({
      name,
      email,
      password: createHash,
      phone,
    });

    await createnewadmin.save();

    res.status(201).json(createnewadmin);
  } catch (error) {
    res.status(400).json({ msg: "Falha ao Criar usuário", errorMsg: error });
  }
};

export const getAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        msg: "Campos de Email e Senha Obrigatórios",
      });
    }

    const getAdminUser = await UserAdmin.findOne({ email }, "-phone");

    if (!getAdminUser) {
      return res.status(404).json({ msg: "Usuário não Encontrado" });
    }

    const ismatch = await bcrypt.compare(password, getAdminUser.password);
    if (!ismatch) {
      return res.status(400).json({ msg: "Senha inválida" });
    }

    const { name: username, email: useremail } = getAdminUser;
    const token = jwt.sign({ name: username, email: useremail }, jwtsecret, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Falha ao Buscar usuário", errorMsg: error });
  }
};
