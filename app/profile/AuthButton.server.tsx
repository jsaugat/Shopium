import React from "react";
import { SessionProvider } from "next-auth/react";
import AuthButtonClient from "./AuthButton.client";
import { auth } from "@/auth";

export default async function AuthButton() {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <AuthButtonClient />
    </SessionProvider>
  );
}
