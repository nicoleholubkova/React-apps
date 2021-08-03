import { TicTacToeBoard } from "./TicTacToeBoard";
import { TicTacToeHeader } from "./TicTacToeHeader";
import { inherits } from "util";
import { themes } from "./theme";
import React, { Component } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  font-size: 40px;
  font-family: ${themes.primaryFont};
  margin: 50px 0 30px 0;
`;

const Button = styled.button`
  text-align: center;
  position: relative;
  left: calc(50% - 58px);
  margin: 0 20px 20px 20px;
  padding: 5px 10px;
`;

export interface SquareData {
  value: string;
}

enum OnTurn {
  X = "X",
  O = "O",
}

const BOARD_SIZE = 10;
const SQUARE_COUNT = BOARD_SIZE ** 2;
const FIELD_COUNT_TO_RESET = SQUARE_COUNT - 1;

const app = (Comp: any) =>
  class AppComp extends Component<
    {},
    { turn: OnTurn; squares: SquareData[]; counter: number }
  > {
    createBoard = (): SquareData[] => {
      let squares = Array(SQUARE_COUNT).fill({ value: null });
      return squares;
    };

    init = () => {
      return {
        turn: OnTurn.X,
        squares: this.createBoard(),
        counter: 0,
      };
    };

    state = this.init();

    nextPlayer = (): void => {
      this.setState((prevState) => ({
        turn: prevState.turn === OnTurn.X ? OnTurn.O : OnTurn.X,
        counter: prevState.counter + 1,
      }));
    };

    changeValue = (id: number): void => {
      this.setState((prevState) => ({
        squares: prevState.squares.map((square, index) =>
          id === index ? { ...square, value: prevState.turn } : square
        ),
      }));
    };

    hasValue = (id: number): boolean => {
      return this.state.squares[id].value !== null;
    };

    gameOver = (): void => {
      let emptySq = this.state.squares.filter((sq) => sq.value !== null).length;
      if (emptySq === FIELD_COUNT_TO_RESET) {
        alert("Game Over");
      }
    };

    onClick = (id: number): void => {
      if (this.hasValue(id)) return;
      this.changeValue(id);
      this.nextPlayer();
      this.gameOver();
    };

    resetGame = (): void => {
      this.setState(this.init());
    };

    render() {
      return (
        <Comp
          createBoard={this.createBoard}
          nextPlayer={this.nextPlayer}
          changeValue={this.changeValue}
          hasValue={this.hasValue}
          gameOver={this.gameOver}
          refreshPage={this.resetGame}
          onClick={this.onClick}
          turn={this.state.turn}
          squares={this.state.squares}
          counter={this.state.counter}
        />
      );
    }
  };
export const TicTacToeApp = React.memo(
  app((props) => {
    return (
      <div>
        <H1>Tic Tac Toe</H1>
        <Button onClick={props.refreshPage}>New Game</Button>
        <TicTacToeHeader turn={props.turn} counter={props.counter} />
        <TicTacToeBoard squares={props.squares} onClick={props.onClick} />
      </div>
    );
  })
);
