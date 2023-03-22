import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

const DOT_COUNT = [1, 2, 3];

type Props = {
  selectId: number;
};

export const Pagination: React.FC<Props> = ({ selectId }) => {
  return (
    <Styled.Container>
      {DOT_COUNT.map((item, index) => (
        <Styled.Dot key={index} select={item === selectId}>
          {item}
        </Styled.Dot>
      ))}
    </Styled.Container>
  );
};

const PaginationStyled = {
  Container: styled.div`
    display: flex;
    column-gap: 4px;
  `,
  Dot: styled.div<{ select: boolean }>`
    font-size: 12px;
    width: 24px;
    height: 24px;
    font-weight: 600;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${ColorType.NEUTRAL00};
    background: ${(props) => (props.select ? ColorType.PRIMARY1 : "none")};
  `,
};

const Styled = PaginationStyled;
