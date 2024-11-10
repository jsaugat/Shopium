import { auth } from "@/auth";
import React from "react";
import AuthButton from "./AuthButton.server";

export default async function Profile() {
  const session = await auth();

  return (
    <main>
      {!session && <div>PLEASE LOGIN...</div>}
      <div>{JSON.stringify(session, null, 4)}</div>
      <AuthButton />
    </main>
  );
}
