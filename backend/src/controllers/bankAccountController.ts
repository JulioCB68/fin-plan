import { BankAccountType, PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();

export const createBankAccount = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { userId, name, initialBalance, type, color } = request.body as {
    userId: string;
    name: string;
    initialBalance: number;
    type: BankAccountType;
    color: string;
  };

  try {
    if (!Object.values(BankAccountType).includes(type)) {
      return reply.status(400).send({ error: "Invalid account type" });
    }

    const bankAccount = await prisma.bankAccount.create({
      data: {
        userId,
        name,
        initialBalance,
        type,
        color,
      },
    });

    reply.status(201).send(bankAccount);
  } catch (error) {
    reply.status(500).send({ error: "Error creating bank account" });
  }
};

export const getBankAccounts = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const bankAccounts = await prisma.bankAccount.findMany();
    reply.status(200).send(bankAccounts);
  } catch (error) {
    reply.status(500).send({ error: "Error fetching bank accounts" });
  }
};
