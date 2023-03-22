"use client";
import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

type Props = {
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: string;
  maxLength?: number;
  placeholder: string;
};

export const InputBox: React.FC<Props> = ({
  onChange,
  label,
  value,
  maxLength,
  placeholder,
}) => {
  return (
    <InputForm>
      {label && (
        <Label color={ColorType.NEUTRAL200} type={TextSizeType.KR_BODY_01}>
          {label}
        </Label>
      )}
      <Relative>
        <Input placeholder={placeholder} value={value} onChange={onChange} />
        {maxLength && (
          <TextLength
            type={TextSizeType.KR_BODY_01}
            color={ColorType.NEUTRAL300}
          >
            {value.length}/{maxLength}
          </TextLength>
        )}
      </Relative>
    </InputForm>
  );
};

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Relative = styled.div`
  position: relative;
`;

const TextLength = styled(Text)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
`;

const Input = styled.input`
  box-sizing: border-box;

  align-items: center;
  padding: 10px;
  isolation: isolate;

  width: 100%;
  height: 50px;

  border: 1px solid #2f354a;
  color: ${ColorType.NEUTRAL00};
  border-radius: 8px;

  flex: none;
  order: 1;
  flex-grow: 0;

  background: none;
`;

const Label = styled(Text)``;
