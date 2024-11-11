"use server"

import { LoginSchema } from "@/zod-schemas";
import { z } from "zod";
import { getUserByEmail } from "../db/queries/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const login = async (credentials: z.infer<typeof LoginSchema>, callbackUrl: string) => {
  // SERVER-SIDE VALIDATION
  const parsedCredentials = LoginSchema.safeParse(credentials);
  if (!parsedCredentials.success) {
    return {
      success: false,
      message: "Invalid credentials!",
    }
  }

  // Destrcuture email and password from parsedCredentials
  const { email, password } = parsedCredentials.data;

  // Check if user already exists
  const existingUser = await getUserByEmail(email);
  console.log({ existingUser });
  if (!existingUser) {
    return {
      success: false,
      message: "Unregistered email address!"
    }
  }

  try {
    await signIn("credentials", { email, password, redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT });
    return {
      success: true,
      message: "Logged in successfully!",
    }
  } catch (err) {
    console.log({ "authjs signInError": err });
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return { error: "Error type 'CredentialsSignin': Invalid credentials!" }
        default:
          return { error: "An error occurred while signing in!" }
      }
    }
    // throw new Error("Something went wrong with the signIn('credentials') function in the server/actions/login.ts file."); 
    throw err;
    // handle unexpected errors
    // Without this line, any error that's not an AuthError would be silently caught and the function would implicitly return undefined. This could lead to confusing behavior where login failures due to unexpected errors might not be properly reported or logged.
  }

}