/* eslint-disable prettier/prettier */
import { api } from "@/lib/axios";
import nookies from "nookies";

interface SingInParams {
  name: string;
  email: string;
  password: string;
}

export async function singIn({ name, email, password }: SingInParams) {
  await api.post("/user", {
    name,
    email,
    password,
  });
}

interface LoginParams {
  email: string;
  password: string;
}

export async function login({ email, password }: LoginParams) {
  try {
    const { data } = await api.post("/login", {
      email,
      password,
    });

    const token = data.token;

    // Armazenar o token nos cookies usando nookies
    nookies.set(undefined, "auth_token_fin_plan", token);

    return token;
  } catch (error) {
    console.error("Login failed:", error);
  }
}
