"use client";
import logo from "@/app/assets/Logo.svg";
import Modal from "@/components/modals/Modal";
import FindIdModal from "@/components/modals/loginModals/FindIdModal";
import FindPasswordModal from "@/components/modals/loginModals/FindPasswordModal";
import { useDisclosure } from "@heroui/react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
              <input
                type={showPassword ? "text" : "password"}
                placeholder="아이디를 입력해주세요."
                className="w-full rounded-2xl border hover:bg-[#F5F5F5] border-[#D9D9D9] bg-white px-4 py-3 text-base text-gray-900 outline-none placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-normal text-[#333333] mb-3">
              비밀번호<span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해주세요"
                className="w-full rounded-2xl border hover:bg-[#F5F5F5] border-[#D9D9D9] bg-white px-4 py-3 text-base text-gray-900 outline-none placeholder:text-gray-400 transition-all"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <Eye className="h-6 w-6" />
                ) : (
                  <EyeOff className="h-6 w-6" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </button>
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
          <div className="flex justify-center mt-4 space-x-4 text-[#006BFF] font-semibold text-sm">
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
