import { Helmet } from "react-helmet";
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
        <Helmet>
          <style>{`body { background-color: ${Theme.quinaryColor}}`}</style>
        </Helmet>
        <H1>Counter app</H1>
        <H2>Your current number is: {this.state.count}</H2>
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
  text-align: ${Theme.textAlign};
  font-family: ${Theme.primaryFont};
  padding-top: 40px;
  font-size: 38px;
  color: ${Theme.primaryColor};
`;

const H2 = styled.h2`
  text-align: ${Theme.textAlign};
  font-family: ${Theme.secondaryFont};
  padding: 40px 0;
  color: ${Theme.secondaryColor};
  font-weight: inherit;
`;

const Button = styled.button`
  text-align: ${Theme.textAlign};
  font-family: ${Theme.secondaryFont};
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

  &:hover {
    background-color: ${Theme.tertiaryColor};
    cursor: pointer;
  }
`;
const DivWrapper = styled.div`
  max-width: 880px;
  margin: auto;
`;
