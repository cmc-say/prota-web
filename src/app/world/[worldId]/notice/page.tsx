"use client";

import { Header } from "@/app/components/header/Header";
import { CheckBoxForm } from "@/app/components/world/CheckBoxForm";
import { CheckList } from "@/app/components/world/CheckList";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";

export default function WorldNotice() {
  return (
    <WorldNoticeStyled.LWrapper>
      <Layout.Mobile>
        <WorldNoticeStyled.Container>
          <Header back action={<img src="/icons/declaration_btn.svg" />}>
            명화가 살아있다 14
          </Header>
          <WorldNoticeStyled.TextBox />
          <CheckBoxForm>
            <CheckList />
          </CheckBoxForm>
          <FooterBtn href="/world/1/word-today" subTitle="세계관 체크리스트를 모두 완료했어요, 캐릭터 몰입에 한 걸음!">
            오늘의 한 마디 작성할래요!
          </FooterBtn>
        </WorldNoticeStyled.Container>
      </Layout.Mobile>
    </WorldNoticeStyled.LWrapper>
  );
}

const WorldNoticeStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
  `,
  TextBox: styled.textarea`
    width: 100%;
    height: 144px;
    resize: none;
    color: #efefef;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    border: 1px solid #cbff2e;
    padding: 10px;
    border-radius: 8px;
    background: none;

    &:focus {
      border: 1px solid #cbff2e;
    }
  `,
};
