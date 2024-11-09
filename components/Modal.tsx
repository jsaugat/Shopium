"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  handleModalClose: () => void;
  children?: ReactNode;
}

export const Modal = ({
  title,
  description,
  isOpen,
  handleModalClose,
  children,
}: ModalProps) => {
  // Local state to control dialog visibility
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  // Sync local state with the `isOpen` prop
  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  // Close modal handler
  const closeHandler = () => {
    setIsModalOpen(false);
    handleModalClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={closeHandler}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="">{children}</div>
      </DialogContent>
    </Dialog>
  );
};
