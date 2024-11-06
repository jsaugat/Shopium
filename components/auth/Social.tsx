"use client";

import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackURL");

  const handleClick = async (provider: "google" | "github") => {
    // use the signIn function to sign in with a specific provider
    // callbackUrl sets the post-authentication redirect destination for users signing in via social providers.
    await signIn(provider, {
      callbackUrl: callbackURL || DEFAULT_LOGIN_REDIRECT,
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
