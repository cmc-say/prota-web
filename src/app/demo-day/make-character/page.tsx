"use client";

import { LoginRequired } from "@/app/atoms/atom";
import { Header } from "@/app/components/header/Header";
import { FileUpload } from "@/app/components/onboard/FileUpload";
import { InputBox } from "@/app/components/world/InputBox";
import { TextArea } from "@/app/components/world/TextArea";
import AuthApiService from "@/networks/authAPIService";
import CharacterAPIService from "@/networks/characterAPIService";
import { axiosinstance, axiosMediaInstance } from "@/networks/networkCore";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { Alert } from "../alert/alert";
import { CMCFooterBtn } from "../footerBtn/button";

export default function MakeCharacterOnBoard() {
  const [file, setFile] = useState<File>();
  const [avatarName, setAvatarName] = useState("");
  const [avatarMessage, setAvatarMessage] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  const router = useRouter();

  const tryLogin = async (loginRes: Pick<LoginRequired, "socialId">) => {
    if (loginRes.socialId.length === 0) return;

    const service = new AuthApiService();

    if (loginRes) {
      service
        .letsLogin(loginRes)
        .then((res) => {
          axiosinstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.accessToken}`;

          axiosMediaInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.accessToken}`;

          localStorage.setItem("accessToken", res.accessToken);
        })
        .catch((e: AxiosError) => {
          console.error(e);
          setAlertMessage(e.message);
          setIsAlert(true);
          setTimeout(() => {
            setIsAlert(false);
          }, 1000);
        });
    }
  };

  const onChangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAvatarName(event.target.value);
    },
    [avatarName]
  );

  const onChangeState = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAvatarMessage(event.target.value);
    },
    [avatarMessage]
  );

  const addAvatar = async () => {
    if (!file) {
      return;
    }
    const character = new CharacterAPIService();
    await character.addCharacter({
      avatarImg: file,
      avatarName,
      avatarMessage,
    });
  };

  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        {isAlert && <Alert message={alertMessage} />}
        <Styled.Container>
          <Header back />
          <FileUpload setValue={setFile} />
          <Styled.Description>
            <InputBox
              onChange={onChangeName}
              placeholder="캐릭터 이름"
              value={avatarName}
              maxLength={12}
            />
            <TextArea
              onChange={onChangeState}
              value={avatarMessage}
              placeholder="캐릭터 상태 메시지"
              maxLength={30}
            />
          </Styled.Description>

          <CMCFooterBtn
            onclick={async () => {
              if (!avatarName || !file) {
                return;
              }

              await tryLogin({
                socialId: avatarName,
              });

              setTimeout(async () => {
                await addAvatar();
                setTimeout(() => {
                  router.replace("/demo-day/home");
                }, 200);
              }, 200);
            }}
          >
            캐릭터 생성 완료!
          </CMCFooterBtn>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const MakeCharacterStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  Description: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  `,
};

const Styled = MakeCharacterStyled;
