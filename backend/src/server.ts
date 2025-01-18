import cors from "@fastify/cors";
import Fastify from "fastify";
import authRoutes from "./routes/authRoutes";
import bankAccountRoutes from "./routes/bankAccountRoutes";
import userRoutes from "./routes/userRoutes";

const server = Fastify();

// Configuração do CORS
server.register(cors, {
  origin: ["http://localhost:3000"], // Substitua pelo endereço do frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos
  credentials: true, // Permitir cookies/autenticação
});

server.register(authRoutes);
server.register(userRoutes);
server.register(bankAccountRoutes);

server.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
