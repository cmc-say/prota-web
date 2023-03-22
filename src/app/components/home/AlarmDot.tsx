import { ColorType } from "@/styled/color.type";
import styled from "@emotion/styled";
import Link from "next/link";

type Props = {
  href: string;
};

export const AlarmDot: React.FC<Props> = ({ href }) => {
  return (
    <Styled.GoAlarm href={href}>
      <Styled.AlarmIcon
        src="/icons/alarm_btn.svg"
        width={20}
        height={25}
        alt="search"
      />
      <Styled.Dot />
    </Styled.GoAlarm>
  );
};

const AlarmStyled = {
  GoAlarm: styled(Link)`
    position: relative;
  `,
  AlarmIcon: styled.img`
    width: 20px;
    height: 25px;
  `,
  Dot: styled.div`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${ColorType.TARTIARY1};
    position: absolute;
    top: 4px;
    right: -1px;
  `,
};

const Styled = AlarmStyled;
