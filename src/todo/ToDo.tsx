import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px 40px;
  font-size: 20px;
  font-family: sans-serif;
  width: 250px;
`;

const DivWrapper = styled.div`
  text-align: center;
  margin: auto;
`;

type Props = {};
type State = {
  todos: string[];
};

export class ToDoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // eslint-disable-next-line no-console
      console.log("you did it");
      const newTodo = e.target.value;
      this.setState((prevState) => ({
        todos: [newTodo, ...prevState.todos],
      }));
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
    }
  };

  render() {
    return (
      <DivWrapper>
        <h1>To Do list:</h1>
        <Input
          type="text"
          autoFocus
          placeholder="What needs to be done?"
          onKeyDown={this._handleKeyDown}
        />
        <dl>
          {this.state.todos.map((todo) => (
            <Item key={todo} text={todo} />
          ))}
        </dl>
      </DivWrapper>
    );
  }
}

type ItemProps = {
  text: string;
};

type ItemState = {
  done: boolean;
};

class Item extends Component<ItemProps, ItemState> {
  state = {
    done: false,
  };
  render() {
    return (
      <dd>
        <input
          type="checkbox"
          onClick={() => {
            this.setState((prevState) => {
              done: !prevState.done;
            });
          }}
        />
        {this.props.text}
      </dd>
    );
  }
}
