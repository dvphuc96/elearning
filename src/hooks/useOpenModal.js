import { useState } from "react";

export const useOpenModal = () => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return {
    isOpen,
    openModal,
    closeModal,
  };
};
