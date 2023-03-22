"use client";

import "swiper/swiper.css";
import "./swiper.add.css";
import "swiper/css/pagination";
import { RecoilRoot } from "recoil";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
        <body>{children}</body>
    </html>
  );
}
