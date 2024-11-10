"use client";

import { AuthCard } from "@/components/auth/AuthCard";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/zod-schemas";
import { z } from "zod";
import { useState, useTransition } from "react";
import { login } from "@/server/actions/login";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { LoadingSpinner } from "@/components/FormLoading";
import { Col } from "../flex";
import { useToast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";

type LoginFormData = z.infer<typeof LoginSchema>;

export const LoginForm = () => {
  // <string | undefined> instead of <string | null> because React generally handles `undefined` better for conditional rendering and updates, ensuring the state is treated as "not set" rather than having an explicit "no value" state.
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form submission handler
  const onSubmit = (credentials: LoginFormData) => {
    setError(undefined);
    setSuccess(undefined);
    startTransition(() => {
      // Call the login server action
      login(credentials).then((res) => {
        // form.reset();
        if (res.success) {
          setSuccess(res.message);
          toast({
            variant: "success",
            description: res.message,
          });
        } else {
          setError(res.message);
          toast({
            variant: "destructive",
            description: res.message,
          });
        }
      });
    });
    console.log({ credentials });
  };

  return (
    <AuthCard
      type="login"
      headerTitle="Login to Shopium."
      backButtonLabel="New to Shopium? Create an account."
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email" // 👈 email | password as defined in the LoginSchema
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="mail@saugat.tech"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="******"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Col className="w-full gap-2">
            {/* <FormError message={error} />
            <FormSuccess message={success} /> */}
            <Button
              type="submit"
              className="w-full rounded"
              disabled={isPending}
            >
              {isPending && <LoaderCircle className="animate-spin" />}
              Log In
            </Button>
          </Col>
        </form>
      </Form>
    </AuthCard>
  );
};
