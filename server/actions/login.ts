"use server"

import { LoginSchema } from "@/zod-schemas";
import { z } from "zod";
import { getUserByEmail } from "../db/queries/user";
import bcrypt from "bcrypt";

export const login = async (credentials: z.infer<typeof LoginSchema>) => {
  // SERVER-SIDE VALIDATION
  const parsedCredentials = LoginSchema.safeParse(credentials);
  if (!parsedCredentials.success) {
    return {
      success: false,
      message: "Invalid credentials!",
    }
  }

  const { email, password } = parsedCredentials.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return {
      success: false,
      message: "User not found!"
    }
  }

  const isPasswordCorrect = bcrypt.compare(password, existingUser.password)
  if (!isPasswordCorrect) {
    return {
      success: false,
      message: "Invalid password!"
    }
  }

  return {
    success: true,
    message: "Logged in successfully!",
  }
}