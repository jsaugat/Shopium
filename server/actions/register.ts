"use server"

import { RegisterSchema } from "@/schemas"
import { z } from "zod"

export const register = async (credentials: z.infer<typeof RegisterSchema>) => {
  return {
    success: true,
    message: "Registration successful!",
  }
}