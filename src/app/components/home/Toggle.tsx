import styled from "@emotion/styled";
import React, { useState } from "react";
import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import { css } from "@emotion/react";

interface ToggleProps {
  toggleOnTitle?: string;
  toggleOffTitle?: string;
  initialOnOff?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  toggleOnTitle: defaultOn = "내 캐릭터",
  toggleOffTitle: defaultOff = "체크리스트",
  initialOnOff: defaultIsToggleOn = true,
}) => {
  return (
    <ToggleContainer>
      <ToggleBackground isSelected={defaultIsToggleOn}></ToggleBackground>
      <ToggleItem>
        <Text
          color={defaultIsToggleOn ? ColorType.NEUTRAL00 : ColorType.NEUTRAL100}
          type={TextSizeType.KR_SUB_HEAD_02}
        >
          {defaultOn}
        </Text>
      </ToggleItem>
      <ToggleItem>
        <Text
          color={
            !defaultIsToggleOn ? ColorType.NEUTRAL00 : ColorType.NEUTRAL100
          }
          type={TextSizeType.KR_SUB_HEAD_02}
        >
          {defaultOff}
        </Text>
      </ToggleItem>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  margin: 8px auto 12px;
  width: 162px;
  height: 38px;
  position: relative;

  background-color: ${ColorType.NEUTRAL500};
  border-radius: 999px;
  display: flex;
  padding: 4px 5px;
`;

const ToggleBackground = styled.div<{ isSelected: boolean }>`
  position: absolute;
  width: 76px;
  height: 30px;
  border-radius: 999px;
  background: ${ColorType.PRIMARY1};
  transition: 0.3s;

  left: 5px;
  ${({ isSelected }) => {
    if (isSelected) {
      return css`
        transform: translate(0px, 0px);
      `;
    } else {
      return css`
        transform: translate(76px, 0px);
      `;
    }
  }}
`;

const ToggleItem = styled.div`
  z-index: 9;
  width: 76px;
  height: 30px;
  border-radius: 999px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
