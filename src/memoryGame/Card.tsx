import { CardData } from "./MemoryGameApp";
import styled from "styled-components";

interface CardProps {
  card: CardData;
  selectCard: (id: number) => void;
}

export const Card = (props: CardProps) => {
  // const selectCard = () => {
  //   props.selectCard(props.card.id);
  //   // eslint-disable-next-line no-console
  //   console.log(props.card.id);
  // };
  return (
    <DivWrapperCard
      onClick={() => {
        props.selectCard(props.card.id);
      }}
    >
      {props.card.selected || props.card.matched
        ? props.card.symbol.emoji
        : "❔"}
    </DivWrapperCard>
  );
};
const DivWrapperCard = styled.div`
  flex-basis: calc(25% - 20px);
  height: 111px;
  border: 2px solid #575a5e;
  border-radius: 5px;
  margin: 5px 0;
  cursor: pointer;
  background-color: #575a5e;
  transition: 0.3s background-color linear;
  text-align: center;
  font-size: 75px;
`;
