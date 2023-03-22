import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
  question?: string;
};

export const SubFooter: React.FC<Props> = ({ children, question }) => {
  return (
    <Styled.Container>
      {question && (
        <Styled.Message
          color={ColorType.NEUTRAL100}
          type={TextSizeType.KR_CAPTION_01}
        >
          {question}
        </Styled.Message>
      )}
      <Styled.Button>
        <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_BODY_01}>
          {children}
        </Text>
      </Styled.Button>
    </Styled.Container>
  );
};

const SubFooterStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
    bottom: 145px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `,
  Message: styled(Text)``,
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px 8px 24px;
    background: #474e69;
    border-radius: 32px;
    flex: none;
    outline: none;
    border: none;
    order: 1;
  `,
};

const Styled = SubFooterStyled;
