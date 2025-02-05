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
  radius,
  background_color,
  modalWidthInPercent,
  paddingHorizontal = "px-6 py-0",
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  children: ReactNode;
  background_color?: string;
  paddingHorizontal?: string;
  radius?:string
  modalWidthInPercent?:string
}) => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <NModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="rounded-none"
      classNames={{
        base: background_color,
        body: paddingHorizontal,
        closeButton: "hidden",
      }}
    >
      <ModalContent className={`w-full   ${radius} ${modalWidthInPercent} `}>
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
