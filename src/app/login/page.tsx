"use client";

import AuthApiService from "@/networks/authAPIService";
import { axiosMediaInstance, axiosinstance } from "@/networks/networkCore";
import { useEffect } from "react";
import { LoginRequired } from "../atoms/atom";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { MessageType } from "../message.type";
import { Layout } from "@/styled/layout";

export default function LoginPage() {
  const router = useRouter();
  const tryLogin = async (loginRes: LoginRequired) => {
    const service = new AuthApiService();

    if (loginRes) {
      service
        .login(loginRes)
        .then((res) => {
          axiosinstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.accessToken}`;

          axiosMediaInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.accessToken}`;

          const data = JSON.stringify({
            type: MessageType.LOG_IN,
            message: res.accessToken,
          });

          // @ts-ignore: Unreachable code error
          window.ReactNativeWebView?.postMessage(data);
          res.isSignuped ? router.replace("/onboard") : router.push("/onboard");
        })
        .catch((e: AxiosError) => {
          console.error(e);
        });
    }
  };

  useEffect(() => {
    const loginRequired: LoginRequired = {
      deviceToken:
        "fZGxLJSfSOG5QxTWrjost6:APA91bFLwlkKc3eGuxAcUpLp4ZG-BFhrEHiUe3Cuucbc6fu6WqRe_uw6FdoU_--2GM2xBNtBa6IhqA3DYcuWDTbSg1RbVqjpUbmQRhNq87V2254dJKklBYL_WyH54I5kkI6zIufSNe6k",
      socialId: "2710089860",
      socialType: "kakao",
    };
    // (window as any).loginRequired || (document as any).loginRequired;

    tryLogin(loginRequired);
  }, []);

  return <Layout.Wrapper></Layout.Wrapper>;
}
