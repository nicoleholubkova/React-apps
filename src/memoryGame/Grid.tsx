import { Card } from "./Card";
import { MemoryState } from "./MemoryGameApp";
import styled from "styled-components";

interface CardGridProps {
  cards: MemoryState[];
  onClick: (id: number) => void;
}

export const CardGrid = (props: CardGridProps) => {
  const cards = props.cards.map((card) => (
    <Card
      key={card.id}
      backgroundColor={card.backgroundColor}
      showing={card.cardState}
      click={() => props.onClick(card.id)}
    />
  ));

  return <DivWrapperCardGrid>{cards}</DivWrapperCardGrid>;
};

const DivWrapperCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-around;
  padding: 0 5px;
  max-width: 650px;
`;
