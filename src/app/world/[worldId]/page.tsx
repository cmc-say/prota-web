"use client";

import { AtomWorldDetail } from "@/app/atoms/world";
import { Header } from "@/app/components/header/Header";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { WorldCharacter } from "@/app/components/world/WorldCharacter";
import { avatarMocks } from "@/app/mocks/avatar_mock";
import { AvatarMock } from "@/app/mocks/homeMocks";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import { useRecoilValueLoadable } from "recoil";

export default function WorldDetail({ params: { worldId } }: any) {
  const worldDetail = useRecoilValueLoadable(AtomWorldDetail(worldId));

  console.log(worldDetail);

  if (worldDetail.state === "hasValue") {
    return (
      <Layout.Wrapper>
        <Layout.Mobile>
          <Container>
            <Header back action={<img src="/icons/declaration_btn.svg" />}>
              {worldDetail.getValue().world.worldName}
            </Header>
            <SubHeader>
              <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_BODY_01}>
                공지사항 & 체크리스트 확인
              </Text>
            </SubHeader>
            <Date color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_03}>
              {worldDetail.getValue().world.worldStartDate}
            </Date>
            <div></div>
            <CheckListCharacter>
              {worldDetail.getValue().members.map((avatar) => (
                <WorldCharacter
                  size={66}
                  src={avatar.avatarImg}
                  value={avatar.avatarName}
                />
              ))}
            </CheckListCharacter>
          </Container>
          {worldDetail.getValue().isMember ? (
            <FooterBtn>이미 참여중인 세계관이에요!</FooterBtn>
          ) : (
            <FooterBtn href={"/world/1/word-today"}>
              이 세계관에 참여할래요!
            </FooterBtn>
          )}
        </Layout.Mobile>
      </Layout.Wrapper>
    );
  } else {
    return <></>;
  }
}

const WorldDetailStyled = {};

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Date = styled(Text)`
  margin: 16px 0;
`;

const SubHeader = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 19px;

  width: 342px;
  height: 40px;

  background: #474e69;
  border-radius: 200px;
  border: none;
`;

const CheckListCharacter = styled.div`
  display: flex;
  column-gap: 26px;
  row-gap: 13px;

  flex-wrap: wrap;
`;
