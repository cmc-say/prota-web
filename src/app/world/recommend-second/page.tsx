"use client";

import { Header } from "@/app/components/header/Header";
import { Pagination } from "@/app/components/header/Pagination";
import { FileUpload } from "@/app/components/onboard/FileUpload";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { InputBox } from "@/app/components/world/InputBox";
import { SubFooter } from "@/app/components/world/SubFooter";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

export default function RecommendSecond() {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back action={<Pagination selectId={1} />} />
          <Styled.Title
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_HEAD_02}
          >
            세계관 상태를 설정해야해요.
          </Styled.Title>
          <FileUpload setValue={() => {}} />
          <Styled.InfoForm>
            <InputBox placeholder="제목 입력" value="" maxLength={15} />
            <InputBox
              placeholder="비밀번호 설정 (선택 사항, 설정 시 비공개 방 생성)"
              value=""
            />
          </Styled.InfoForm>
          <SubFooter question="어떤 세계관을 해야할 지 모르겠나요?">
            세계관 추천 받기 &gt;
          </SubFooter>
          <FooterBtn href="/world/recommend-third">다음으로</FooterBtn>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const RecommendSecondStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  Title: styled(Text)`
    margin: 16px 0 24px;
  `,
  InfoForm: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  `,
};

const Styled = RecommendSecondStyled;
