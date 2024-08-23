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
  usuario_id: z.string(),
  panturrilha_esquerda: z.string(),
  panturrilha_direita: z.string(),
  perna_esquerda: z.string(),
  perna_direita: z.string(),
  abdomen: z.string(),
  peitoral: z.string(),
  braco_esquerdo: z.string(),
  braco_direito: z.string(),
  antebraco_esquerdo: z.string(),
  antebraco_direito: z.string(),
});
