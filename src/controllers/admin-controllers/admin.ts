import type { Request, Response } from "express";
import { UserAdmin } from "../../models/mongoose-schemas/adminuser-model";
import bcrypt from "bcryptjs";

const saltRounds = 10;

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

    const getAdminUser = await UserAdmin.findOne({ email });

    if (!getAdminUser) {
      return res.status(404).json({ msg: "Usuário não Encontrado" });
    }

    const ismatch = await bcrypt.compare(password, getAdminUser.password);
    if (!ismatch) {
      return res.status(400).json({ msg: "Senha inválida" });
    }

    const { name: username, email: useremail } = getAdminUser;

    return res.status(200).json({ username, useremail });
  } catch (error) {
    console.error("Falha ao Buscar usuário", error);
  }
};
