import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

export const CheckBoxForm: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Div>Checklist</Div>
      {children}
    </Container>
  );
};

const Div = styled.div`
  font-family: "Gilroy-Black";
  font-size: 28px;
  line-height: 140%;
  color: #efefef;
`;

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;
