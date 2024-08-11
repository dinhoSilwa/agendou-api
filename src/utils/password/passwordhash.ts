import bcrypt from "bcryptjs";

const saltRounds = 10;
export const createPassHash = async (pass: string): Promise<string> => {
  try {
    const createHash = await bcrypt.hash(pass, saltRounds);
    return createHash;
  } catch (error) {
    throw new Error("Erro ao criar o hash da senha");
  }
};

// export const comparePassHash = async (
//   pass: string,
//   hashedPassword: string
// ): Promise<boolean> => {
//   try {
//     const ismatch = await bcrypt.compare(pass, hashedPassword);
//     if (!ismatch) {
//       console.log("Senhas incompativeis");
//     }
//     return ismatch;
//   } catch (error) {
//     throw new Error("Erro ao criar o hash da senha");
//   }
// };
