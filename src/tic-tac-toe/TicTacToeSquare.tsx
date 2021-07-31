import React from "react";
import styled from "styled-components";

const Td = styled.td`
  border: 1px solid black;
  min-width: 50px;
  height: 50px;
  flex-wrap: wrap;
`;

interface SquareProps {
  handleClick: () => void;
  value: string;
}

export class TicTacToeSquare extends React.Component<SquareProps, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Td></Td>
      </div>
    );
  }
}
