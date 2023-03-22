"use client";

import { Header } from "@/app/components/header/Header";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { WorldCharacter } from "@/app/components/world/WorldCharacter";
import { avatarMocks } from "@/app/mocks/avatar_mock";
import { AvatarMock } from "@/app/mocks/homeMocks";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

export default function WorldDetail() {
  return (
    <Layout.Wrapper>
      <Layout.Mobile>
        <Container>
          <Header back action={<img src="/icons/declaration_btn.svg" />}>
            명화가 살아있다 14
          </Header>
          <SubHeader>
            <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_BODY_01}>
              공지사항 & 체크리스트 확인
            </Text>
          </SubHeader>
          <Date color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_03}>
            23.03.19
          </Date>
          <div></div>
          <CheckListCharacter>
            {avatarMocks.map((avatar) => (
              <WorldCharacter
                size={66}
                src={avatar.source}
                value={avatar.name}
              />
            ))}
          </CheckListCharacter>
        </Container>
        <FooterBtn
          href="/world/1/word-today"
          subTitle="체크리스트를 완료하고, 오늘의 한 마디를 작성하세요!"
        >
          오늘의 한 마디 작성할래요!
        </FooterBtn>
      </Layout.Mobile>
    </Layout.Wrapper>
  );
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
