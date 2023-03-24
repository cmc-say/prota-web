import { WorldCharacter } from "@/app/components/world/WorldCharacter";
import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";

import styled from "@emotion/styled";
import { useState } from "react";

const TextList = [
  {
    text: "벌써 포기인가요?",
    color: ColorType.PRIMARY1,
  },
  {
    text: "아니 아직도?",
    color: ColorType.SECONDARY1,
  },
  {
    text: "쯧",
    color: ColorType.TARTIARY1,
  },
  {
    text: "어디세요ㅠㅠ",
    color: ColorType.SECONDARY1,
  },
  {
    text: "시시해요",
    color: ColorType.TARTIARY1,
  },
  {
    text: "느 려",
    color: ColorType.PRIMARY1,
  },
  {
    text: "그렇게 살래요?",
    color: ColorType.SECONDARY1,
  },
  {
    text: "😆",
    color: ColorType.SECONDARY1,
  },
  {
    text: "뭐해?",
    color: ColorType.TARTIARY1,
  },
  {
    text: "난 했는데.",
    color: ColorType.PRIMARY1,
  },
  {
    text: "지각.",
    color: ColorType.SECONDARY1,
  },
];

export const PopUp = ({
  source,
  name,
  onSuccess,
  onExit,
}: {
  source: string;
  name: string;
  onSuccess: () => void;
  onExit: () => void;
}) => {
  const [selected, setSelected] = useState("");
  return (
    <PopUpStyled.Container>
      <WorldCharacter size={64} src={source} value={name}></WorldCharacter>
      <PopUpStyled.TextHi
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_SUB_HEAD_02}
      >
        해당 캐릭터를 깨워볼까요?
      </PopUpStyled.TextHi>
      <PopUpStyled.WrapContainer>
        {TextList.map((text) => (
          <PopUpStyled.WrapText
            isSelected={text.text === selected}
            color={text.color}
            type={TextSizeType.KR_BODY_01}
            onClick={() => {
              setSelected(text.text);
            }}
          >
            {text.text}
          </PopUpStyled.WrapText>
        ))}
      </PopUpStyled.WrapContainer>
      <TextArea
        onChange={() => {}}
        value=""
        placeholder="직접 메시지를 작성할 수 있어요!"
      ></TextArea>
      <PopUpStyled.ButtonContainer>
        <PopUpStyled.ButtonTwo onClick={onExit}>
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_02}>
            닫기
          </Text>
        </PopUpStyled.ButtonTwo>
        <PopUpStyled.Button onClick={onSuccess}>
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_02}>
            전송
          </Text>
        </PopUpStyled.Button>
      </PopUpStyled.ButtonContainer>
    </PopUpStyled.Container>
  );
};

type Props = {
  value: string;
  maxLength?: number;
  placeholder?: string;
  onChange?: (text: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<Props> = ({
  onChange,
  value,
  maxLength,
  placeholder = "",
}) => {
  return (
    <TextAreaStyled.Container>
      <TextAreaStyled.TextBox
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
      ></TextAreaStyled.TextBox>
      {maxLength && (
        <TextAreaStyled.Count>
          {value.length}/{maxLength}
        </TextAreaStyled.Count>
      )}
    </TextAreaStyled.Container>
  );
};

const TextAreaStyled = {
  Container: styled.div`
    position: relative;
    width: 100%;
    margin-top: 16px;
  `,
  TextBox: styled.textarea`
    width: 100%;
    height: 80px;
    resize: none;
    color: ${ColorType.NEUTRAL00};

    line-height: 140%;
    border: 1px solid ${ColorType.NEUTRAL100};
    padding: 10px;
    border-radius: 8px;
    background: none;
  `,
  Count: styled.span`
    color: ${ColorType.NEUTRAL300};
    font-size: 12px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  `,
};

const PopUpStyled = {
  Container: styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    height: 515px;
    width: 296px;

    display: flex;
    flex-direction: column;
    background-color: ${ColorType.NEUTRAL500};
    align-items: center;
    padding: 24px 16px 16px;
    border-radius: 24px;
  `,
  WrapContainer: styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    background-color: transparent;
    gap: 10px 8px;
  `,
  TextHi: styled(Text)`
    display: block;
    margin: 16px 0px;
  `,
  WrapText: styled(Text)<{ isSelected: boolean }>`
    display: block;
    background-color: ${({ isSelected, color }) => isSelected && color};
    width: max-content;
    text-align: center;
    line-height: 36px;
    padding: 0px 16px;
    height: 36px;

    border: 2px solid ${({ color }) => color};
    border-radius: 40px;

    ${({ isSelected, color }) => isSelected && `color: ${ColorType.NEUTRAL00}`};
  `,
  ButtonContainer: styled.div`
    width: 100%;
    height: 46px;
    margin-top: 16px;
    display: flex;
    align-items: center;
  `,
  Button: styled.button`
    width: 50%;
    height: 46px;
    background: #5960ff;
    border-radius: 32px;
    padding: 10px 13px;

    outline: none;
    border: none;
  `,
  ButtonTwo: styled.button`
    width: 50%;
    height: 46px;
    margin-right: 16px;
    background: #474e69;
    border-radius: 32px;
    padding: 10px 13px;

    outline: none;
    border: none;
  `,
};
