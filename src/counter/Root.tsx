import { Theme } from "./theme";
import React from "react";
import styled from "styled-components";

export class MyStateComp extends React.Component<{}, { count: number }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <DivWrapper>
        <H1>Your current number is: {this.state.count}</H1>
        <Button
          onClick={() => {
            this.setState((state) => ({
              count: state.count + 1,
            }));
          }}
        >
          Increment
        </Button>
        <Button
          onClick={() => {
            this.setState((state) => ({
              count: state.count - 1,
            }));
          }}
        >
          Decrement
        </Button>
      </DivWrapper>
    );
  }
}

const H1 = styled.h1`
  text-align: center;
  font-family: ${Theme.quinary};
  padding: 40px 0;
  color: ${Theme.primaryColor};
`;

const Button = styled.button`
  text-align: center;
  font-family: ${Theme.senary};
  padding: 10px 20px;
  margin: 8px;
  position: relative;
  left: calc(50% - 141px);
  text-transform: uppercase;
  background: ${Theme.secondaryColor};
  color: ${Theme.quaternaryColor};
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;
const DivWrapper = styled.div`
  background-color: ${Theme.tertiaryColor};
  margin: 160px 340px;
  padding: 20px 20px 65px;
  border-radius: 50%;
`;
