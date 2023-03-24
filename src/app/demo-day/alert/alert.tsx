import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Image from "next/image";
export const Alert = ({ message }: { message: string }) => {
  return (
    <AlertStyled.Container>
      <Image
        width={24}
        height={24}
        src={"/static/images/alert_icon.png"}
        alt=""
      ></Image>
      <Text type={TextSizeType.KR_BODY_01} color={ColorType.NEUTRAL00}>
        {message}
      </Text>
    </AlertStyled.Container>
  );
};

const AlertStyled = {
  Container: styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 100px;
    width: 232px;
    display: flex;
    flex-direction: column;
    background-color: ${ColorType.NEUTRAL300};

    justify-content: space-between;
    align-items: center;

    padding: 20px 32px;
    border-radius: 24px;
  `,
};
