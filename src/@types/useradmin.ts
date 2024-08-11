import type { Document } from "mongoose";

export interface IadminUserModel extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IgetAdmin {
  email: string;
  password: string;
}
