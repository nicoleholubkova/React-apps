import { SquareData } from "./TicTacToeApp";
import { themes } from "./theme";
import React from "react";
import styled from "styled-components";
interface SquareProps {
  squareData: SquareData;
  id: number;
  onClick: (number) => void;
}

export class TicTacToeSquare extends React.Component<SquareProps, {}> {
  onClick = (event: React.FormEvent<HTMLDivElement>) => {
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <DivWrapper onClick={(event) => this.onClick(event)}>
        {this.props.squareData.value}
      </DivWrapper>
    );
  }
}

const DivWrapper = styled.div`
  border: 2px solid ${themes.secondaryColor};
  background-color: ${themes.quinaryColor};
  color: ${themes.tertiaryColor};
  min-width: 50px;
  height: 50px;
  text-align: ${themes.textAlign};
  font-size: 30px;
`;
