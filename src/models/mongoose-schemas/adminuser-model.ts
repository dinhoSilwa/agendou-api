import { model, Schema} from "mongoose";
import type { IadminUserModel } from "../../@types/useradmin";

const adminUserModel = new Schema<IadminUserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserAdmin = model<IadminUserModel>("adm-user", adminUserModel);
