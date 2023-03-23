"use client";

import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import { Header } from "../components/header/Header";
import { Text, TextSizeType } from "@/styled/typography";
import { WorldRectBox } from "../components/world/WorldRectBox";
import { ColorType } from "@/styled/color.type";

import { Attainment } from "../components/mypage/Attainment";
import Link from "next/link";
import { useRecoilValueLoadable } from "recoil";
import { AtomAllCharacters } from "../atoms/Character";

export default function MyPage() {
  const characters = useRecoilValueLoadable(AtomAllCharacters);

  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header
            action={
              <Link href={"/mypage/app-setting"}>
                <Styled.SettingIcon
                  src="/icons/setting_btn.svg"
                  alt="setting"
                />
              </Link>
            }
          ></Header>
          <Styled.Attainment>
            <Attainment count={4} src="purple">
              달성 세계관
            </Attainment>
            <Attainment count={4} src="yellow">
              참여 세계관
            </Attainment>
            <Attainment count={0} src="pink">
              내 포인트
            </Attainment>
          </Styled.Attainment>
          <Styled.Title
            type={TextSizeType.KR_HEAD_03}
            color={ColorType.NEUTRAL00}
          >
            내 역대 캐릭터 (
            {characters.state === "hasValue" ? characters.getValue().length : 0}
            )
          </Styled.Title>
          <Styled.GridContainer>
            {characters.state === "hasValue" &&
              characters.getValue().map((character) => (
                <Link href={"/mypage/1/world"}>
                  <WorldRectBox
                    title={character.avatarName}
                    imageSrc={character.avatarImg}
                  ></WorldRectBox>
                </Link>
              ))}
          </Styled.GridContainer>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}
const MyPageStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  Attainment: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 40px;
  `,
  Title: styled(Text)``,
  GridContainer: styled.div`
    width: 100%;
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    flex: 1;
    padding-bottom: 120px;
  `,
  SettingIcon: styled.img`
    width: 19px;
    height: 19px;
  `,
};

const Styled = MyPageStyled;
