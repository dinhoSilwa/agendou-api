import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const jwtsecret = process.env.JWTSECRET as string;

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Obtém o token do cabeçalho de autorização
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Token não fornecido", token });
  }

  try {
    // Verifica o token usando a chave secreta
    const verify = jwt.verify(token, jwtsecret);
    // Armazena as informações do token no request para uso posterior, se necessário
    req.body = verify;
    // Prossegue para o próximo middleware ou rota
    next();
  } catch (error) {
    // Token inválido ou erro na verificação
    return res.status(403).json({ msg: "Token inválido ou expirado" });
  }
};
