import { Theme } from "./Theme";
import { combineReducers, createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const countReducer = (state = 0, action: { type: any }) => {
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
const allReducers = combineReducers({
  counter: countReducer,
});

export const store = createStore(allReducers);

type RootState = ReturnType<typeof allReducers>;
export interface CounterProps {
  onIncrement1: any;
  onIncrement2: any;
  onDecrement1: any;
  onDecrement2: any;
  onPow2: any;
  onPowState: any;
  onDivided: any;
  onSquareRoot: any;
  count: any;
}
const buttonsAction = () => ({
  onIncrement1: () => ({ type: "INCREMENT1" }),
  onIncrement2: () => ({ type: "INCREMENT2" }),
  onDecrement1: () => ({ type: "DECREMENT1" }),
  onDecrement2: () => ({ type: "DECREMENT2" }),
  onPow2: () => ({ type: "POW2" }),
  onPowState: () => ({ type: "POWSTATE" }),
  onDivided: () => ({ type: "DIVIDED2" }),
  onSquareRoot: () => ({ type: "SQRTSTATE" }),
});

export const CounterInRedux = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <H1>Your current number is:{count} </H1>
      <Button onClick={() => dispatch(buttonsAction().onIncrement1())}>
        increment 1
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onIncrement2())}>
        increment 2
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onDecrement1())}>
        decrement 1
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onDecrement2())}>
        decrement 2
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onPow2())}>
        exponent 2
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onPowState())}>
        exponent current number
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onDivided())}>
        divided 2
      </Button>
      <Button onClick={() => dispatch(buttonsAction().onSquareRoot())}>
        square root of current number
      </Button>
    </div>
  );
};

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
