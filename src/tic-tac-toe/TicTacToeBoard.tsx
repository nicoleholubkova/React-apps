import { TicTacToeSquare } from "./TicTacToeSquare";
import React from "react";
import styled from "styled-components";

export class TicTacToeBoard extends React.Component<
  { fields: any[]; handleClick: () => void },
  {}
> {
  constructor(props) {
    super(props);
  }
  render() {
    // const doBr = (index) => {
    //   return (index + 1) % 10 === 0;
    // };
    return (
      <div>
        <DivWrapper>
          {this.props.fields.map((field, index) => [
            <TicTacToeSquare
              key={index}
              value={field}
              handleClick={this.props.handleClick}
            />,
            //doBr(index) ? <br /> : "",
          ])}
        </DivWrapper>
      </div>
    );
  }
}

const DivWrapper = styled.div`
  margin: auto;
  max-width: 550px;
  display: flex;
  flex-wrap: wrap;
`;
