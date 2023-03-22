import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  count: number;
  src: string;
};

const BASE_PATH = "/icons/mypage_symbol_";

export const Attainment: React.FC<Props> = ({ children, count, src }) => {
  return (
    <Styled.Container>
      <Styled.Relative>
        <Styled.Icon
          width={61}
          height={54}
          src={BASE_PATH + src + ".svg"}
          alt="symbol"
        />
        <Styled.Count
          type={TextSizeType.KR_HEAD_03}
          color={src === "yellow" ? ColorType.NEUTRAL600 : ColorType.NEUTRAL00}
        >
          {count}
        </Styled.Count>
      </Styled.Relative>
      <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_CAPTION_01}>
        {children}
      </Text>
    </Styled.Container>
  );
};

const AttainmentStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
    padding: 0 21px;
  `,
  Relative: styled.div`
    position: relative;
  `,
  Icon: styled(Image)``,
  Count: styled(Text)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

const Styled = AttainmentStyled;
