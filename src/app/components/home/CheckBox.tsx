import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

function Checkbox({ text, isSelected }: { text: string; isSelected: boolean }) {
  return (
    <>
      <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_SUB_HEAD_01}>
        {text}
      </Text>
      <StyledInput isSelected={isSelected}>
        {isSelected && (
          <StyledImage
            width={10}
            height={9}
            src={"/images/check_png.png"}
            alt="check"
          ></StyledImage>
        )}
      </StyledInput>
    </>
  );
}

export default Checkbox;

const StyledInput = styled.div<{ isSelected: boolean }>`
  height: 20px;
  width: 20px;
  background-color: ${({ isSelected }) =>
    isSelected ? ColorType.SECONDARY1 : ColorType.NEUTRAL200};
  border-radius: 2px;

  display: flex;
`;

const StyledImage = styled(Image)`
  margin: auto;
`;
