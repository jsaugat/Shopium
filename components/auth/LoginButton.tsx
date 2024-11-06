"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  asChild: boolean;
}

export const LoginButton = ({ children }: LoginButtonProps) => {
  const router = useRouter();
  return (
    <span
      onClick={() => {
        console.log("LOGIN BUTTON CLICKED!!");
        router.push("/auth/login");
      }}
    >
      {children}
    </span>
  );
};
