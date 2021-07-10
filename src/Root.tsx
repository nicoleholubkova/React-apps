import React from "react";

export class MyStateComp extends React.Component {
  state = {
    number: 1,
  };
  render() {
    return (
      <div>
        <h1>Current number {this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          Add 1
        </button>
        <button
          onClick={() => {
            this.setState({ number: this.state.number - 1 });
          }}
        >
          Remove 1
        </button>
      </div>
    );
  }
}
