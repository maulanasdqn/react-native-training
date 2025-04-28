import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(3),
});

export const registerSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(3),
  name: z.string().min(3),
  email: z.string().email(),
});
