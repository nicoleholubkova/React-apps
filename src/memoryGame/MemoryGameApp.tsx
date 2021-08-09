import { CardGrid } from "./Grid";
import { Helmet } from "react-helmet";
import React, { Component } from "react";
import styled from "styled-components";

interface NewGameProps {
  startNewGame: () => void;
}

export interface MemoryState {
  id: number;
  cardState: number;
  backgroundColor: string;
}

const Newgame = (props: NewGameProps) => {
  return <Button onClick={props.startNewGame}>Start New Game</Button>;
};

export class MemoryGameApp extends Component<
  {},
  { cards: MemoryState[]; secondClick: boolean }
> {
  constructor(props) {
    super(props);
    const CardState = {
      hiding: 0,
      showing: 1,
      matching: 2,
    };
    let cards = [
      { id: 0, cardState: CardState.hiding, backgroundColor: "red" },
      { id: 1, cardState: CardState.hiding, backgroundColor: "red" },
      { id: 2, cardState: CardState.hiding, backgroundColor: "navy" },
      { id: 3, cardState: CardState.hiding, backgroundColor: "navy" },
      { id: 4, cardState: CardState.hiding, backgroundColor: "green" },
      { id: 5, cardState: CardState.hiding, backgroundColor: "green" },
      { id: 6, cardState: CardState.hiding, backgroundColor: "yellow" },
      { id: 7, cardState: CardState.hiding, backgroundColor: "yellow" },
      { id: 8, cardState: CardState.hiding, backgroundColor: "black" },
      { id: 9, cardState: CardState.hiding, backgroundColor: "black" },
      { id: 10, cardState: CardState.hiding, backgroundColor: "purple" },
      { id: 11, cardState: CardState.hiding, backgroundColor: "purple" },
      { id: 12, cardState: CardState.hiding, backgroundColor: "pink" },
      { id: 13, cardState: CardState.hiding, backgroundColor: "pink" },
      { id: 14, cardState: CardState.hiding, backgroundColor: "lightskyblue" },
      { id: 15, cardState: CardState.hiding, backgroundColor: "lightskyblue" },
    ];

    cards = this.shuffle(cards);
    this.state = { cards, secondClick: false };
  }

  shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

  startNewGame = () => {
    const cards = [...this.state.cards];
    cards.map((card) => {
      return { ...card, cardState: 0 };
    });
    this.setState({ cards });
  };
  onClick = (id: number) => {
    const showingCards = this.state.cards.map((card) => {
      if (card.id === id) {
        return { ...card, cardState: 1 };
      }
      return card;
    });
    const { secondClick } = this.state;

    const showingCardsIds = showingCards
      .filter((card) => card.cardState === 1)
      .map((card) => card.id);

    const card1 = showingCards.filter((card) => card.id === showingCardsIds[0]);
    const card1color = card1[0].backgroundColor;

    if (secondClick) {
      const card2 = showingCards.filter(
        (card) => card.id === showingCardsIds[1]
      );
      const card2color = card2[0].backgroundColor;
      if (card1color === card2color) {
        const matchedCards = showingCards.map((card) =>
          showingCardsIds.includes(card.id) ? { ...card, cardState: 2 } : card
        );
        this.setState({ cards: matchedCards, secondClick: false });
        return;
      } else if (card1color !== card2color) {
        const notMatchedCards = showingCards.map((card) =>
          showingCardsIds.includes(card.id) ? { ...card, cardState: 0 } : card
        );
        this.setState({ cards: showingCards }, () =>
          setTimeout(
            () => this.setState({ cards: notMatchedCards, secondClick: false }),
            300
          )
        );
        return;
      }
    }
    this.setState({ cards: showingCards, secondClick: true });
  };

  render() {
    return (
      <div>
        <Helmet>
          <style>{"body { background-color: #F4F7F5}"}</style>
        </Helmet>
        <H1>Memory game</H1>
        <Newgame startNewGame={this.startNewGame} />
        <CardGrid onClick={this.onClick} cards={this.state.cards} />
      </div>
    );
  }
}

const H1 = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin: 40px;
  color: #222823;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 0 20px 40%;
`;
