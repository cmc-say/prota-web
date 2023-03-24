"use client";

import { AtomWorldDetail } from "@/app/atoms/world";
import { Header } from "@/app/components/header/Header";
import { CheckBoxForm } from "@/app/components/world/CheckBoxForm";
import { CheckList } from "@/app/components/world/CheckList";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import { useRecoilValueLoadable } from "recoil";

export default function WorldNotice({ params: { worldId } }: any) {
  const worldDetail = useRecoilValueLoadable(AtomWorldDetail(worldId));

  if (worldDetail.state === "hasValue") {
    return (
      <WorldNoticeStyled.LWrapper>
        <Layout.Mobile>
          <WorldNoticeStyled.Container>
            <Header back>
              {worldDetail.getValue().world.worldName} &nbsp;
              {worldDetail.getValue().world.worldAvatars.length}
            </Header>
            <WorldNoticeStyled.TextBox
              value={worldDetail.getValue().world.worldNotice}
            />
            <CheckBoxForm>
              <CheckList todos={worldDetail.getValue().world.todos} />
            </CheckBoxForm>
            {/* <FooterBtn
              href="/world/1/word-today"
              subTitle="세계관 체크리스트를 모두 완료했어요, 캐릭터 몰입에 한 걸음!"
            >
              오늘의 한 마디 작성할래요!
            </FooterBtn> */}
          </WorldNoticeStyled.Container>
        </Layout.Mobile>
      </WorldNoticeStyled.LWrapper>
    );
  } else {
    return <></>;
  }
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
