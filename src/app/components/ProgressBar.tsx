import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

type Props = {
  percent: number;
};

export const ProgressBar: React.FC<Props> = ({ percent }) => {
  return (
    <Container>
      <Background />
      <ProgressText
        color={ColorType.NEUTRAL300}
        type={TextSizeType.KR_CAPTION_01}
        percent={percent}
      >
        {percent}
      </ProgressText>
      <Progress percent={percent} />
    </Container>
  );
};

const ProgressText = styled(Text)<{ percent: number }>`
  position: absolute;
  bottom: -2px;
  left: ${({ percent }) => `calc(${Math.max(percent, 9)}% - 20px)`};
  z-index: 10;
`;

const Container = styled.div`
  height: 14px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 999px;
  transition: width 0.5s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`;

const Progress = styled(BaseBox)<{ percent: number }>`
  background: ${ColorType.SECONDARY1};
  width: ${({ percent }) => percent}%;
  border-radius: ${({ percent }) => 100 - percent}px;
`;
