"use server";

import { LoginSchema } from "@/schemas"
import { z } from "zod"

export const login = async (credentials: z.infer<typeof LoginSchema>) => {
  // SERVER-SIDE VALIDATION
  const validation = LoginSchema.safeParse(credentials);
  if (!validation.success) {
    return {
      success: false,
      message: "Invalid credentials!",
    }
  }

  return {
    success: true,
    message: "Logged in successfully!",
  }
}