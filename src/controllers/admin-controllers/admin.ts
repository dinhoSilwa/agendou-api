import type { Request, Response } from "express";
import { UserAdmin } from "../../models/mongoose-schemas/adminuser-model";

export const createAdmin = async (req: Request, res: Response) => {
  const { name, email, password, phone } = req.body;
  try {
    const createnewadmin = new UserAdmin({ name, email, password, phone });
    await createnewadmin.save();
    res.status(201).json(createnewadmin);
  } catch (error) {
    res.status(400).json({ msg: "Falha ao Criar usuário", errorMsg: error });
  }
};
