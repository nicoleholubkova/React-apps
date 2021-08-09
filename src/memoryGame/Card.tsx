import styled from "styled-components";

interface CardProps {
  click: () => void;
  showing: any;
  backgroundColor: string;
}

export const Card = (props: CardProps) => {
  let style = {};
  if (props.showing)
    style = { backgroundColor: props.backgroundColor, pointerEvents: "none" };
  return <DivWrapperCard onClick={props.click} style={style} />;
};

const DivWrapperCard = styled.div`
  flex-basis: calc(25% - 20px);
  height: 111px;
  border: 2px solid #575a5e;
  border-radius: 5px;
  margin: 5px 0;
  cursor: pointer;
  background-color: #a7a2a9;
  transition: 0.3s background-color linear;
`;
