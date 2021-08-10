import { CardData } from "./MemoryGameApp";
import { themes } from "./Theme";
import styled from "styled-components";

interface CardProps {
  card: CardData;
  selectCard: (id: number) => void;
}

export const Card = (props: CardProps) => {
  return (
    <DivWrapperCard
      onClick={() => {
        props.selectCard(props.card.id);
      }}
    >
      {props.card.revealed || props.card.matched
        ? props.card.symbol.emoji
        : "❔"}
    </DivWrapperCard>
  );
};
const DivWrapperCard = styled.div`
  flex-basis: calc(25% - 20px);
  height: 111px;
  border: 2px solid ${themes.primaryColor};
  border-radius: 5px;
  margin: 5px 0;
  cursor: pointer;
  background-color: ${themes.primaryColor};
  transition: 0.3s;
  text-align: ${themes.textAlign};
  font-size: 75px;
`;
