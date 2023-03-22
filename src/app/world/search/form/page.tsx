"use client";

import {
  AtomPopularHashtagSelector,
  AtomSearchKeyword,
  AtomSearchWorldSelector,
} from "@/app/atoms/world";
import { Header } from "@/app/components/header/Header";
import { Search } from "@/app/components/world/Search";
import { TagIcon } from "@/app/components/world/TagIcon";
import { WorldCard } from "@/app/components/world/WorldCard";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const tagColor = [
  {
    color: ColorType.NEUTRAL00,
    background: ColorType.PRIMARY1,
  },
  {
    color: ColorType.NEUTRAL600,
    background: ColorType.SECONDARY1,
  },
  {
    color: ColorType.NEUTRAL00,
    background: ColorType.TARTIARY1,
  },
  {
    color: ColorType.NEUTRAL00,
    background: ColorType.PRIMARY1,
  },
  {
    color: ColorType.NEUTRAL600,
    background: ColorType.SECONDARY1,
  },
];

export default function SearchWorld() {
  const popularHashtag = useRecoilValue(AtomPopularHashtagSelector);
  const [search, setSearch] = useState("");
  const searchWorld = useSetRecoilState(AtomSearchKeyword);
  const searchWorldData = useRecoilValue(AtomSearchWorldSelector);

  useMemo(() => {
    if (!search) searchWorld("");
  }, [search]);

  const onSearchEvent = () => {
    searchWorld(search);
  };

  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header search back>
            <Search
              submit={onSearchEvent}
              value={search}
              onChange={setSearch}
            />
          </Header>
          {searchWorldData.length ? (
            <Styled.WorldList>
              {searchWorldData.map((item) => (
                <WorldCard key={item.worldId} data={item} />
              ))}
            </Styled.WorldList>
          ) : (
            <>
              <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_03}>
                #실시간 인기 해시태그
              </Text>
              <Styled.TagList>
                {popularHashtag.map((item, index) => (
                  <TagIcon
                    key={index}
                    item={{ ...item, ...tagColor[index % 5] }}
                  />
                ))}
              </Styled.TagList>
            </>
          )}
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const SearchWorldStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TagList: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    margin-top: 16px;
    align-items: center;
  `,
  WorldList: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  `,
};

const Styled = SearchWorldStyled;
