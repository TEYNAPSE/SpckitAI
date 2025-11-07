"use client";

import React from "react";

interface ChatMessageProps {
  message: string;
  className?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  className = "",
}) => {
  return (
    <div className={`w-full max-w-[577px] min-h-[160px] relative ${className}`}>
      <div className="absolute inset-[10px_0_0_0] neumorphic-panel-dark rounded-[50px]" />
      <div className="relative px-8 py-7 text-zinc-100/95 text-xl font-normal font-noto-sans-kr leading-[2.5] tracking-wide break-words z-10">
        {message}
      </div>
    </div>
  );
};

