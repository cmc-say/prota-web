"use client";

import styled from "@emotion/styled";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import {
  CharacterCard,
  EmptyCharacterCard,
} from "../components/home/CharacterCard";
import { css } from "@emotion/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { ColorType } from "@/styled/color.type";
import { Suspense, useState } from "react";
import { Toggle } from "../components/home/Toggle";
import { CheckListCard } from "../components/home/CheckListCard";
import { useRecoilValueLoadable } from "recoil";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/header/Header";

import { AlarmDot } from "../components/home/AlarmDot";
import { AtomAllCharacters } from "../atoms/Character";

export default function HomePage() {
  const characters = useRecoilValueLoadable(AtomAllCharacters);
  const [isToggleOn, setToggleState] = useState(true);
  const [index, setIndex] = useState(0);
  const handleToggleContainerClick = () => {
    setToggleState((prev) => !prev);
  };

  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header action={<AlarmDot href="/home/alarm" />} />
          <div onClick={handleToggleContainerClick}>
            <Toggle initialOnOff={isToggleOn}></Toggle>
          </div>

          {isToggleOn ? (
            <>
              <Swiper
                modules={[Pagination]}
                className={css`
                  width: 100%;
                `}
                pagination={{ clickable: true }}
                direction="horizontal"
                spaceBetween={0}
                slidesPerView={1.02}
                onSlideChange={(e) => {
                  setIndex(e.activeIndex);
                }}
              >
                {characters.state === "hasValue" &&
                  characters.getValue().length &&
                  characters.getValue().map((avatar, index) => (
                    <SwiperSlide key={avatar.avatarName}>
                      <CharacterCard
                        index={index + 1}
                        imageSrc={avatar.avatarImg}
                        characterName={avatar.avatarName}
                        characterDescription={avatar.avatarMessage}
                      ></CharacterCard>
                    </SwiperSlide>
                  ))}
                <SwiperSlide>
                  <EmptyCharacterCard></EmptyCharacterCard>
                </SwiperSlide>
              </Swiper>
              {characters.state === "hasValue" &&
                index < characters.getValue().length && (
                  <Styled.ProgressForm>
                    <GraphText
                      color={ColorType.NEUTRAL00}
                      type={TextSizeType.KR_SUB_HEAD_01}
                    >
                      캐릭터 과몰입 그래프
                    </GraphText>
                    <ProgressBar percent={0} />
                  </Styled.ProgressForm>
                )}
            </>
          ) : (
            <CheckListCard
              index={1}
              imageSrc="/images/meta_mock.png"
              characterName="메타몽"
              characterDescription="다음 생엔 돌로 태어나야지"
            ></CheckListCard>
          )}
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const HomeStyled = {
  LWrapper: styled(Layout.Wrapper)``,
  Container: styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
  `,
  ProgressForm: styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px auto 0px;
    row-gap: 8px;
  `,
  GraphText: styled(Text)`
    display: inline-block;
    /* width: 286px; */
  `,
};

const Styled = HomeStyled;

const GraphText = styled(Text)`
  display: inline-block;
  width: 286px;
`;
