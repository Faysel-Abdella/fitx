import React, { ReactNode } from "react";
import {
  Modal as NModal,
  ModalContent,
  ModalBody,
} from "@heroui/react";

const Modal = ({
  isOpen,
  onOpenChange,
  children,
  modalWidthInPercent,
  paddingHorizontal = "px-6 py-0",
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  children: ReactNode;
  modalWidthInPercent?: string;
  paddingHorizontal?: string;
}) => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <NModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="rounded-none"
      classNames={{
        base: modalWidthInPercent,
        body: paddingHorizontal,
        closeButton: "hidden",
      }}
    >
      <ModalContent className="w-full">
        {() => (
          <>
            <ModalBody>{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </NModal>
  );
};

export default Modal;
