"use client";

import "swiper/swiper.css";
import "./swiper.add.css";
import "swiper/css/pagination";
import { useEffect } from "react";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/navigation";

// react native app 환경인지 판단
const isApp = () => {
  let isApp = false;
  // @ts-ignore: Unreachable code error
  if (typeof window !== "undefined" && window.ReactNativeWebView) {
    isApp = true;
  }
  return isApp;
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const routerMapper = (path: string) => {
    switch (path) {
      case "MY_WORLD":
        router.push("/world/my-world");
        break;
      case "HOME":
        router.push("/home");
        break;
      case "SEARCH_WORLD":
        router.push("/world/search");
        break;
      case "MY_PAGE":
        router.push("/mypage");
        break;
      default:
        router.push("/home");
        break;
    }
  };

  const pathHandler = (e: any) => {
    if (e.data !== "") {
      routerMapper(JSON.parse(e.data)["path"]);
    }
  };

  useEffect(() => {
    if (!isApp()) {
      return;
    }

    window.addEventListener("message", pathHandler);
    document.addEventListener("message", pathHandler);

    return () => {
      window.removeEventListener("message", pathHandler);
      document.removeEventListener("message", pathHandler);
    };
  }, []);

  return (
    <html lang="en">
      <head />
      <RecoilRoot>
        <body>{children}</body>
      </RecoilRoot>
    </html>
  );
}
