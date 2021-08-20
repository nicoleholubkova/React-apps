import { SquareData } from "./TicTacToeApp";
import { TicTacToeSquare } from "./TicTacToeSquare";
import React from "react";
import styled from "styled-components";

interface BoardProps {
  squares: SquareData[];
  onClick: (number) => void;
}

export class TicTacToeBoard extends React.PureComponent<BoardProps, {}> {
  constructor(props: BoardProps) {
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
  max-width: 540px;
  display: flex;
  flex-wrap: wrap;
`;
