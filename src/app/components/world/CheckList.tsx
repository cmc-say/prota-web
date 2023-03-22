"use client";

import styled from "@emotion/styled";
import { Line } from "./Line";
import Image from "next/image";
import { useState } from "react";

const mockCheckList = {
  statusCode: 200,
  message:
    "캐릭터가 속해있는 특정 세계관에서 오늘 체크한 todo 리스트 조회에 성공했습니다.",
  data: [
    {
      checkedTodoId: null,
      todoContent: "📚(명화 역할) : 8시간 가만히 공부하기",
      todoId: 1,
    },
    {
      checkedTodoId: 1,
      todoContent: "🧘‍♀️(박물관이 살아있다) : 스트레칭하기",
      todoId: 2,
    },
    {
      checkedTodoId: 2,
      todoContent: "🤗(명화 케어) : 매일 선크림 바르기",
      todoId: 3,
    },
    {
      checkedTodoId: 3,
      todoContent: "📚(관객과 소통) : 외국어 공부 2시간하기",
      todoId: 4,
    },
  ],
};

export const CheckList = () => {
  const [data, setData] = useState(mockCheckList.data);
  return (
    <Container>
      {data.map((check, index) => (
        <Line
          check={Boolean(check.checkedTodoId)}
          key={check.todoId}
          detail={
            <Image
              onClick={() =>
                setData((value) =>
                  value.map((_, _index) =>
                    index === _index
                      ? {
                          ..._,
                          checkedTodoId: Boolean(_.checkedTodoId) ? null : 10,
                        }
                      : _
                  )
                )
              }
              width={20}
              height={20}
              src={
                check.checkedTodoId
                  ? "/icons/state_on.svg"
                  : "/icons/state_off.svg"
              }
              alt={"state" + check.todoId}
            />
          }
        >
          {check.todoContent}
        </Line>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
