import styled from "@emotion/styled";
import { Line } from "./Line";
import { Text, TextSizeType } from "@/styled/typography";
import { ColorType } from "@/styled/color.type";

export const WorldInfo = () => {
  return (
    <Container>
      <Line detail="명화가 살아있다">세계관 이름</Line>
      <Line
        detail={
          <>
            <DDay
              color={ColorType.SECONDARY1}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              D-20
            </DDay>
            &nbsp;2023.01.27 - 02.27
          </>
        }
      >
        기간
      </Line>
      <Line detail="#명화">해시태그</Line>
      <Line detail={"14/16"}>모집 인원</Line>
      <Line detail="대머리">세계관 리더</Line>
      {/* <Line detail={}>세계관 알림</Line> */}
      <Line detail="공개">공개여부</Line>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 40px;
`;

const DDay = styled(Text)`
  margin-right: 14px;
`;
