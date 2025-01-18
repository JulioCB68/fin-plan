/* eslint-disable prettier/prettier */
import { z } from "zod";

// Regras reutilizáveis
const emailValidation = z.string().email("Insira um endereço de email válido.");
const passwordValidation = z
  .string()
  .min(8, "A senha deve ter pelo menos 8 caracteres.")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.",
  );
const usernameValidation = z
  .string()
  .min(3, "O nome de usuário deve ter pelo menos 3 caracteres.")
  .max(20, "O nome de usuário pode ter no máximo 20 caracteres.")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "O nome de usuário deve conter apenas letras, números e underlines.",
  );

// Schemas
export const loginFormSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
});

export const registerFormSchema = z.object({
  name: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
});
