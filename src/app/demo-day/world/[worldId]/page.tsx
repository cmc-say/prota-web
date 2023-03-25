"use client";

import { AtomAllCharacters } from "@/app/atoms/Character";
import { AtomWorldDetail } from "@/app/atoms/world";
import { Header } from "@/app/components/header/Header";
import { WorldCharacter } from "@/app/components/world/WorldCharacter";
import CharacterAPIService from "@/networks/characterAPIService";

import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from "recoil";
import { CMCFooterBtn } from "../../footerBtn/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function WorldDetail({ params: { worldId } }: any) {
  const router = useRouter();
  const characters = useRecoilValueLoadable(AtomAllCharacters);
  const worldDetail = useRecoilValueLoadable(AtomWorldDetail(worldId));
  const refresh = useRecoilRefresher_UNSTABLE(AtomWorldDetail(worldId));

  const worldIn = async () => {
    const service = new CharacterAPIService();
    const res = await service.participateToWorld({
      worldId,
      avatarId: characters.getValue()[0].avatarId,
    });

    if (res.statusCode === 201) {
      refresh();
      router.back();
    }
  };

  if (worldDetail.state === "hasValue") {
    return (
      <LWrapper>
        <Layout.Mobile>
          <Container>
            <Header back>{worldDetail.getValue().world.worldName}</Header>
            <SubHeader>
              <Link href={`/demo-day/world/${worldId}/notice`}>
                <Text
                  color={ColorType.NEUTRAL00}
                  type={TextSizeType.KR_BODY_01}
                >
                  공지사항 & 체크리스트 확인
                </Text>
              </Link>
            </SubHeader>
            <Date color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_03}>
              {/* {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
                worldDetail.getValue().world.worldStartDate
              )} */}
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
          {worldId !== "21" ? (
            <CMCFooterBtn disabled>이 세계관은 이용할 수 없어요.</CMCFooterBtn>
          ) : worldDetail.getValue().isMember ? (
            <CMCFooterBtn disabled>이미 참여중인 세계관이에요!</CMCFooterBtn>
          ) : (
            <CMCFooterBtn onclick={worldIn}>
              이 세계관에 참여할래요!
            </CMCFooterBtn>
          )}
        </Layout.Mobile>
      </LWrapper>
    );
  } else {
    return <></>;
  }
}

const WorldDetailStyled = {};

const LWrapper = styled(Layout.Wrapper)`
  overflow-y: scroll;
`;

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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 26px;
  row-gap: 13px;

  /* flex-wrap: wrap; */
`;
