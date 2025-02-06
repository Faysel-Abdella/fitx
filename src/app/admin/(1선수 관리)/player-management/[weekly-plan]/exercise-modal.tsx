"use client";
import React from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

export default function WeeklyPlan() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="p-8">
        {/* Your UI content here */}
        <Button
          onPress={onOpen}
          color="primary"
          className="w-[420px] py-2 font-bold rounded-full"
        >
          운동 추가하기
        </Button>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalBody>
                <p>This is the modal content. More info here, if you care.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
