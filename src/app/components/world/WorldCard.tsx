import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";

type MCard = {
  data: {
    worldId: number;
    worldName: string;
    worldUserLimit: number;
    worldImg: string;
    worldStartDate: string;
    worldEndDate: string;
    hashtags: {
      worldHashtagId: number;
      hashtagId: number;
      hashtagName: string;
    }[];
    worldHostUserId: number;
    worldNotice: string;
    worldPassword: string;
    worldAvatars: {
      worldAvatarId: number;
      worldId: number;
      avatarId: number;
    }[];
  };
};

export const WorldCard: React.FC<MCard> = ({ data }) => {
  const router = useRouter();

  return (
    <CardWrapper onClick={() => router.push(`world/${data.worldId}`)}>
      <DDay>
        <Image src={"/icons/d_day.svg"} width={110} height={62} alt="d_day" />
        <DDayText color={ColorType.SECONDARY1} type={TextSizeType.KR_HEAD_03}>
          D-21
        </DDayText>
      </DDay>
      <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_CAPTION_01}>
        방 인원 {data.worldAvatars.length}명
      </Text>
      <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_02}>
        {data.worldName}
      </Text>
      <HashTagList>
        {data.hashtags.map((item) => (
          <Text
            key={item.hashtagId}
            color={ColorType.NEUTRAL100}
            type={TextSizeType.KR_CAPTION_01}
          >
            #{item.hashtagName}&nbsp;
          </Text>
        ))}
      </HashTagList>
      <CardBottomImage
        src={data.worldImg}
        width={211}
        height={160}
        alt="word_card_image"
      />
    </CardWrapper>
  );
};

const CardBottomImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const DDayText = styled(Text)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DDay = styled.div`
  position: absolute;
  top: -10px;
  right: -25px;
`;

const HashTagList = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  height: 186px;
  width: 100%;
  padding: 14px;
  background: ${ColorType.NEUTRAL300};
  border-radius: 16px;
`;
