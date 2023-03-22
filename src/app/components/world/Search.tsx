"use client";

import { ColorType } from "@/styled/color.type";
import styled from "@emotion/styled";

type Props = {
  onChange: (value: string) => void;
  value: string;
  submit: () => void;
};

export const Search: React.FC<Props> = ({ onChange, value, submit }) => {
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  return (
    <Styled.Container>
      <Styled.BlackIcon src="/icons/black_search_btn.svg" alt="black_search" />
      <Styled.SearchInput
        type="search"
        value={value}
        onKeyDown={handleOnKeyPress}
        onSubmit={() => console.log("?")}
        onChange={(e) => onChange(e.target.value)}
        placeholder="검색어를 입력해 보세요~!"
      />
    </Styled.Container>
  );
};

const SearchStyled = {
  Container: styled.div`
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    gap: 4px;
    background: ${ColorType.NEUTRAL500};
    border-radius: 32px;
    margin-left: 16px;
  `,
  BlackIcon: styled.img``,
  SearchInput: styled.input`
    flex: 1 1 auto;
    background: none;
    border: none;
    color: ${ColorType.NEUTRAL00};
    outline: none;
  `,
};

const Styled = SearchStyled;
