"use client";

import React from "react";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  return (
    <div className={`w-full backdrop-blur-[142px] bg-[rgba(5,5,5,0.01)] border-b border-white/20 sticky top-0 z-50 ${className}`}>
      <div className="w-full px-[306px] py-4">
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex gap-[15px] items-center">
            <div className="w-[40px] h-[40px] relative">
              <Image 
                src="/logo-icon.svg" 
                alt="Spckit AI Logo" 
                width={40} 
                height={40}
                className="w-full h-full"
              />
            </div>
            <div className="px-3 py-0.5 flex justify-center items-center">
              <p className="text-white text-2xl font-extralight font-noto-sans tracking-[-0.432px]">
                Spckit AI
              </p>
            </div>
          </div>
          
          {/* Nav Buttons */}
          <div className="flex gap-6 h-[41px] items-center justify-center">
            <button className="bg-white px-[34px] py-3.5 rounded-[55px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
              <p className="text-black text-base font-medium font-poppins leading-normal text-center">
                login
              </p>
            </button>
            <button className="bg-white px-[34px] py-3.5 rounded-[55px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
              <p className="text-black text-base font-medium font-poppins leading-normal text-center">
                Sign up
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

