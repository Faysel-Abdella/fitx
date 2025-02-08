"use client";
import contact from "@/assets/images/Contact.png";
import { Card } from "@heroui/card";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import image from "@/assets/icons/MessageIcon.svg";

import Header from "@/components/Header";
import ChatInterface from "./chatInterface";

const contacts = [
  {
    id: "1",
    name: "이재은",
    message: "오늘 모든 프로그램 추가해 주세요",
    image: contact,
    hasNotification: true,
  },
  {
    id: "2",
    name: "김규남",
    message: "피드백 확인하였습니다.",
    image: contact,
    hasNotification: true,
  },
  {
    id: "3",
    name: "Tyler Spence",
    message: "피드백 확인하였습니다.",
    image: contact,
  },
  {
    id: "4",
    name: "Erik Bass",
    message: "오늘 모든 프로그램 추가해 주세요",
    image: contact,
  },
  {
    id: "5",
    name: "시나라",
    message: "오늘 모든 프로그램 추가해 주세요",
    image: contact,
  },
];

const ChatArea = () => {
  const [activeContact, setActiveContact] = useState<string | null>(null);
  return (
    <div>
      <Header title="채팅" />

      <div className="flex gap-12 mt-8 items-stretch">
        {/* <div className="w-[30%] flex-1 "><Scheduler /></div> */}
        <div className="w-[30%]  ">
          <Card
            className={`${
              activeContact ? "h-full" : "h-[900px]"
            }  bg-white relative`}
          >
            <div className="flex flex-col gap-12 items-stretch justify-between">
              <div className="flex-1">
                <div className="relative m-4 mb-8">
                  <input
                    placeholder="상세 검색"
                    className="w-full pl-10 pr-4 py-3  rounded-lg  bg-gray-100 focus:outline-0"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 cursor-pointer text-[#A1A1A1]" />
                </div>

                <div className="space-y-8">
                  {contacts.map((person) => (
                    <div
                      key={person.id}
                      onClick={() => setActiveContact(person.id)}
                      className={`flex items-center p-4 gap-4 relative cursor-pointer hover:bg-[#E5F0FF] ${
                        activeContact === person.id ? "bg-[#E5F0FF]" : ""
                      }`}
                    >
                      <div>
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={48}
                          height={48}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium ">{person.name}</h3>
                        <p className="text-sm text-[#A1A1A1] truncate">
                          {person.message}
                        </p>
                      </div>
                      {person.hasNotification && (
                        <div className="absolute right-5 top-2 h-2 w-2 rounded-full bg-red-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  className="absolute bottom-10 right-6 h-12 w-12 rounded-full bg-mainBlue hover:bg-blue-700 flex items-center justify-center shadow-lg transition-colors"
                  aria-label="Open chat"
                >
                  <Image
                    src={image}
                    alt="Message Icon"
                    className="text-white"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="w-[40%]">{activeContact && <ChatInterface />}</div>
      </div>
    </div>
  );
};

export default ChatArea;
