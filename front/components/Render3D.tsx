"use client";

import React from "react";

interface Render3DProps {
  imageUrl?: string;
  className?: string;
  isVisible?: boolean;
}

export const Render3D: React.FC<Render3DProps> = ({
  imageUrl = "https://placehold.co/584x443",
  className = "",
  isVisible = true,
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-center items-center ${className}`}
    >
      {/* Shadow under 3D object */}
      <div className="absolute bottom-[20%] w-[55%] h-12 bg-zinc-800 rounded-full blur-[30px]" />
      
      {/* 3D Rendered Image */}
      <img 
        className="w-[60%] max-w-[584px] h-auto object-contain z-10" 
        src={imageUrl} 
        alt="3D 렌더링" 
      />
    </div>
  );
};

