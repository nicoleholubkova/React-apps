import React from "react";
import styled from "styled-components";

export class TicTacToeHeader extends React.Component<{ turn: string }, {}> {
  render() {
    return <DivWrapper>Next player: {this.props.turn} </DivWrapper>;
  }
}

const DivWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;
