import { TicTacToeBoard } from "./TicTacToeBoard";
import { TicTacToeHeader } from "./TicTacToeHeader";
import { checkAll } from "./WinLogic";
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

export enum OnTurn {
  X = "X",
  O = "O",
}

const BOARD_SIZE = 10;
const SQUARE_COUNT = BOARD_SIZE ** 2;

const app = (Comp: any) =>
  class AppComp extends Component<
    {},
    { turn: OnTurn; squares: SquareData[]; counter: number; finish: boolean }
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
        finish: false,
      };
    };

    state = this.init();

    nextPlayer = (): void => {
      this.isFieldDepleted();
      let somebodyHasWon = checkAll(this.state.turn, this.state.squares);
      if (somebodyHasWon) {
        this.setState(() => ({
          finish: true,
        }));
        alert(`
          Player ${this.state.turn} has won.
        `);
      }

      this.setState((prevState) => ({
        turn: prevState.turn === OnTurn.X ? OnTurn.O : OnTurn.X,
        counter: prevState.counter + 1,
      }));
    };

    hasValue = (id: number): boolean => {
      return this.state.squares[id].value !== null;
    };

    isFieldDepleted = (): void => {
      let emptySq = this.state.squares.filter((sq) => sq.value !== null).length;
      if (emptySq === SQUARE_COUNT) {
        alert("Game Over");
      }
    };

    onClick = (id: number): void => {
      if (this.hasValue(id)) return;

      if (this.state.finish) {
        return;
      }
      this.setState(
        (prevState) => ({
          squares: prevState.squares.map((square, index) =>
            id === index ? { ...square, value: prevState.turn } : square
          ),
        }),
        () => {
          this.nextPlayer();
        }
      );
    };

    resetGame = (): void => {
      this.setState(this.init());
    };

    render() {
      return (
        <Comp
          resetGame={this.resetGame}
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
        <Button onClick={props.resetGame}>New Game</Button>
        <TicTacToeHeader turn={props.turn} counter={props.counter} />
        <TicTacToeBoard squares={props.squares} onClick={props.onClick} />
      </div>
    );
  })
);
