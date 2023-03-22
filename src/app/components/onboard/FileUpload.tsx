"use client";

import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  setValue: (file: File) => void;
};

export const FileUpload: React.FC<Props> = ({ setValue }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<string | ArrayBuffer | null>(null);

  const InputFileUpload = () => {
    if (imgFile) {
      setImgFile(() => null);
    } else {
      inputRef.current?.click();
    }
  };

  const Image = () => {
    if (inputRef.current?.files) {
      const file = inputRef.current?.files[0];
      setValue(file);
      THumbnailImage(file);
    }
  };

  const THumbnailImage = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <Styled.Container onClick={InputFileUpload}>
      {typeof imgFile === "string" ? (
        <Styled.Thumbnail src={imgFile} alt="프로필" />
      ) : (
        <>
          <Styled.Input
            ref={inputRef}
            onChange={Image}
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            alt="image"
          />
          <Styled.FileImg
            src={"/icons/file_image.svg"}
            alt="file_image"
            width={36}
            height={36}
          />
          <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_CAPTION_01}>
            세계관을 대표할 사진이 필요해요!
          </Text>
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_01}>
            대표 사진 추가하기
          </Text>
        </>
      )}
    </Styled.Container>
  );
};

const FileUploadStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 24px;
    height: 200px;
    border: 2px dashed #6a7395;
    border-radius: 8px;
  `,
  FileImg: styled(Image)`
    margin-bottom: 15px;
  `,
  Input: styled.input`
    display: none;
  `,
  Thumbnail: styled.img`
    width: 100%;
  `,
};

const Styled = FileUploadStyled;
