import { FastifyInstance } from "fastify";
import {
  createBankAccount,
  getBankAccounts,
} from "../controllers/bankAccountController";

export default async function (fastify: FastifyInstance) {
  fastify.post("/bank-accounts", createBankAccount);
  fastify.get("/bank-accounts", getBankAccounts);
}
