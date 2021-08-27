import { CardGrid } from "./Grid";
import { Helmet } from "react-helmet";
import { Newgame } from "./StartNewGame";
import { themes } from "./Theme";
import { useState } from "react";
import styled from "styled-components";

export interface CardData {
  symbol: CardSymbol;
  revealed: boolean;
  id: number;
  matched: boolean;
}

export interface CardSymbol {
  emoji: string;
}

const symbols = [
  { emoji: "🐶" },
  { emoji: "🐱" },
  { emoji: "🐼" },
  { emoji: "🦁" },
  { emoji: "🐷" },
  { emoji: "🐴" },
  { emoji: "🦓" },
  { emoji: "🐠" },
];

const shuffleArray = (a: any, b: any): number => 0.5 - Math.random();

const prepareCards = (): CardData[] => {
  return symbols
    .concat(symbols)
    .sort(shuffleArray)
    .map((symbol, index) => {
      return {
        symbol: symbol,
        revealed: false,
        id: index,
        matched: false,
      };
    });
};

export const MemoryGameApp = () => {
  const [cards, setCards] = useState(prepareCards());
  const [numberOfSelectedCards, setNumberOfSelectedCards] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);

  const startNewGame = () => {
    setCards(prepareCards());
    setNumberOfSelectedCards(0);
    setMoves(0);
  };

  /**
   * inspiration for game logic: https://github.com/Ronnehag/reactjs-memory-game/blob/master/src/components/GameBoard.js,
   * https://github.com/kurtpetrek/react-memory-game/blob/master/src/MemoryGame.js
   *If they don't match, assign a temporary const to identity which cards need to be closed in case 2 cards were flipped, and call the function to close those 2 cards. In any case, the move number is incremented by one.
   */
  const selectCard = (id: number) => {
    if (numberOfSelectedCards >= 2) return;

    setCards((prevState) => {
      const copy = prevState.map((card) =>
        card.id === id ? { ...card, revealed: true } : card
      );

      const revealed = copy.filter((card) => card.revealed);

      if (revealed.length === 2) {
        if (revealed[0].symbol === revealed[1].symbol) {
          matchCard(revealed[1].symbol);
        }

        setMoves((prevState) => prevState + 1);
        setTimeout(() => unselectAll(), 500);
      }

      return copy;
    });

    setNumberOfSelectedCards((prevState) => prevState + 1);
  };

  // When 2 cards are selected, if their symbol match, assign matched to true and check if game is over.
  const matchCard = (symbol: CardSymbol) => {
    setCards((prevState) => {
      const copy = prevState.map((card) =>
        card.symbol === symbol ? { ...card, matched: true } : card
      );

      // Check if all cards have been matched
      const allCardsMatch = copy.every((card) => card.matched);
      if (allCardsMatch) {
        setTimeout(() => startNewGame(), 800);
      }

      return copy;
    });
  };

  /**
   * If two selected cards doesn't match, this function is called to turn those cards back.
   */
  const unselectAll = () => {
    setCards((prevState) => {
      return prevState.map((card) => ({ ...card, revealed: false }));
    });

    setNumberOfSelectedCards(0);
  };

  return (
    <DivWrapper>
      <Helmet>
        <style>{`body { background-color: ${themes.quaternaryColor}}`}</style>
      </Helmet>
      <H1>Memory game</H1>
      <Newgame startNewGame={startNewGame} moves={moves} />
      <CardGrid cards={cards} selectCard={selectCard} />
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 880px;
  margin: auto;

  @media (max-width: 480px) {
    max-width: 460px;
    margin: auto;
  }
`;

const H1 = styled.h1`
  text-align: ${themes.textAlign};
  font-size: 38px;
  padding-top: 40px;
  color: ${themes.secondaryColor};
  font-family: ${themes.primaryFont};
  margin: 0 auto 20px auto;
`;
