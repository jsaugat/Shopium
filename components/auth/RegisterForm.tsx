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
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { useState, useTransition } from "react";
import { register } from "@/server/actions/register";
import { useToast } from "@/hooks/use-toast";
import { Col } from "../ui/flex";

type RegisterFormData = z.infer<typeof RegisterSchema>;

export const RegisterForm = () => {
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: RegisterFormData) => {
    setError(undefined);
    setSuccess(undefined);
    startTransition(() => {
      // Call the register server action
      register(data).then((response) => {
        form.reset();
        if (response.success) {
          setSuccess(response.message);
          toast({
            variant: "success",
            description: response.message,
          });
        } else {
          setError(response.message);
          toast({
            variant: "destructive",
            description: response.message,
          });
        }
      });
    });
    console.log({ data });
  };

  return (
    <AuthCard
      headerTitle="Create an Account on Shopium."
      type="register"
      backButtonLabel="Already have an account? Log in."
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="mail@jsaugat.tech"
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
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Col className="w-full gap-2">
            <Button
              type="submit"
              className="w-full rounded"
              disabled={isPending}
            >
              Create an account
            </Button>
          </Col>
        </form>
      </Form>
    </AuthCard>
  );
};
