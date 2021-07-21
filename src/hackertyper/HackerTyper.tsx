import { Helmet } from "react-helmet";
import { code } from "./Code";
import React, { Component } from "react";
import styled from "styled-components";
export class HackerTyper extends Component<{}, { hacker: any }> {
  constructor(props) {
    super(props);
    this.state = {
      hacker: code,
    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <style>
            {
              "body { background-color: black; font-family: monospace; color: #00FF00; }"
            }
          </style>
        </Helmet>
        <div>{this.state.hacker}</div>
      </div>
    );
  }
}
