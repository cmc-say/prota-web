import { alarmMock } from "@/app/mocks/homeMocks";
import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Image from "next/image";

export const Alarm = () => {
  return (
    <Styled.Container>
      {alarmMock.map((alarm) => (
        <Styled.RowContainer>
          <Styled.Dot />
          <Styled.Profile
            src={alarm.source}
            alt="profile"
            width={32}
            height={32}
          />

          <Styled.Description
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_BODY_01}
          >
            {alarm.content}
          </Styled.Description>
          <Styled.Date
            color={ColorType.NEUTRAL200}
            type={TextSizeType.KR_CAPTION_02}
          >
            {alarm.date}
          </Styled.Date>
        </Styled.RowContainer>
      ))}
    </Styled.Container>
  );
};

const AlarmStyled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  `,
  RowContainer: styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
  `,
  Dot: styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${ColorType.TARTIARY1};
    margin-right: 4px;
  `,
  Profile: styled(Image)`
    margin-right: 6px;
    border-radius: 999px;
  `,
  Description: styled(Text)`
    flex: 1 1 0;
    margin-right: 8px;
  `,
  Date: styled(Text)``,
};

const Styled = AlarmStyled;
