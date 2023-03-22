import styled from "@emotion/styled";
import { ColorType } from "./color.type";
import { css } from "@emotion/react";

export enum TextSizeType {
  KR_HEAD_01 = "kr/head_01",
  KR_HEAD_02 = "kr/head_02",
  KR_HEAD_03 = "kr/head_03",
  KR_SUB_HEAD_01 = "kr/sub_head_01",
  KR_SUB_HEAD_02 = "kr/sub_head_02",
  KR_BODY_01 = "kr/body_01",
  KR_CAPTION_01 = "kr/caption_01",
  KR_CAPTION_02 = "kr/caption_02",
}

interface TextProps {
  color: ColorType[keyof ColorType];
  type: TextSizeType[keyof TextSizeType];
}

export const Text = styled.span<TextProps>`
  color: ${(props) => props.color};
  font-family: "Pretendard";

  ${(props) => {
    switch (props.type) {
      case TextSizeType.KR_HEAD_01:
        return css`
          font-weight: 700;
          font-size: 32px;
          line-height: 140%;
        `;
      case TextSizeType.KR_HEAD_02:
        return css`
          font-weight: 700;
          font-size: 24px;
          line-height: 140%;
        `;
      case TextSizeType.KR_HEAD_03:
        return css`
          font-weight: 700;
          font-size: 18px;
          line-height: 160%;
        `;
      case TextSizeType.KR_SUB_HEAD_01:
        return css`
          font-weight: 600;
          font-size: 16px;
          line-height: 160%;
        `;
      case TextSizeType.KR_SUB_HEAD_02:
        return css`
          font-weight: 700;
          font-size: 14px;
          line-height: 160%;
        `;
      case TextSizeType.KR_BODY_01:
        return css`
          font-weight: 500;
          font-size: 14px;
          line-height: 140%;
        `;
      case TextSizeType.KR_CAPTION_01:
        return css`
          font-weight: 600;
          font-size: 12px;
          line-height: 140%;
        `;
      case TextSizeType.KR_CAPTION_02:
        return css`
          font-weight: 500;
          font-size: 12px;
          line-height: 140%;
        `;
      default:
        return css`
          font-weight: 500;
          font-size: 14px;
          line-height: 140%;
        `;
    }
  }};
`;
