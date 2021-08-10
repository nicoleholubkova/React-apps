import { CardGrid } from "./Grid";
import { Helmet } from "react-helmet";
import { Newgame } from "./StartNewGame";
import { useState } from "react";
import styled from "styled-components";

export interface CardData {
  symbol: Symbol;
  selected: boolean;
  id: number;
  matched: boolean;
}

export interface Symbol {
  id: number;
  emoji: string;
}

const symbols = [
  { id: 1, emoji: "🐶" },
  { id: 2, emoji: "🐱" },
  { id: 3, emoji: "🐼" },
  { id: 4, emoji: "🦁" },
  { id: 5, emoji: "🐷" },
  { id: 6, emoji: "🐴" },
  { id: 7, emoji: "🦓" },
  { id: 8, emoji: "🐠" },
];

const prepareCards = (): CardData[] => {
  return symbols
    .concat(symbols)
    .sort((a, b) => 0.5 - Math.random())
    .map((symbol, index) => {
      return {
        symbol: symbol,
        selected: false,
        matched: false,
        id: index,
      };
    });
};

export const MemoryGameApp = () => {
  const [cards, setCards] = useState(prepareCards());
  const [numberOfSelectedCard, setNumberOfSelectedCard] = useState(0);
  const [moves, setMoves] = useState(0);

  const startNewGame = () => {
    setCards(prepareCards());
    setNumberOfSelectedCard(0);
    setMoves(0);
  };

  /**
   * inspiration for game logic: https://github.com/Ronnehag/reactjs-memory-game/blob/master/src/components/GameBoard.js, https://github.com/kurtpetrek/react-memory-game/blob/master/src/MemoryGame.js
   * When 2 cards are selected, if their symbol match, assign cleared to true and check if game is over. If they don't match, assign a temporary const to identity which cards need to be closed in case 2 cards were flipped, and call the function to close those 2 cards. In any case, the move number is incremented by one.
   */

  const selectCard = (id: number) => {
    if (numberOfSelectedCard >= 2) return;
    setCards((prevState) => {
      const copy = prevState.map((card) => {
        if (card.id === id) {
          return { ...card, selected: true };
        }
        return card;
      });

      const selected = copy.filter((card) => card.selected);
      if (selected.length >= 2) {
        // found match ? clear it :
        if (selected[0].symbol === selected[1].symbol)
          matchCard(selected[0].symbol);
        setMoves((prevState) => prevState + 1);
        setTimeout(() => unselectAll(), 500);
      }

      return copy;
    });
    setNumberOfSelectedCard((prevState) => prevState + 1);
  };

  const matchCard = (symbol: Symbol) => {
    setCards((prevState) => {
      const copy = prevState.map((card) => {
        if (card.symbol === symbol) {
          return { ...card, cleared: true };
        }
        return card;
      });

      /**
       * Check if all the couples have been matched
       */
      const allCardsMatch = copy.filter((card) => !card.matched).length <= 0;
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
      return prevState.map((card) => {
        return { ...card, selected: false };
      });
    });
    setNumberOfSelectedCard(0);
  };

  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #F4F7F5}"}</style>
      </Helmet>
      <H1>Memory game</H1>
      <Newgame startNewGame={startNewGame} moves={moves} />
      <CardGrid cards={cards} selectCard={selectCard} />
    </div>
  );
};

const H1 = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin: 30px;
  color: #08090a;
`;
