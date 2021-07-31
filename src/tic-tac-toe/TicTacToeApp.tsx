import { TicTacToeBoard } from "./TicTacToeBoard";
import { TicTacToeHeader } from "./TicTacToeHeader";
import React from "react";
import styled from "styled-components";

interface Square {
  value: string;
}

export class TicTacToeApp extends React.Component<
  {},
  { turn: string; board: any }
> {
  constructor(props) {
    super(props);
    this.state = {
      turn: "X",
      board: this.createBoard(),
    };
  }

  createBoard = () => {
    let board = Array(100).fill("");
    return board;
  };

  nextPlayer = (): void => {
    this.setState((prevState) => ({
      turn: prevState.turn === "X" ? "O" : "X",
    }));
  };

  render() {
    return (
      <div>
        <H1>Tic Tac Toe</H1>
        <TicTacToeHeader turn={this.state.turn} />
        <TicTacToeBoard board={this.state.board} nextPlayer={this.nextPlayer} />
      </div>
    );
  }
}

const H1 = styled.h1`
  text-align: center;
  font-size: 40px;
  font-family: "Impact", fantasy;
  margin: 50px 0 30px 0;
`;
