"use client";

import { Header } from "@/app/components/header/Header";
import { CheckBoxForm } from "@/app/components/world/CheckBoxForm";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { InputBox } from "@/app/components/world/InputBox";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";

export default function WorldNotice() {
  return (
    <Layout.Wrapper>
      <Layout.Mobile>
        <WorldNoticeStyled.Container>
          <Header back action={<img src="/icons/declaration_btn.svg" />}>
            명화가 살아있다 14
          </Header>
          <WorldNoticeStyled.TextBox />
          <CheckBoxForm>
            <WorldNoticeStyled.EditForm>
              <InputBox
                placeholder="현재 체크리스트 없음"
                value="빨리달리기 연습"
                maxLength={20}
              />
            </WorldNoticeStyled.EditForm>
          </CheckBoxForm>
          <FooterBtn>편집 완료하기!</FooterBtn>
        </WorldNoticeStyled.Container>
      </Layout.Mobile>
    </Layout.Wrapper>
  );
}

const WorldNoticeStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
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
  EditForm: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
