import { PrismaClient } from "@prisma/client";
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
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    reply.status(201).send(user);
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
