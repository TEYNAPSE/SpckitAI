"use client";

import React from "react";

interface ResponseMessageProps {
  content: string;
  className?: string;
}

export const ResponseMessage: React.FC<ResponseMessageProps> = ({
  content,
  className = "",
}) => {
  return (
    <div className={`w-full max-w-[880px] min-h-[620px] relative ${className}`}>
      <div className="absolute inset-[10px_0_0_0] neumorphic-panel-dark rounded-[50px]" />
      <div
        className="relative px-10 py-14 text-zinc-100 text-xl font-normal font-noto-sans-kr leading-[2.5] tracking-wide break-words z-10"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

