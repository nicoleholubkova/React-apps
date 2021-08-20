import React from "react";
import styled from "styled-components";

interface HeaderProps {
  turn: string;
  counter: number;
}

export class TicTacToeHeader extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <DivWrapper>
        Next player: {this.props.turn}
        <br /> Round nr. {this.props.counter}
      </DivWrapper>
    );
  }
}

const DivWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
  line-height: 2;
`;
