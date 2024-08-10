import mongoose from "mongoose";
const mongoUri = process.env.MONGODB_URI!;

export const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri || "");
    console.log("Conectado ao Banco de Dados");
  } catch (err) {
    console.error("Falha ao conectar", err);
    process.exit(1);
  }
};
