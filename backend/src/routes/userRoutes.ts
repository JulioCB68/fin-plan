import { FastifyInstance } from "fastify";
import { createUser, getUsers } from "../controllers/userController";

export default async function (fastify: FastifyInstance) {
  fastify.post("/user", createUser);
  fastify.get("/users", getUsers);
}
