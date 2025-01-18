import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; // Importa bcryptjs
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export const createUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { name, email, password } = request.body as {
    name: string;
    email: string;
    password: string;
  };

  try {
    // Encripta a senha
    const hashedPassword = await bcrypt.hash(password, 10); // 10 é o custo de processamento (salt rounds)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword, // Salva a senha encriptada
      },
    });

    reply.status(201).send({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    reply.status(500).send({ error: "Error creating user" });
  }
};

export const getUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const users = await prisma.user.findMany();
    reply.status(200).send(users);
  } catch (error) {
    reply.status(500).send({ error: "Error fetching users" });
  }
};
