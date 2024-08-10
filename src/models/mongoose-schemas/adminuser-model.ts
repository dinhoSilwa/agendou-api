import { model, Schema } from "mongoose";
import type { IadminUserModel } from "../../@types/useradmin";

export const adminUserModel = new Schema<IadminUserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserAdmin = model("adm-user", adminUserModel);
