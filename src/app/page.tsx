"use client";
import logo from "@/app/assets/Logo.svg";

import Image from "next/image";
import TextInput from "@/components/inputs/Input";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen  bg-white">
      <div className="w-full max-w-md bg-white   p-8">
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
            <label
              htmlFor="id"
              className="block text-sm font-normal text-[#333333] mb-3"
            >
              아이디<span className="text-[#FF0000]">*</span>
            </label>
            <TextInput
              type="id"
              containerStyle="bg-white border-1 border-[#D9D9D9] rounded-[10px]"
              placeholder="아이디를 입력해주세요."
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-normal  text-[#333333] mb-3"
            >
              비밀번호<span className="text-[#FF0000]">*</span>
            </label>
            <div className="flex items-center bg-white border-1 border-[#D9D9D9] rounded-[10px]">
              <TextInput
                type="password"
                containerStyle=" bg-white border-1 border-[#D9D9D9] rounded-[10px]"
                placeholder="비밀번호를 입력해주세요."
              />
              {/* <button>
                <Image src={eye.src} alt="" width={18} height={12}/>
              </button> */}
            </div>
          </div>

          {/* Login Button */}
          <div className="flex justify-center mt-[41px]">
            <Link href="/admin/player-management">
              <button
                type="button"
                className="w-[218px] px-2 py-3 bg-[#000000] text-white rounded-lg"
              >
                로그인
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-center mt-4">
            <p className="text-[#006BFF] text-center">
              회원가입 ID 찾기 비밀번호 찾기
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
