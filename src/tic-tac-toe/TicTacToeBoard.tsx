import { TicTacToeSquare } from "./TicTacToeSquare";
import React from "react";
import styled from "styled-components";

export class TicTacToeBoard extends React.Component<
  { board: any[]; nextPlayer: () => void },
  {}
> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <DivWrapper>
          {this.props.board.map((board, index) => [
            <TicTacToeSquare
              key={index}
              value={board}
              nextPlayer={this.props.nextPlayer}
            />,
          ])}
        </DivWrapper>
      </div>
    );
  }
}

const DivWrapper = styled.div`
  margin: 50px auto 100px auto;
  max-width: 516px;
  display: flex;
  flex-wrap: wrap;
`;
