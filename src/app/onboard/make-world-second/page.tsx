"use client";

import { Header } from "@/app/components/header/Header";
import { Pagination } from "@/app/components/header/Pagination";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { InputBox } from "@/app/components/world/InputBox";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

export default function MakeWorldTwo() {
  return (
    <MakeWorldTwoStyled.LWrapper>
      <Layout.Mobile>
        <MakeWorldTwoStyled.Container>
          <Header back action={<Pagination selectId={2} />} />
          <MakeWorldTwoStyled.Title
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_HEAD_02}
          >
            세계관을 유지시키기 위해
            <br />
            체크리스트를 만들어요!
          </MakeWorldTwoStyled.Title>
          <MakeWorldTwoStyled.InfoForm>
            <InputBox
              placeholder="체크리스트를 적어주세요."
              maxLength={20}
              value=""
            />
            <MakeWorldTwoStyled.AddCheckList>
              <Text
                color={ColorType.NEUTRAL100}
                type={TextSizeType.KR_CAPTION_01}
              >
                + 체크리스트 추가하기
              </Text>
            </MakeWorldTwoStyled.AddCheckList>
          </MakeWorldTwoStyled.InfoForm>
          <FooterBtn href="/onboard/make-recommend-third">다음으로</FooterBtn>
        </MakeWorldTwoStyled.Container>
      </Layout.Mobile>
    </MakeWorldTwoStyled.LWrapper>
  );
}

const MakeWorldTwoStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  Title: styled(Text)`
    margin: 16px 0 0;
  `,
  InfoForm: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    margin-top: 24px;
  `,
  AddCheckList: styled.button`
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    padding: 8px 14px;
    border: 1px dashed #6a7395;
    border-radius: 32px;
    width: 135px;
    margin: 0 auto;
    background: none;
  `,
};
