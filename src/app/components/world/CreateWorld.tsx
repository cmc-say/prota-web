import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Link from "next/link";

export const CreateWorld = () => {
  return (
    <>
      <Container>
        <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_CAPTION_01}>
          원하는 세계관이 없나요? 직접 만들어봐요!
        </Text>
        <Link href={"/world/create-world-first"}>
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_01}>
            + 직접 세계관을 만들래요~!
          </Text>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  gap: 8px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed #6a7395;
  border-radius: 16px;
`;
