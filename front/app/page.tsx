"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { BackgroundStars } from "@/components/BackgroundStars";
import { ChatInput } from "@/components/ChatInput";

export default function LandingPage() {
  const router = useRouter();

  const handleSubmit = (message: string) => {
    if (!message.trim()) return;
    router.push(`/layout?question=${encodeURIComponent(message)}`);
  };

  return (
    <div className="w-screen h-screen fixed inset-0 overflow-hidden bg-black">
      <BackgroundStars />
      <div className="relative w-full h-full flex flex-col z-10">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-[140px] px-4">
          <div className="flex flex-col items-center gap-7">
            <div className="flex flex-col items-center gap-2">
              <p className="text-white text-[clamp(28px,3vw,40px)] font-extralight font-noto-sans tracking-[-0.72px]">
                Spckit AI
              </p>
              <p className="text-white text-[clamp(36px,4.8vw,64px)] font-thin font-noto-sans-kr leading-[1.16] tracking-[-0.64px] text-center max-w-[674px]">
                최고의 견적을 맞추세요
              </p>
            </div>
          </div>
          <ChatInput 
            placeholder="주로 컴퓨터로 어떤 일을 하세요?"
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
