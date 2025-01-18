// services/authService.ts
import { PrismaClient, User } from "@prisma/client";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// O segredo do JWT agora estará em uma variável de ambiente
const token_jwt = process.env.JWT_SECRET || "fallback-secret"; // Não deixe o valor fixo no código

async function authenticateUser(
  email: string,
  password: string
): Promise<User> {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found"); // Erro específico
  }

  const isPasswordValid = await bcryptjs.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password"); // Erro específico
  }

  return user;
}

function generateToken(user: User): string {
  const payload = {
    sub: user.id,
    email: user.email,
    name: user.name, // Adiciona o nome do usuário no token
  };

  return jwt.sign(payload, token_jwt, { expiresIn: "1h" });
}

export { authenticateUser, generateToken };
