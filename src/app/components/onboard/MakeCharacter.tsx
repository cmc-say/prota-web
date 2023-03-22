import { Button } from "@/styled/button";
import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import React from "react";

export const MakeCharacterOnBoard: React.FC = () => {
  return (
    <>
      <RecommenedCheckListContainer>
        <CheckListFormContainer>
          <ButtonContainer>
            <InputBox type="file" accept="image/png,iamge/jpeg"></InputBox>
            <InputBox
              placeholder="캐릭터 이름"
              name="hihi"
              id="hihi"
            ></InputBox>
          </ButtonContainer>
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_01}>
            짧게 설명하는 해시태그를 만들어주세요!
          </Text>
          <textarea name="hihi" id="hihi" cols={30} rows={10}></textarea>
        </CheckListFormContainer>
        <BottomButtonContainer>
          <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_CAPTION_01}>
            세계관을 만들 준비가 끝났나요?
          </Text>
          <ButtomButton>
            <Text
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              이제 캐릭터를 만들어봐요!
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 79px;
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
