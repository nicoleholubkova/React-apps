import { Card } from "./Card";
import { CardData } from "./MemoryGameApp";
import styled from "styled-components";

interface CardGridProps {
  cards: CardData[];
  selectCard: (id: number) => void;
}

export const CardGrid = (props: CardGridProps) => {
  return (
    <DivWrapperCardGrid>
      {props.cards.map((card, index) => (
        <Card key={index} card={card} selectCard={props.selectCard} />
      ))}
    </DivWrapperCardGrid>
  );
};

const DivWrapperCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto auto 33px auto;
  justify-content: space-around;
  padding: 0 5px;
  max-width: 650px;
`;
