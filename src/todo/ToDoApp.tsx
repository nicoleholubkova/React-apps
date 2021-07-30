import { Theme } from "./theme";
import { ToDoForm, ToDoList } from "./ToDo";
import React from "react";
import styled from "styled-components";

interface ToDoItem {
  id: number;
  value: string;
  done: boolean;
}
const toDoItems = [] as ToDoItem[];

export class ToDoApp extends React.Component<{}, { toDoItems: ToDoItem[] }> {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: toDoItems,
    };
  }

  getNumberOfToDosLeft = (): number => {
    return this.state.toDoItems.filter((todo) => !todo.done).length;
  };

  checkItem = (item: ToDoItem): void => {
    this.setState((prevState) => ({
      toDoItems: prevState.toDoItems.map((todo) =>
        todo.id === item.id ? { ...todo, done: !todo.done } : todo
      ),
    }));
  };

  getRandomId = (): number => {
    let getId = (): number => {
      return Math.round(Math.random() * 1000 + 1);
    };

    let idExists = (id: number): boolean => {
      return this.state.toDoItems.filter((todo) => todo.id === id).length > 0;
    };

    let newId = getId();

    while (idExists(newId)) {
      newId = getId();
    }
    return newId;
  };

  addItem = (newToDoText: string): void => {
    this.setState((prevState) => ({
      toDoItems: [
        {
          id: this.getRandomId(),
          value: newToDoText,
          done: false,
        },
        ...prevState.toDoItems,
      ],
    }));
  };
  render() {
    return (
      <div>
        <H1>To Do List</H1>
        <DiVWrapperApp>
          <ToDoForm addItem={this.addItem} />
          <ToDoList items={this.state.toDoItems} checkItemFn={this.checkItem} />
          <DivCounter>Todos left: {this.getNumberOfToDosLeft()} </DivCounter>
        </DiVWrapperApp>
      </div>
    );
  }
}

const DivCounter = styled.div`
  color: ${Theme.primaryColor};
  font-size: small;
  padding-bottom: 10px;
  padding-left: 10px;
`;

const DiVWrapperApp = styled.div`
  margin: 0 25%;
  position: relative;
  box-shadow: ${Theme.primaryShadow};
`;

const H1 = styled.h1`
  font-size: 60px;
  font-family: ${Theme.primaryFont};
  color: ${Theme.secondaryColor};
  text-align: center;
`;
