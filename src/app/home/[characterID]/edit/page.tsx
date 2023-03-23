"use client";

import { AtomCharacterDetail } from "@/app/atoms/Character";
import { Header } from "@/app/components/header/Header";
import { FileUpload } from "@/app/components/onboard/FileUpload";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { InputBox } from "@/app/components/world/InputBox";
import { TextArea } from "@/app/components/world/TextArea";
import CharacterAPIService from "@/networks/characterAPIService";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilValueLoadable } from "recoil";

type Props = {
  params: {
    characterID: number;
  };
};

export default function HomeCharacterEdit({ params: { characterID } }: Props) {
  const characterDetail = useRecoilValueLoadable(
    AtomCharacterDetail(characterID)
  );
  const [file, setFile] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [avatarName, setAvatarName] = useState("");
  const [avatarMessage, setAvatarMessage] = useState("");

  useMemo(() => {
    if (characterDetail.state === "hasValue") {
      setThumbnail(characterDetail.getValue().avatarImg);
      setAvatarName(characterDetail.getValue().avatarName);
      setAvatarMessage(characterDetail.getValue().avatarMessage);
    }
  }, [characterDetail.state]);

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

  const editAvatar = async () => {
    const character = new CharacterAPIService();

    if (file) {
      await character.updateCharacterImg({
        avatarId: characterID,
        file,
      });
    }
    await character.editCharacterInfo({
      avatarId: characterID,
      avatarName,
      avatarMessage,
    });
  };

  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back action={<img src="/icons/delete_btn.svg" />}>
            캐릭터 수정
          </Header>
          <FileUpload value={thumbnail} setValue={setFile} />
          <Styled.Description>
            <InputBox
              placeholder="캐릭터 이름"
              onChange={onChangeName}
              value={avatarName}
              maxLength={6}
            />
            <TextArea
              value={avatarMessage}
              onChange={onChangeState}
              placeholder="캐릭터 상태 메시지"
              maxLength={30}
            />
          </Styled.Description>
          <FooterBtn onclick={editAvatar} isBack={true}>
            캐릭터 수정하기!
          </FooterBtn>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const HomeCharacterEditStyled = {
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

const Styled = HomeCharacterEditStyled;
