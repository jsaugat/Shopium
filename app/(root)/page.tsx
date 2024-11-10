"use client";

import { Button } from "@/components/ui/button";
import { openModal, closeModal } from "@/store/slices/modalSlice";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isModalOpen) {
      dispatch(openModal());
    }
  }, [isModalOpen, openModal]);

  return (
    <div className="font-sans">
      <div>Is the modal open? : {isModalOpen ? "Yes" : "No"}</div>
    </div>
  );
}
