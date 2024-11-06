import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})
export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Invalid email address."
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long."
  }),
  passwordConfirmation: z.string().min(6, {
    message: "Password must be at least 6 characters long."
  })
  // .refine(data => data === data.password, {
  //   message: "Passwords do not match.",
  // }),
})
export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
})