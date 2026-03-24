import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2).max(50),
  photo: z.string().url().optional()
});

export const SigninSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export const CreateRoomSchema = z.object({
  slug: z.string().min(3).max(50)
});