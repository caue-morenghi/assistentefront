import { z } from "zod";

export const registerSchema = z.object({
  username: z.string(),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "A senha deve conter no mínimo 8 caracteres"),
  perfil: z.number(),
});

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string(),
});

export const editSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email("Email inválido"),
  perfil: z.number(),
  status: z.number(),
});

export const medidasSchema = z.object({
  usuarioId: z.number(),
  panturrilhaEsquerda: z.number(),
  panturrilhaDireita: z.number(),
  pernaEsquerda: z.number(),
  pernaDireita: z.number(),
  abdomen: z.number(),
  peitoral: z.number(),
  bracoEsquerdo: z.number(),
  bracoDireito: z.number(),
  antebracoEsquerdo: z.number(),
  antebracoDireito: z.number(),
});
