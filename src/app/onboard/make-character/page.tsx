"use client";

import { Header } from "@/app/components/header/Header";
import { FileUpload } from "@/app/components/onboard/FileUpload";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { InputBox } from "@/app/components/world/InputBox";
import { TextArea } from "@/app/components/world/TextArea";
import CharacterAPIService from "@/networks/characterAPIService";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";

export default function MakeCharacterOnBoard() {
  const [file, setFile] = useState<File>();
  const [avatarName, setAvatarName] = useState("");
  const [avatarMessage, setAvatarMessage] = useState("");

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
    const character = new CharacterAPIService();
    const res = await character.addCharacter({
      file,
      avatarName,
      avatarMessage,
    });
    console.log(res);
  };

  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back />
          <FileUpload setValue={setFile} />
          <Styled.Description>
            <InputBox
              onChange={onChangeName}
              placeholder="캐릭터 이름"
              value={avatarName}
              maxLength={6}
            />
            <TextArea
              onChange={onChangeState}
              value={avatarMessage}
              placeholder="캐릭터 상태 메시지"
              maxLength={30}
            />
          </Styled.Description>
          <button onClick={addAvatar}>추가</button>
          <FooterBtn popStack={4} href="/home">
            캐릭터 생성 완료!
          </FooterBtn>
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
