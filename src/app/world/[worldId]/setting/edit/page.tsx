"use client";

import { Header } from "@/app/components/header/Header";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { InputBox } from "@/app/components/world/InputBox";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

export default function WorldInfo() {
  const [name, setName] = useState("adawde");
  const [hashTag, setHashTag] = useState("asdasd");
  const [password, setPassword] = useState("");
  return (
    <Layout.Wrapper>
      <Layout.Mobile>
        <Layout.FlexColumn>
          <Container>
            <Header></Header>
            <div style={{ width: "100%", height: "144px" }}>
              <WorldImg fill src={"/images/world_img.png"} alt="world_img" />
            </div>
            <BoxForm>
              <InputBox
                placeholder="현재 세계관 이름 없음"
                onChange={setName}
                value={name}
                label="세계관 이름"
                maxLength={15}
              />
              <InputBox
                placeholder="현재 헤시태그 없음"
                onChange={setHashTag}
                value={hashTag}
                label="해시태그"
                maxLength={20}
              />
              <InputBox
                placeholder="현재 비밀번호 없음"
                onChange={setPassword}
                value={password}
                label="비밀번호 설정"
              />
            </BoxForm>
            <FooterBtn>편집 완료하기</FooterBtn>
          </Container>
        </Layout.FlexColumn>
      </Layout.Mobile>
    </Layout.Wrapper>
  );
}

const Container = styled.div`
  padding: 24px;
`;

const WorldImg = styled(Image)`
  width: 100%;
  position: relative !important;
`;

const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 40px;
`;
