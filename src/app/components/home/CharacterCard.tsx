import { ColorType, OpacityHex } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CharacterCardProps {
  imageSrc: string;
  characterName: string;
  characterDescription: string;
  index: number;
}

const ColorIndex: Record<number, string> = {
  0: "#6500c3",
  1: ColorType.TARTIARY2,
  2: "#006851",
};

export const CharacterCard: React.FC<CharacterCardProps> = ({
  imageSrc,
  characterName,
  characterDescription,
  index,
}) => {
  return (
    <CardContainer index={index - 1} imageSrc={imageSrc}>
      <TextWrapper.IndexedText
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_CAPTION_01}
      >
        캐릭터 0{index}
      </TextWrapper.IndexedText>
      <TextWrapper.NameText
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_HEAD_01}
      >
        {characterName}
      </TextWrapper.NameText>
      <TextWrapper.DescriptionText
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_SUB_HEAD_02}
      >
        {characterDescription}
      </TextWrapper.DescriptionText>

      <TextWrapper.RouteText
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_CAPTION_01}
      >
        세계관으로 이동 {`>`}
      </TextWrapper.RouteText>
      <Link href={"/home/1/edit"}>
        <CardEditContainer>
          <Image height={24} width={24} src={"/images/edit_icon.png"} alt="" />
        </CardEditContainer>
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled.div<{ imageSrc: string; index: number }>`
  margin: auto;
  position: relative;
  width: 290px;
  height: 404px;
  border-radius: 16px;
  padding: 30px 28px;

  background: ${({ imageSrc, index }) =>
    `url(${imageSrc}), no-repeat linear-gradient(360deg, ${ColorIndex[index]} 0%, rgba(255, 255, 255, 0) 100%)`};
  background-size: cover;
  background-color: #ffffff;
  background-blend-mode: multiply;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const TextWrapper = {
  IndexedText: styled(Text)`
    border-radius: 999px;
    display: inline-block;
    padding: 2px 12px;
    width: max-content;
    background-color: ${ColorType.NEUTRAL600 + OpacityHex["50%"]};
  `,
  NameText: styled(Text)`
    margin-top: 8px;
  `,
  DescriptionText: styled(Text)`
    margin-top: 4px;
  `,
  RouteText: styled(Text)`
    margin-top: 42px;
  `,
};

const CardEditContainer = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -12px;
  bottom: -12px;
`;
