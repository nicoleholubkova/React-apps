import { Component } from "react";
import { Helmet } from "react-helmet";
import { Themes } from "./theme";
import styled, { keyframes } from "styled-components";

export class HackerTyper extends Component<{ code: string }, { cut: number }> {
  constructor(props) {
    super(props);
    this.state = {
      cut: 2,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed);
  }

  onKeyPressed = (e) => {
    if (!e.key) {
      return;
    }

    this.setState((prevState) => ({
      cut: prevState.cut + 4,
    }));
  };

  render() {
    let codeSlice = this.props.code.slice(0, this.state.cut);
    return (
      <div onKeyDown={this.onKeyPressed}>
        <Helmet>
          <style>
            {
              "body { background-color: black; font-family: monospace; color: #00FF00; line-height: 2; white-space: pre-line}"
            }
          </style>
        </Helmet>
        {codeSlice} <BlinkSpan>|</BlinkSpan>
      </div>
    );
  }
}

const colors = keyframes`
0% {
  color: ${Themes.primaryColor};
}
50% {
  color: ${Themes.secondaryColor};
}
100% {
  color: ${Themes.tertiaryColor};
}
`;

const BlinkSpan = styled.span`
  animation: ${colors} 1s step-end infinite;
`;
