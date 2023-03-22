import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import { InputBox } from "../world/InputBox";

export const AddCheckList = () => {
  return (
    <AddCheckListStyled.InfoForm>
      <InputBox
        placeholder="체크리스트를 적어주세요."
        maxLength={20}
        value=""
      />
      <AddCheckListStyled.AddCheckList>
        <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_CAPTION_01}>
          + 체크리스트 추가하기
        </Text>
      </AddCheckListStyled.AddCheckList>
    </AddCheckListStyled.InfoForm>
  );
};

const AddCheckListStyled = {
  InfoForm: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  `,
  AddCheckList: styled.button`
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    padding: 8px 14px;
    border: 1px dashed #6a7395;
    border-radius: 32px;
    width: 135px;
    margin: 0 auto;
    background: none;

    span {
      line-height: normal;
    }
  `,
};
