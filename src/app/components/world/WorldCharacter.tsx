"use client";

import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

type Props = {
  onClick?: () => void;
  isSelected?: boolean;
  src: string;
  value: string;
  size?: number;
};

export const WorldCharacter: React.FC<Props> = ({
  isSelected = false,
  src,
  value,
  size = 44,
  ...props
}) => {
  return (
    <>
      <WorldCharacterStyled.Container {...props}>
        <WorldCharacterStyled.Icon
          select={isSelected.toString()}
          width={size}
          height={size}
          alt={value}
          src={src}
        />
        <Text
          color={isSelected ? ColorType.SECONDARY1 : ColorType.NEUTRAL00}
          type={TextSizeType.KR_CAPTION_01}
        >
          {value}
        </Text>
      </WorldCharacterStyled.Container>
    </>
  );
};

const WorldCharacterStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    align-items: center;
    row-gap: 4px;
  `,
  Icon: styled.img<{ select: string }>`
    border-radius: 50%;
    ${(props) =>
      props.select === "true" && `border: 2px solid ${ColorType.SECONDARY1}`}
  `,
};
