import { SquareData } from "./TicTacToeApp";
import { Themes } from "./theme";
import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  border: 2px solid white;
  background-color: ${Themes.primaryColor};
  color: ${Themes.secondaryColor};
  min-width: 50px;
  height: 50px;
  text-align: center;
  font-size: 30px;
`;

interface SquareProps {
  squareData: SquareData;
  id: number;
  onClick: (number) => void;
}

export class TicTacToeSquare extends React.Component<SquareProps, {}> {
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <DivWrapper onClick={this.onClick}>
        {this.props.squareData.value}
      </DivWrapper>
    );
  }
}
