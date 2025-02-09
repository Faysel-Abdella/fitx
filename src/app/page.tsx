"use client";
import { useState } from "react";
import logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import { Input } from "@heroui/react";
import { useDisclosure } from "@heroui/react";
import Modal from "@/components/modals/Modal";
import FindIdModal from "@/components/modals/loginModals/FindIdModal";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import FindPasswordModal from "@/components/modals/loginModals/FindPasswordModal";
import Link from "next/link";

const LoginPage = () => {
  const [modalType, setModalType] = useState<"findId" | "findPassword" | null>(
    null
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);

  const openModal = (type: "findId" | "findPassword") => {
    setModalType(type);
    onOpen();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-md bg-white p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <Image src={logo} alt="Logo" width={130} height={30} />
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <p className="mx-4 text-sm text-gray-500">login</p>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <form>
          {/* Email Field */}
          <div className="mb-4 w-full">
            <label className="block text-sm font-normal text-[#333333] mb-3">
              아이디<span className="text-[#FF0000]">*</span>
            </label>
            <div className="">
              {" "}
              <Input
                type="text"
                placeholder="아이디를 입력해주세요."
                variant="bordered"
                classNames={{
                  inputWrapper: "py-6",
                }}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-normal text-[#333333] mb-3">
              비밀번호<span className="text-[#FF0000]">*</span>
            </label>
            <div className="flex items-center rounded-xl">
              <Input
                type={showPassword ? "text" : "password"}
                variant="bordered"
                placeholder="비밀번호를 입력해주세요."
                className="border-none"
                classNames={{
                  inputWrapper: "py-6",
                }}
                endContent={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOffIcon size={20} />
                    ) : (
                      <EyeIcon size={20} />
                    )}
                  </button>
                }
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="flex justify-center mt-[41px]">
            <Link href="/admin/player-management">
              <button className="w-[218px] px-2 py-3 bg-[#000000] text-white rounded-lg">
                로그인
              </button>
            </Link>
          </div>

          {/* Links */}
          <div className="flex justify-center mt-4 space-x-4 text-[#006BFF] text-sm">
            <button type="button" onClick={() => {}}>
              회원가입
            </button>
            <button type="button" onClick={() => openModal("findId")}>
              ID 찾기
            </button>
            <button type="button" onClick={() => openModal("findPassword")}>
              비밀번호 찾기
            </button>
          </div>
        </form>
      </div>

      {/* Modals */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        {modalType === "findId" && <FindIdModal />}
        {modalType === "findPassword" && <FindPasswordModal />}
      </Modal>
    </div>
  );
};

export default LoginPage;
