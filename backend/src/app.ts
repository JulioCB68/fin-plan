import Fastify from "fastify";
import bankAccountRoutes from "./routes/bankAccountRoutes";
import userRoutes from "./routes/userRoutes";

const app = Fastify();

app.register(userRoutes);
app.register(bankAccountRoutes);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
