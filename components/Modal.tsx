"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/slices/modalSlice";
import { RootState } from "@/store/store";

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
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  // Close modal handler
  const handleClose = () => {
    dispatch(closeModal());
    handleModalClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]" onClose={handleClose}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="">{children}</div>
      </DialogContent>
      <DialogClose />
    </Dialog>
  );
};
