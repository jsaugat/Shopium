"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Social } from "@/components/auth/Social";
import { BackButton } from "@/components/auth/BackButton";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AuthCardProps {
  children: React.ReactNode;
  type: "login" | "register";
  headerTitle: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial: boolean;
}

export const AuthCard = ({
  children,
  type,
  headerTitle,
  showSocial,
}: AuthCardProps) => {
  return (
    <Card className="md:p-5 dark:bg-zinc-950 rounded-3xl shadow-xl w-[340px] sm:w-[500px] lg:w-[600px]">
      <CardHeader>
        {/* Title and SubTitle */}
        <Title title={headerTitle} />
        <Subtitle type={type} />
      </CardHeader>
      {/* Content */}
      <CardContent>
        {children}
        {showSocial && (
          <>
            <section className="my-4 flex items-center gap-2 mx-auto">
              <hr className="w-full border" />
              <span className="text-sm text-muted-foreground">OR</span>
              <hr className="w-full border" />
            </section>
            <Social />
          </>
        )}
      </CardContent>
      {/* Social */}
    </Card>
  );
};

const Title = ({ title }: { title: string }) => {
  return <h1 className={cn("text-3xl font-semibold")}>{title}</h1>;
};

const Subtitle = ({ type }: { type: "login" | "register" }) => {
  if (type === "login") {
    return (
      <h3 className="text-muted-foreground">
        Don't have an account.{" "}
        <Link href="/auth/register" className="text-blue-500">
          Sign up.
        </Link>
      </h3>
    );
  } else if (type === "register") {
    return (
      <h3 className="text-muted-foreground">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-500">
          Log in.
        </Link>
      </h3>
    );
  }
};
