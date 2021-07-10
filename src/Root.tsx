import React from "react";

const styles = {
  h1: {
    textAlign: "center",
    fontFamily: "Brush Script MT, cursive",
    padding: "40px 0",
    color: "#22577A",
  } as const,
  button: {
    textAlign: "center",
    fontFamily: "Helvetica, Sans-serif",
    padding: "10px 20px",
    margin: "8px",
    position: "relative",
    left: "calc(50% - 141px)",
    textTransform: "uppercase",
    background: "#38A3A5",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  } as const,
  body: {
    backgroundColor: "#C7F9CC",
    margin: "160px 340px",
    padding: "20px 20px 65px",
    borderRadius: "50%",
  },
};

export class MyStateComp extends React.Component {
  state = {
    number: 1,
  };
  render() {
    return (
      <div style={styles.body}>
        <h1 style={styles.h1}>Your current number is: {this.state.number}</h1>
        <button
          style={styles.button}
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          Increment
        </button>
        <button
          style={styles.button}
          onClick={() => {
            this.setState({ number: this.state.number - 1 });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}
