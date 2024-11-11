import NextAuth from "next-auth"
import authConfig from "@/auth/config"
import { prisma } from "@/server/db/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const BASE_PATH = "/api/auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: true,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    // signIn: "/auth/login", // Custom login page.
    // error: "/auth/error", //specifies a custom page to handle authentication errors.
  },
  ...authConfig,
})