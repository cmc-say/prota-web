"use client";

import styled from "@emotion/styled";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import { css } from "@emotion/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { ColorType } from "@/styled/color.type";
import { useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { Header } from "@/app/components/header/Header";
import { Toggle } from "@/app/components/home/Toggle";
import { AtomAllCharacters } from "@/app/atoms/Character";
import { CharacterCard } from "@/app/components/home/CharacterCard";
import { ProgressBar } from "@/app/components/ProgressBar";
import { CheckListCard } from "@/app/components/home/CheckListCard";
import { CMCFooterBtn } from "../footerBtn/button";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const characters = useRecoilValueLoadable(AtomAllCharacters);
  const router = useRouter();

  const [isToggleOn, setToggleState] = useState(true);
  const [index, setIndex] = useState(0);
  const handleToggleContainerClick = () => {
    setToggleState((prev) => !prev);
  };

  const goWorld = async () => {
    router.push("/demo-day/search");
  };

  const [isClicked, setIsClicked] = useState(false);
  const characterCardClicked = () => {
    setToggleState((prev) => !prev);
  };
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header />
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
                    <SwiperSlide
                      onClick={() => setToggleState((prev) => !prev)}
                      key={avatar.avatarName}
                    >
                      <CharacterCard
                        index={index + 1}
                        characterId={avatar.avatarId}
                        imageSrc={avatar.avatarImg}
                        characterName={avatar.avatarName}
                        characterDescription={avatar.avatarMessage}
                      ></CharacterCard>
                    </SwiperSlide>
                  ))}
              </Swiper>
              {/* {characters.state === "hasValue" &&
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
                )} */}
            </>
          ) : (
            characters.state === "hasValue" && (
              <CheckListCard
                index={0}
                characterId={characters.getValue().at(0)?.avatarId ?? 0}
                imageSrc="/static/images/meta_mock.png"
                characterName={characters.getValue().at(0)?.avatarName ?? ""}
                characterDescription={
                  characters.getValue().at(0)?.avatarMessage ?? ""
                }
                onClick={characterCardClicked}
              ></CheckListCard>
            )
          )}
          {isToggleOn && (
            <CMCFooterBtn onclick={goWorld}>세계관으로 갈래요!</CMCFooterBtn>
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
  `,
};

const Styled = HomeStyled;

const GraphText = styled(Text)`
  display: inline-block;
  width: 286px;
`;
