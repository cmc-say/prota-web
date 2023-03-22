import { Hashtag } from "@/networks/network";
import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

type Props = {
  item: Hashtag & {
    background: string;
    color: string;
  };
};

export const TagIcon: React.FC<Props> = ({
  item: { worldHashtagId, hashtagId, hashtagName, background, color },
}) => {
  return (
    <TagIconStyled.Container color={background}>
      <Text color={color} type={TextSizeType.KR_BODY_01}>
        {hashtagName}
      </Text>
    </TagIconStyled.Container>
  );
};

const TagIconStyled = {
  Container: styled.div`
    padding: 8px 16px;
    width: fit-content;
    background-color: ${(props) => props.color};
    border-radius: 40px;
  `,
};
