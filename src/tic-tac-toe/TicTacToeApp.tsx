import { SIGQUIT } from "constants";
import { Themes } from "./theme";
import { TicTacToeBoard } from "./TicTacToeBoard";
import { TicTacToeHeader } from "./TicTacToeHeader";
import { timeStamp } from "console";
import React from "react";
import styled from "styled-components";

export interface SquareData {
  value: string;
}
export class TicTacToeApp extends React.Component<
  {},
  { turn: string; squares: SquareData[]; counter: number }
> {
  constructor(props) {
    super(props);
    this.state = {
      turn: "X",
      squares: this.createBoard(),
      counter: 0,
    };
  }
  createBoard = (): SquareData[] => {
    let squares = Array(100).fill({ value: "" });
    return squares;
  };

  nextPlayer = (): void => {
    this.setState((prevState) => ({
      turn: prevState.turn === "X" ? "O" : "X",
      counter: prevState.counter + 1,
    }));
  };

  changeValue = (id: number): void => {
    this.setState((prevState) => ({
      squares: prevState.squares.map((square, index) =>
        id === index ? { ...square, value: this.state.turn } : square
      ),
    }));
  };

  hasValue = (id: number): boolean => {
    return this.state.squares[id].value !== "";
  };

  gameOver = (): void => {
    let emptySq = this.state.squares.filter((sq) => sq.value !== "").length;
    if (emptySq === 99) {
      alert("Game Over");
    }
  };

  onClick = (id: number): void => {
    if (this.hasValue(id)) return;
    this.nextPlayer();
    this.changeValue(id);
    this.gameOver();
  };

  refreshPage = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <H1>Tic Tac Toe</H1>
        <Button onClick={this.refreshPage}>New Game</Button>
        <TicTacToeHeader turn={this.state.turn} counter={this.state.counter} />
        <TicTacToeBoard squares={this.state.squares} onClick={this.onClick} />
      </div>
    );
  }
}

const H1 = styled.h1`
  text-align: center;
  font-size: 40px;
  font-family: ${Themes.primaryFont};
  margin: 50px 0 30px 0;
`;

const Button = styled.button`
  text-align: center;
  position: relative;
  left: calc(50% - 58px);
  margin: 0 20px 20px 20px;
  padding: 5px 10px;
`;
