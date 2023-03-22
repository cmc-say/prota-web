"use client";

import { Header } from "@/app/components/header/Header";
import { FileUpload } from "@/app/components/onboard/FileUpload";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { InputBox } from "@/app/components/world/InputBox";
import { TextArea } from "@/app/components/world/TextArea";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import React from "react";

export default function MakeCharacter() {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back>캐릭터 생성</Header>
          {/* <FileUpload /> */}
          <Styled.Description>
            <InputBox placeholder="캐릭터 이름" value={""} maxLength={6} />
            <TextArea
              value=""
              placeholder="캐릭터 상태 메시지"
              maxLength={30}
            />
          </Styled.Description>
          <FooterBtn>캐릭터 만들기!</FooterBtn>
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
