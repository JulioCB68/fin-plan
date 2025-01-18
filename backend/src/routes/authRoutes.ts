// routes/authRoutes.ts
import { FastifyInstance } from "fastify";
import { login } from "../controllers/authController";

async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/login", login);
}

export default authRoutes;
