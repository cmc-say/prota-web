import { OnBoardStatus, onBoardState } from "@/app/onboard/store/onBoardStore";
import { Button } from "@/styled/button";
import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";

export const SecondOnBoard: React.FC = () => {
  const [_, setStatus] = useRecoilState(onBoardState);
  const onChoiceClicked = () => {
    setStatus(OnBoardStatus.THIRD);
  };

  return (
    <>
      <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_02}>
        세계관을 유지시키기 위해
        <br /> 체크리스트를 만들어요!
      </Text>
      <RecommenedCheckListContainer>
        <CheckListFormContainer>
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_01}>
            해당 세계관의 추천 체크리스트에요! (선택 가능)
          </Text>
          <ButtonContainer>
            <CheckListButton isSelected={false}>
              <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_BODY_01}>
                혁명 전쟁 대비 힘 키우기 : 근력 운동
              </Text>
            </CheckListButton>
            <CheckListButton isSelected={false}>
              <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_BODY_01}>
                혁명 전쟁 대비 힘 키우기 : 근력 운동
              </Text>
            </CheckListButton>
            <CheckListButton isSelected={false}>
              <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_BODY_01}>
                혁명 전쟁 대비 힘 키우기 : 근력 운동
              </Text>
            </CheckListButton>
          </ButtonContainer>
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_01}>
            직접 체크리스트를 만들어 볼 수 있어요!
          </Text>
          <InputBox
            placeholder="체크리스트를 적어주세요."
            maxLength={20}
          ></InputBox>
        </CheckListFormContainer>
        <MakeCheckListButton>
          <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_CAPTION_01}>
            + 체크리스트 추가하기
          </Text>
        </MakeCheckListButton>
        <BottomButtonContainer>
          <ButtomButton onClick={onChoiceClicked}>
            <Text
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              다음으로
            </Text>
          </ButtomButton>
        </BottomButtonContainer>
      </RecommenedCheckListContainer>
    </>
  );
};

const RecommenedCheckListContainer = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow: auto;
`;
const CheckListFormContainer = styled.div`
  width: 100%;
  margin-top: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const CheckListButton = styled(Button)<{ isSelected: boolean }>`
  margin-top: 8px;
  width: 342px;
  height: 50px;

  background: transparent;

  border: 1px solid ${ColorType.NEUTRAL500};
  border-radius: 999px;
`;

const InputBox = styled.input`
  width: 100%;
  color: white;
  margin-top: 8px;
  height: 50px;
  padding: 10px;
  background: transparent;
  border: 1px solid ${ColorType.NEUTRAL500};
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

const MakeCheckListButton = styled(Button)`
  padding: 8px 14px;
  margin-top: 16px;
  background: transparent;
  width: max-content;
  height: max-content;

  border: 1px dashed ${ColorType.NEUTRAL200};
  border-radius: 32px;
`;

const BottomButtonContainer = styled.div`
  position: absolute;
  width: max-content;
  height: 54px;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 9;
`;

const ButtomButton = styled(Button)`
  width: 342px;
  height: 54px;

  background: ${ColorType.PRIMARY1};
  border-radius: 400px;
`;
