"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "@/auth/helpers";
import React from "react";
import { Button } from "@/components/ui/button";

export default function AuthButtonClient() {
  const session = useSession();
  return (
    <div>
      {!session.data?.user ? (
        <Button onClick={() => signIn()}>Sign in</Button>
      ) : (
        <Button
          onClick={async () => {
            await signOut();
            await signIn();
          }}
        >
          Sign out
        </Button>
      )}
    </div>
  );
}
