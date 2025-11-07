"use client";

import React from "react";

// 4-pointed star (십자가 모양) SVG 컴포넌트
const FourPointedStar: React.FC<{ size: number; className?: string }> = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 0L13.5 9L12 12L10.5 9L12 0Z"
      fill="currentColor"
    />
    <path
      d="M12 24L13.5 15L12 12L10.5 15L12 24Z"
      fill="currentColor"
    />
    <path
      d="M0 12L9 10.5L12 12L9 13.5L0 12Z"
      fill="currentColor"
    />
    <path
      d="M24 12L15 10.5L12 12L15 13.5L24 12Z"
      fill="currentColor"
    />
  </svg>
);

export const BackgroundStars: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Grid Pattern - Figma 디자인의 배경 그리드 */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Large Glow Effect - 중앙 하단 */}
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[40vw] h-[40vw] max-w-[661px] max-h-[661px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 237, 213, 0.5) 0%, rgba(255, 237, 213, 0.15) 40%, transparent 70%)',
          filter: 'blur(120px)'
        }}
      />

      {/* Stars with Glow - 4-pointed star shape */}
      {/* Left Top Small */}
      <div className="absolute left-[7%] top-[13%]">
        <FourPointedStar size={14} className="text-white/95" />
        <div className="absolute inset-0 w-[100px] h-[100px] -left-[43px] -top-[43px] bg-yellow-100/30 blur-[40px]" />
      </div>

      {/* Left Bottom Medium */}
      <div className="absolute left-[7%] bottom-[18%]">
        <FourPointedStar size={16} className="text-white/95" />
        <div className="absolute inset-0 w-[110px] h-[110px] -left-[47px] -top-[47px] bg-yellow-100/35 blur-[45px]" />
      </div>

      {/* Center Top */}
      <div className="absolute left-[33%] top-[20%]">
        <FourPointedStar size={18} className="text-white/95" />
        <div className="absolute inset-0 w-[120px] h-[120px] -left-[51px] -top-[51px] bg-yellow-100/40 blur-[48px]" />
      </div>

      {/* Right Top */}
      <div className="absolute left-[68%] top-[18%]">
        <FourPointedStar size={14} className="text-white/90" />
        <div className="absolute inset-0 w-[100px] h-[100px] -left-[43px] -top-[43px] bg-yellow-100/30 blur-[40px]" />
      </div>

      {/* Right Center */}
      <div className="absolute right-[4%] top-[44%]">
        <FourPointedStar size={16} className="text-white/95" />
        <div className="absolute inset-0 w-[110px] h-[110px] -left-[47px] -top-[47px] bg-yellow-100/35 blur-[45px]" />
      </div>

      {/* Right Bottom */}
      <div className="absolute right-[8%] bottom-[14%]">
        <FourPointedStar size={15} className="text-white/90" />
        <div className="absolute inset-0 w-[105px] h-[105px] -left-[45px] -top-[45px] bg-yellow-100/32 blur-[42px]" />
      </div>

      {/* Additional Subtle Stars */}
      <div className="absolute left-[20%] top-[32%]">
        <FourPointedStar size={10} className="text-white/70" />
      </div>
      <div className="absolute left-[45%] top-[8%]">
        <FourPointedStar size={9} className="text-white/65" />
      </div>
      <div className="absolute left-[82%] top-[25%]">
        <FourPointedStar size={10} className="text-white/68" />
      </div>
      <div className="absolute left-[15%] bottom-[35%]">
        <FourPointedStar size={9} className="text-white/62" />
      </div>
      <div className="absolute left-[62%] top-[45%]">
        <FourPointedStar size={10} className="text-white/70" />
      </div>
      <div className="absolute right-[20%] bottom-[25%]">
        <FourPointedStar size={11} className="text-white/68" />
      </div>

      {/* More Subtle Glow Effects */}
      <div className="absolute left-[7%] top-[13%] w-[180px] h-[180px] bg-yellow-100/15 blur-[60px]" />
      <div className="absolute right-[4%] top-[44%] w-[200px] h-[200px] bg-yellow-100/18 blur-[65px]" />
      <div className="absolute left-[7%] bottom-[18%] w-[160px] h-[160px] bg-yellow-100/16 blur-[55px]" />
      <div className="absolute right-[8%] bottom-[14%] w-[190px] h-[190px] bg-yellow-100/17 blur-[58px]" />
    </div>
  );
};
