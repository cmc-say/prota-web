import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  subTitle?: string | false;
  error?: boolean;
  children: React.ReactNode;
  isBack?: boolean;
  popStack?: number;
  href?: string;
  onclick?: () => Promise<void>;
  disabled?: boolean;
};

export const CMCFooterBtn: React.FC<Props> = ({
  subTitle,
  error = false,
  children,
  onclick,
  disabled = false,
}) => {
  const [isKeyUp, setKeyUp] = useState<boolean>(false);

  const detectResize = () => {
    let width = window.innerWidth || document.body.clientWidth;
    let height = window.innerHeight || document.body.clientHeight;

    if (Math.max(0.8, height / screen.height) === 0.8) {
      setKeyUp(true);
    } else {
      setKeyUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", detectResize);
    document.addEventListener("resize", detectResize);
    return () => {
      window.removeEventListener("resize", detectResize);
      document.removeEventListener("resize", detectResize);
    };
  }, []);

  const router = useRouter();
  return (
    <>
      {!isKeyUp && (
        <Footer>
          {subTitle && (
            <SubTitle
              color={error ? ColorType.ERROR : ColorType.NEUTRAL100}
              type={TextSizeType.KR_CAPTION_01}
            >
              {subTitle}
            </SubTitle>
          )}
          <Button disabled={disabled} onClick={onclick}>
            <Text
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              {children}
            </Text>
          </Button>
        </Footer>
      )}
    </>
  );
};

const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
`;

const SubTitle = styled(Text)``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 28px;
  gap: 10px;

  width: 342px;
  height: 54px;

  background: #5960ff;
  border-radius: 400px;
  border: none;

  &:disabled {
    background: ${ColorType.NEUTRAL300};
    span {
      color: ${ColorType.NEUTRAL100};
    }
  }
`;
