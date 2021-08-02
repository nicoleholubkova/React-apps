import { SquareData } from "./TicTacToeApp";
import { TicTacToeSquare } from "./TicTacToeSquare";
import { isThisTypeNode } from "typescript";
import React from "react";
import styled from "styled-components";

export class TicTacToeBoard extends React.PureComponent<
  {
    squares: SquareData[];
    onClick: (number) => void;
  },
  {}
> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <DivWrapper>
          {this.props.squares.map((square, index) => (
            <TicTacToeSquare
              key={index}
              id={index}
              squareData={square}
              onClick={this.props.onClick}
            />
          ))}
        </DivWrapper>
      </div>
    );
  }
}

const DivWrapper = styled.div`
  margin: 50px auto 100px auto;
  max-width: 532px;
  display: flex;
  flex-wrap: wrap;
`;
