import NextAuth from "next-auth"
import authConfig from "@/auth/config"
import { prisma } from "@/server/db/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const LOGIN_PATH = "/auth/login";

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: true,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: LOGIN_PATH, // Custom login page.
    // error: "/auth/error", //specifies a custom page to handle authentication errors.
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    }
  },
  secret: process.env.AUTH_SECRET,
  // Additional auth config properties spread
  ...authConfig,
})