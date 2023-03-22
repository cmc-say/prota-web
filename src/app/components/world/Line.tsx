import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

type Props = {
  check?: boolean;
  children: React.ReactNode;
  detail: React.ReactNode;
};

export const Line: React.FC<Props> = ({ check = false, children, detail }) => {
  return (
    <Container>
      <Text
        color={check ? ColorType.NEUTRAL00 : ColorType.NEUTRAL200}
        type={TextSizeType.KR_BODY_01}
      >
        {children}
      </Text>
      <Detail color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_01}>
        {detail}
      </Detail>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Detail = styled(Text)``;
