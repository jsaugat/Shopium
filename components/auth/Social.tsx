"use client";

import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const handleClick = async (provider: "google") => {
    // use the signIn function to sign in with a specific provider
    // callbackUrl sets the post-authentication redirect destination for users signing in via social providers.
    await signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-2">
      <Button
        size="lg"
        variant="outline"
        onClick={() => handleClick("google")}
        className="w-full"
      >
        <FaGoogle className="" />
        <span className="text-sm">Continue with Google.</span>
      </Button>
    </div>
  );
};
