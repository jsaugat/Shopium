"use client";

import React from "react";
import { Modal } from "../Modal";
import { closeModal } from "@/store/slices/modalSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Row } from "../flex";

const NewStoreSchema = z.object({
  name: z.string().min(1),
});
type NewStoreSchemaType = z.infer<typeof NewStoreSchema>;

export const CreateNewStoreModal = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  const form = useForm<NewStoreSchemaType>({
    resolver: zodResolver(NewStoreSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: NewStoreSchemaType) => {
    console.log(data);
  };

  return (
    <Modal
      title="Create a new store"
      description="Fill in the form below to create a new store"
      isOpen={isModalOpen}
      handleModalClose={closeModal}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="eg. Sneakers" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Row gap={2} className="justify-end">
            <Button
              type="submit"
              variant="outline"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </Row>
        </form>
      </Form>
    </Modal>
  );
};
