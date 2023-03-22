"use client";

import { Header } from "@/app/components/header/Header";
import { FileUpload } from "@/app/components/onboard/FileUpload";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { InputBox } from "@/app/components/world/InputBox";
import { TextArea } from "@/app/components/world/TextArea";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import Link from "next/link";

import React from "react";

export default function HomeCharacterEdit() {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back action={<img src="/icons/delete_btn.svg" />}>
            캐릭터 수정
          </Header>
          <FileUpload setValue={() => {}} />
          <Styled.Description>
            <InputBox placeholder="캐릭터 이름" value={""} maxLength={6} />
            <TextArea
              value=""
              placeholder="캐릭터 상태 메시지"
              maxLength={30}
            />
          </Styled.Description>
          <FooterBtn isBack={true}>캐릭터 수정하기!</FooterBtn>
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
