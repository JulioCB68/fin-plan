import { FastifyReply, FastifyRequest } from "fastify";
import { authenticateUser, generateToken } from "../services/authService";

interface LoginBody {
  email: string;
  password: string;
}

async function login(
  req: FastifyRequest<{ Body: LoginBody }>,
  reply: FastifyReply
) {
  const { email, password } = req.body;

  try {
    const user = await authenticateUser(email, password);
    const token = generateToken(user);

    reply.send({ token });
  } catch (error) {
    const err = error as Error;
    // Tratar erros de forma mais específica
    if (err.message === "User not found") {
      return reply.status(404).send({ error: "User not found" });
    }
    if (err.message === "Invalid password") {
      return reply.status(401).send({ error: "Invalid credentials" });
    }
    reply.status(500).send({ error: "Internal server error" });
  }
}

export { login };
