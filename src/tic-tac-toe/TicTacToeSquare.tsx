import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  border: 1px solid black;
  min-width: 50px;
  height: 50px;
  text-align: center;
  font-size: 30px;
`;

interface SquareProps {
  value: string;
  nextPlayer: () => void;
}

export class TicTacToeSquare extends React.Component<SquareProps, {}> {
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    this.props.nextPlayer();
  };

  render() {
    return <DivWrapper onClick={this.onClick}>{this.props.value}</DivWrapper>;
  }
}
