/**
 * Common configuration for Auth.js without database adapters.
 * This config is used to initialize Auth.js in environments where 
 * database connections are not required, such as edge runtimes.
 * 
 * By separating the database adapter from this config, we can ensure 
 * that NextAuth works in both edge environments (e.g., middleware) 
 * and traditional environments that need full database support.
 * 
 * This object only contains providers (e.g., GitHub) and satisfies the 
 * NextAuthConfig type but does not include a database adapter.
 */

import { User, NextAuthConfig } from "next-auth"
import { getUserByEmail } from '../server/db/queries/user';
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "@/zod-schemas"
// Your own logic for dealing with plaintext password strings; be careful!

import bcrypt from 'bcrypt'

console.log({ 'Google Client ID': process.env.AUTH_GOOGLE_ID });
console.log({ 'Github Client ID': process.env.AUTH_GITHUB_ID });

export default {
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      name: "Credentials",
      credentials: {
        // The key is the name of the input field. The value is the label that will be displayed on the default Authjs sign-in form.
        email: { label: "Email", type: "text", placeholder: "mail@jsaugat.tech" },
        password: { label: "Password", type: "password", placeholder: "******" }
      },
      authorize: async (credentials): Promise<User | null> => {
        // Validate credentials
        const parsedCredentials = LoginSchema.safeParse(credentials);
        //! CASE: Validation failed
        if (!parsedCredentials.success) {
          return null;
        }
        //? CASE: Validation passed
        const { email, password } = parsedCredentials.data;

        const user = await getUserByEmail(email);
        // CASE: User not found or password not set (OAUTH user maybe) 
        if (!user || !user.password) return null;

        // const isPasswordCorrect = await bcrypt.compare(password, user.password);
        const isPasswordCorrect = password === user.password;
        if (!isPasswordCorrect) return null;

        //? Return user profile
        return user
          ? {
            id: user.id,
            name: user.name,
            email: user.email
          }
          : null;
      },
    }),
  ],
} satisfies NextAuthConfig