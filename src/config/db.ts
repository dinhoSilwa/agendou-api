import mongoose from "mongoose";
import "dotenv/config";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Conectado ao Banco de Dados");
  } catch (err) {
    console.error("Falha ao conectar", err);
    process.exit(1);
  }
};
