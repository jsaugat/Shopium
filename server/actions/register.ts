"use server"

import { prisma } from "@/server/db/prisma";
import { getUserByEmail } from "@/server/db/queries/user";
import { z } from "zod";
import { RegisterSchema } from "@/zod-schemas";
import bcrypt from "bcrypt";

export const register = async (credentials: z.infer<typeof RegisterSchema>) => {
  try {
    //? Validate credentials
    const parsedCredentials = RegisterSchema.safeParse(credentials);
    if (!parsedCredentials.success) {
      return {
        success: false,
        message: "Invalid credentials!",
      }
    }

    //? Destructure credentials
    const { name, email, password, passwordConfirmation } = parsedCredentials.data;

    //? Check if user already exists
    const foundUser = await getUserByEmail(email);
    if (foundUser) {
      return {
        success: false,
        message: "User already exists with this email address!",
      }
    }

    //? Hash Password
    const pwHash = await bcrypt.hash(password, 10);

    //? Save user to database
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: pwHash,
      }
    })

    return newUser;

  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "User registration failed!",
    }
  }
}