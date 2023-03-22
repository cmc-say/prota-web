"use client";

import styled from "@emotion/styled";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import { CharacterCard } from "../components/home/CharacterCard";
import { css } from "@emotion/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "./swiper.add.css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { ColorType } from "@/styled/color.type";
import { useState } from "react";
import { Theme } from "@/styled/theme";
import { Toggle } from "../components/home/Toggle";
import { CheckListCard } from "../components/home/CheckListCard";
import { useRecoilState } from "recoil";
import { onBoardState } from "../onboard/store/onBoardStore";
import { TopBar } from "../components/onboard/TopBar";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/header/Header";
import Link from "next/link";
import { AlarmDot } from "../components/home/AlarmDot";
import { AvatarMock } from "../mocks/homeMocks";

export const EmptyCharacterCard = () => {
  return (
    <CardCard>
      <FDiv>
        <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_CAPTION_01}>
          캐릭터를 직접 만들어봐요!
        </Text>
        <Text color={ColorType.NEUTRAL200} type={TextSizeType.KR_SUB_HEAD_01}>
          + 캐릭터를 추가할래요~!
        </Text>
      </FDiv>
    </CardCard>
  );
};

const CardCard = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;

  width: 290px;
  height: 404px;

  border: 2px dashed #6a7395;
  border-radius: 16px;

  flex: none;
  order: 3;
  flex-grow: 0;
`;

const FDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function HomePage() {
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
                {AvatarMock.map((avater, index) => (
                  <SwiperSlide key={avater.avatarName}>
                    <CharacterCard
                      index={index + 1}
                      imageSrc={avater.source}
                      characterName={avater.avatarName}
                      characterDescription={avater.avatarDescription}
                    ></CharacterCard>
                  </SwiperSlide>
                ))}
                <SwiperSlide>
                  <EmptyCharacterCard></EmptyCharacterCard>
                </SwiperSlide>
              </Swiper>
              {index < AvatarMock.length && (
                <Styled.ProgressForm>
                  <GraphText
                    color={ColorType.NEUTRAL00}
                    type={TextSizeType.KR_SUB_HEAD_01}
                  >
                    캐릭터 과몰입 그래프
                  </GraphText>
                  <ProgressBar percent={AvatarMock[index].progressNumber} />
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

const ProgressText = styled(Text)<{ percent: number }>`
  position: absolute;
  bottom: -4px;
  left: ${({ percent }) => `calc(${Math.max(percent, 9)}% - 20px)`};
  z-index: 10;
`;

const Container = styled.div`
  margin: 8px auto 0px;

  height: 14px;
  width: 286px;
  box-sizing: border-box;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 999px;
  transition: width 1s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`;

const Progress = styled(BaseBox)<{ percent: number }>`
  background: ${ColorType.SECONDARY1};
  width: ${({ percent }) => percent}%;
`;
