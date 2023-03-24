import { GetWorldListRes, World } from "@/networks/network";
import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";

type MCard = {
  data: World;
};

export const WorldCard: React.FC<MCard> = ({ data }) => {
  const router = useRouter();

  return (
    <div style={{ position: "relative" }}>
      <CardWrapper
        onClick={() => router.push(`/demo-day/world/${data.worldId}`)}
      >
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
        <div style={{ position: "absolute", bottom: "40px", right: "40px" }}>
          <Center>
            <CardBottomImage
              style={{ width: "250px", height: "200px", zIndex: 3 }}
              src={"/icons/imgmap.png"}
              alt="imgmap"
            />
            <CardBottomImage
              style={{
                aspectRatio: "1 / 1",
                zIndex: 4,
                width: "100px",
                height: "100px",
              }}
              src={data.worldImg}
              alt="word_card_image"
            />
          </Center>
        </div>
      </CardWrapper>
      <DDay>
        <Image src={"/icons/d_day.svg"} width={110} height={62} alt="d_day" />
        <DDayText color={ColorType.SECONDARY1} type={TextSizeType.KR_HEAD_03}>
          D-
          {(new Date(data.worldEndDate).getTime() -
            new Date(data.worldStartDate).getTime()) /
            (1000 * 60 * 60 * 24)}
        </DDayText>
      </DDay>
    </div>
  );
};

const Center = styled.div`
  /* width: 250px; */
  /* height: 200px; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBottomImage = styled.img`
  box-sizing: content-box;
  position: absolute;
  /* bottom: 10px;
  right: 10px; */
  border-radius: 50%;
  /* overflow: hidden; */
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
  overflow: hidden;
`;
