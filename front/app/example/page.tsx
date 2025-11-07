"use client";

import React from "react";
import { Header } from "@/components/Header";
import { BackgroundStars } from "@/components/BackgroundStars";
import { ChatMessage } from "@/components/ChatMessage";
import { ResponseMessage } from "@/components/ResponseMessage";
import { ChatInput } from "@/components/ChatInput";
import { Render3D } from "@/components/Render3D";
import { ProductList } from "@/components/ProductList";

// 예시 데이터
const exampleQuestion = "그래픽디자인을 위한 컴퓨터를 맞추고 싶어요 예산은 100만원대로 생각하고 있어요";
const exampleResponse = `1. 핵심 고려사항 (디자인 워크플로우):<br/>2D 디자인 (포토샵, 일러스트): 위 사양으로 매우 쾌적하게 작업할 수 있습니다. CPU 성능과 RAM 용량이 중요하며, 16GB RAM은 대부분의 작업을 소화합니다.<br/>3D 및 영상 (블렌더, 프리미어 프로): RTX 4060은 엔트리급 3D 작업 및 FHD 영상 편집 가속에 효율적입니다. 하지만 복잡한 3D 렌더링이나 4K 편집 시에는 VRAM(8GB)의 한계와 렌더링 시간 증가를 체감할 수 있습니다.<br/>2. 예산 관련 조언:<br/>예산 조정 (100만원 이하): GPU를 한 단계 낮추거나 (예: RTX 3050 8GB), SSD 용량을 512GB로 줄여야 합니다. 하지만 그래픽 작업의 핵심인 GPU 성능 저하는 권장하지 않습니다.`;

const exampleProducts = [
  {
    id: "1",
    name: "AMD 라이젠7-6세대 9700X",
    price: "가격",
    feature1: "내용",
    feature2: "내용",
    imageUrl: "https://placehold.co/86x86",
  },
  {
    id: "2",
    name: "AMD 라이젠7-5세대 7800X3D",
    price: "가격",
    feature1: "내용",
    feature2: "내용",
    imageUrl: "https://placehold.co/78x78",
  },
  {
    id: "3",
    name: "AMD 라이젠7-5세대 7800X3D",
    price: "가격",
    feature1: "내용",
    feature2: "내용",
    imageUrl: "https://placehold.co/76x76",
  },
  {
    id: "4",
    name: "제품명",
    price: "가격",
    feature1: "내용",
    feature2: "내용",
    imageUrl: "https://placehold.co/86x86",
  },
];

export default function ExamplePage() {
  return (
    <div className="w-full h-full min-h-screen relative overflow-hidden bg-[#0f0f0f]">
      <div className="absolute inset-0">
        <BackgroundStars />
      </div>
      <div className="relative w-full h-full min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex w-full h-[994px]">
          {/* 왼쪽 패널 - 대화창 */}
          <div className="w-[960px] h-full flex flex-col pt-10 px-10 pb-0 gap-3.5 items-end relative">
            {/* 대화창 배경 */}
            <div className="absolute w-[1026px] h-[1051px] left-[-61px] top-[15px]">
              {/* Blur Layer */}
              <div className="absolute inset-[-26px]">
                <div className="absolute w-[1178px] h-[1203px] left-[-50px] top-[-50px] bg-white">
                  <div className="absolute w-[1026px] h-[1051px] left-[76px] top-[76px] bg-black rounded-[34px]" />
                </div>
                <div className="absolute inset-[31px_26px_21px_26px] bg-black/10 rounded-[34px] blur-[20px] backdrop-blur-2xl mix-blend-hard-light" />
              </div>
              
              {/* Glass Effect */}
              <div className="absolute inset-0 opacity-[0.67] rounded-[50px]">
                <div className="absolute inset-0 bg-[#cccccc] mix-blend-color-burn rounded-[50px]" />
                <div 
                  className="absolute inset-0 rounded-[50px]" 
                  style={{
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%), linear-gradient(90deg, rgba(51, 51, 51, 0.85) 0%, rgba(51, 51, 51, 0.85) 100%)'
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 rounded-[50px]" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-end gap-3.5">
              <ChatMessage message={exampleQuestion} />
              <ResponseMessage content={exampleResponse} />
            </div>

            <div className="absolute left-[40px] bottom-[142px] w-[880px]">
              <ChatInput placeholder="질문을 입력하세요" onSubmit={() => {}} />
            </div>
          </div>

          {/* 오른쪽 패널 - 정보패널 */}
          <div className="w-[960px] h-full flex flex-col">
            {/* 3D 렌더링 창 */}
            <div className="w-full h-[580px] flex items-center justify-center px-[15px] pt-[15px] pb-[77px] overflow-hidden">
              <div className="relative w-[1063px] h-[565px]">
                {/* Blur Layer */}
                <div className="absolute inset-[-26px]">
                  <div className="absolute w-[1218px] h-[668px] left-[-50px] top-[-50px] bg-white">
                    <div className="absolute inset-[76px] bg-black rounded-[34px]" />
                  </div>
                  <div className="absolute inset-[31px_26px_21px_26px] bg-black/10 rounded-[34px] blur-[20px] backdrop-blur-2xl mix-blend-hard-light" />
                </div>
                
                {/* Glass Effect */}
                <div className="absolute inset-0 opacity-[0.67] rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[10px]">
                  <div className="absolute inset-0 bg-[#cccccc] mix-blend-color-burn rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[10px]" />
                  <div 
                    className="absolute inset-0 rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[10px]" 
                    style={{
                      background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%), linear-gradient(90deg, rgba(183, 183, 183, 0.85) 0%, rgba(183, 183, 183, 0.85) 100%)'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 rounded-[50px]" />
                
                <Render3D isVisible={true} />
              </div>
            </div>

            {/* 제품 정보 창 */}
            <div className="w-full h-[414px] flex flex-col gap-2.5 px-[15px_25px_17px_15px] pt-[15px] pb-[17px] overflow-hidden">
              <div className="relative w-[1066px] h-[458px]">
                {/* Blur Layer */}
                <div className="absolute inset-[-26px]">
                  <div className="absolute w-[1218px] h-[610px] left-[-50px] top-[-50px] bg-white">
                    <div className="absolute inset-[76px] bg-black rounded-[34px]" />
                  </div>
                  <div className="absolute inset-[31px_26px_21px_26px] bg-black/10 rounded-[34px] blur-[20px] backdrop-blur-2xl mix-blend-hard-light" />
                </div>
                
                {/* Glass Effect */}
                <div className="absolute inset-0 opacity-[0.67] rounded-[10px]">
                  <div className="absolute inset-0 bg-[#cccccc] mix-blend-color-burn rounded-[10px]" />
                  <div 
                    className="absolute inset-0 rounded-[10px]" 
                    style={{
                      background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%), linear-gradient(90deg, rgba(107, 107, 107, 0.85) 0%, rgba(107, 107, 107, 0.85) 100%)'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 rounded-[10px]" />
                
                <div className="relative z-10">
                  <ProductList products={exampleProducts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

