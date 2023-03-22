"use client";

import { Header } from "@/app/components/header/Header";
import { Alarm } from "@/app/components/home/Alram";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import { useState } from "react";

export default function HomeAlarm() {
  const [alarmList, setAlarmList] = useState([]);
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back>알림</Header>
          <Styled.AlarmForm>
            <Alarm />
          </Styled.AlarmForm>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const HomeAlarmStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  AlarmForm: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 18px;
  `,
};

const Styled = HomeAlarmStyled;
