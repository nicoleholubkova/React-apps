import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
  line-height: 2;
`;
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
