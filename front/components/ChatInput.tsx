"use client";

import React, { useState } from "react";

interface ChatInputProps {
  placeholder?: string;
  onSubmit?: (message: string) => void;
  className?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  placeholder = "질문을 입력하세요",
  onSubmit,
  className = "",
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && onSubmit) {
      onSubmit(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className={`w-full max-w-[880px] h-auto py-2.5 flex flex-col justify-center items-center ${className}`}>
      <div className="w-full h-[77px] relative rounded-[50px] neumorphic-input overflow-hidden">
        {/* Input Form */}
        <form 
          onSubmit={handleSubmit}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full px-6 flex items-center justify-between">
            <button
              type="button"
              className="w-[36px] h-[36px] flex items-center justify-center cursor-pointer flex-shrink-0"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="13" stroke="#6B6B6B" strokeWidth="2"/>
                <line x1="14" y1="8" x2="14" y2="20" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round"/>
                <line x1="8" y1="14" x2="20" y2="14" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={placeholder}
              className="flex-1 mx-4 bg-transparent border-none outline-none text-white text-xl font-medium font-noto-sans-kr placeholder:text-[#6B6B6B]"
            />
            
            <button
              type="submit"
              className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer flex-shrink-0"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#A8A8A8"/>
                <path d="M10 14L13 17L18 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

