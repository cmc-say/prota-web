"use client";

import { Header } from "@/app/components/header/Header";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { WorldInfo } from "@/app/components/world/WorldInfo";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import Image from "next/image";

export default function WorldSetting() {
  const item = false;
  return (
    <Layout.Wrapper>
      <Layout.Mobile>
        <Layout.FlexColumn>
          <Container>
            <Header></Header>
            <div style={{ width: "100%", height: "144px" }}>
              <WorldImg fill src={"/images/world_img.png"} alt="world_img" />
            </div>
            <WorldInfo></WorldInfo>
            <FooterBtn
              error={item}
              subTitle={
                item &&
                "잠깐만요, 세계관 리더가 방을 나가면 세계관이 사라집니다...."
              }
            >
              이 컨셉 그만헐래요!
            </FooterBtn>
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
