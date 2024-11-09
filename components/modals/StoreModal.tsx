"use client";

import React from "react";
import { Modal } from "../Modal";

export const StoreModal = () => {
  return (
    <Modal
      title="Create a new store"
      description="Fill in the form below to create a new store"
      isOpen={true}
      handleModalClose={() => console.log("Modal closed")}
    >
      helo
    </Modal>
  );
};
