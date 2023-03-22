// stackRouter.ts

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

// react native app 환경인지 판단
const isApp = () => {
  let isApp = false;
  // @ts-ignore: Unreachable code error
  if (typeof window !== "undefined" && window.ReactNativeWebView) {
    isApp = true;
  }
  return isApp;
};

// ReactNative Webview에 postMessage 요청
const sendRouterEvent = (path: string): void => {
  // @ts-ignore: Unreachable code error
  window.ReactNativeWebView.postMessage(
    JSON.stringify({ type: "ROUTER_EVENT", data: path })
  );
};

// 뒤로가기 하는 경우
export const stackRouterBack = (router: AppRouterInstance) => {
  if (isApp()) {
    sendRouterEvent("back");
  } else {
    router.back();
  }
};

// push 하는 경우
export const stackRouterPush = (router: AppRouterInstance, url: string) => {
  window.alert(isApp());
  if (isApp()) {
    sendRouterEvent(url);
  } else {
    router.push(url);
  }
};
