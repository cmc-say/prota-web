import React from "react";
import styled from "@emotion/styled";
import { Text, TextSizeType } from "@/styled/typography";
import { ColorType } from "@/styled/color.type";
import Image from "next/image";

interface WorldBoxProps {
  imageSrc: string;
  title: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const WorldRectBox: React.FC<WorldBoxProps> = ({
  imageSrc,
  title,
  onClick,
  isSelected,
}) => {
  return (
    <Styled.Container onClick={onClick}>
      {imageSrc ? (
        <Styled.WorldBox
          isSelected={isSelected ? true : false}
          src={imageSrc}
          alt="box"
          width={160}
          height={160}
        />
      ) : (
        <Styled.NoneBox />
      )}

      <WorldRectBoxStyled.Wrapper></WorldRectBoxStyled.Wrapper>
      <Styled.WorldText
        color={isSelected ? ColorType.SECONDARY1 : ColorType.NEUTRAL00}
        type={TextSizeType.KR_HEAD_03}
      >
        {title}
      </Styled.WorldText>
    </Styled.Container>
  );
};

const WorldRectBoxStyled = {
  Container: styled.div`
    width: 160px;
    height: 160px;
    position: relative;
    user-select: none;
  `,
  Wrapper: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    border-radius: 16px;
    user-select: none;
    background-color: ${ColorType.NEUTRAL500};
    z-index: 10;
    opacity: 0.3;
  `,
  WorldBox: styled(Image)<{ isSelected: boolean }>`
    border-radius: 16px;
    ${({ isSelected }) => {
      return (
        isSelected &&
        `
        border : 1px solid ${ColorType.SECONDARY1} !important;
      `
      );
    }}
  `,
  NoneBox: styled.div`
    background-color: ${ColorType.NEUTRAL500};
    width: 160px;
    height: 160px;
    border-radius: 16px;
  `,
  WorldText: styled(Text)`
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  `,
};

const Styled = WorldRectBoxStyled;
