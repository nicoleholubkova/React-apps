import { Theme } from "./theme";
import React from "react";

const styles = {
  h1: {
    textAlign: "center",
    fontFamily: Theme.quinary,
    padding: "40px 0",
    color: Theme.primaryColor,
  } as const,
  button: {
    textAlign: "center",
    fontFamily: Theme.senary,
    padding: "10px 20px",
    margin: "8px",
    position: "relative",
    left: "calc(50% - 141px)",
    textTransform: "uppercase",
    background: Theme.secondaryColor,
    color: Theme.quaternaryColor,
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  } as const,
  body: {
    backgroundColor: Theme.tertiaryColor,
    margin: "160px 340px",
    padding: "20px 20px 65px",
    borderRadius: "50%",
  },
};

export class MyStateComp extends React.Component<{}, { count: number }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <div style={styles.body}>
        <h1 style={styles.h1}>Your current number is: {this.state.count}</h1>
        <button
          style={styles.button}
          onClick={() => {
            this.setState((state) => ({
              count: state.count + 1,
            }));
          }}
        >
          Increment
        </button>
        <button
          style={styles.button}
          onClick={() => {
            this.setState((state) => ({
              count: state.count - 1,
            }));
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}
