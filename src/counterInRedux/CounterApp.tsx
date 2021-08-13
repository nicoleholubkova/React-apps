import { Theme } from "./Theme";
import { connect } from "react-redux";
import { createStore } from "redux";
import React from "react";
import styled from "styled-components";

const reducer = (state = 0, action: { type: any }) => {
  switch (action.type) {
    case "INCREMENT1":
      return state + 1;
    case "DECREMENT1":
      return state - 1;
    case "INCREMENT2":
      return state + 2;
    case "DECREMENT2":
      return state - 2;
    case "POW2":
      return state ** 2;
    case "POWSTATE":
      return state ** state;
    case "DIVIDED2":
      return state / 2;
    case "SQRTSTATE":
      return Math.sqrt(state);
    default:
      return state;
  }
};

export const store = createStore(reducer);

interface CounterProps {
  onIncrement1: any;
  onIncrement2: any;
  onDecrement1: any;
  onDecrement2: any;
  onPow2: any;
  onPowState: any;
  onDivided: any;
  onSquareRoot: any;
  value: any;
}

const Counter = (props: CounterProps) => (
  <React.Fragment>
    <H1>Your current number is:{props.value} </H1>
    <Button onClick={props.onIncrement1}>increment 1</Button>
    <Button onClick={props.onIncrement2}>increment 2</Button>
    <Button onClick={props.onDecrement1}>decrement 1</Button>
    <Button onClick={props.onDecrement2}>decrement 2</Button>
    <Button onClick={props.onPow2}>exponent 2</Button>
    <Button onClick={props.onPowState}>exponent current number</Button>
    <Button onClick={props.onDivided}>divided 2</Button>
    <Button onClick={props.onSquareRoot}>square root of current number</Button>
  </React.Fragment>
);

const mapStateToProps = (state: any) => {
  return {
    value: state,
  };
};

const mapDispatchToProps = (dispatch: (arg0: { type: string }) => any) => ({
  onIncrement1: () => dispatch({ type: "INCREMENT1" }),
  onIncrement2: () => dispatch({ type: "INCREMENT2" }),
  onDecrement1: () => dispatch({ type: "DECREMENT1" }),
  onDecrement2: () => dispatch({ type: "DECREMENT2" }),
  onPow2: () => dispatch({ type: "POW2" }),
  onPowState: () => dispatch({ type: "POWSTATE" }),
  onDivided: () => dispatch({ type: "DIVIDED2" }),
  onSquareRoot: () => dispatch({ type: "SQRTSTATE" }),
});

export const CounterInRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

const H1 = styled.h1`
  text-align: ${Theme.textAlign};
  font-family: ${Theme.primaryFont};
  padding: 40px 0;
  color: ${Theme.primaryColor};
`;
const Button = styled.button`
  text-align: ${Theme.textAlign};
  font-family: ${Theme.secondaryFont};
  padding: 10px 20px;
  margin: 8px;
  text-transform: ${Theme.textTransform};
  background: ${Theme.secondaryColor};
  color: ${Theme.quaternaryColor};
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const DivWrapper = styled.div`
  background-color: ${Theme.tertiaryColor};
  margin: 100px 200px;
  padding: 20px 20px 65px;
  border-radius: 20%;
`;
