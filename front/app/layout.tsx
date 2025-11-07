import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spckit AI - 조립 PC 견적 AI",
  description: "최고의 견적을 맞추세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

