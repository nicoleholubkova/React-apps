import React from "react";
import styled from "styled-components";

const InputCheckbox = styled.input`
  outline: none;
  cursor: pointer;
  width: 1.3em;
  height: 1.3em;
  background-color: white;
  border: 1px solid #ddd;
`;

const DivWrapperItem = styled.div`
  padding: 13px;
`;
const Ul = styled.ul`
  padding-left: 0;
  display: inline;
`;

const DivWrapperInput = styled.div`
  margin-bottom: 13px;
`;

const DiVWrapperApp = styled.div`
  margin: 0 25%;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const H1 = styled.h1`
  font-size: 60px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: rgba(175, 47, 47, 0.15);
  text-align: center;
`;

const Input = styled.input`
  padding: 10px 60px 10px 80px;
  font-family: inherit;
  font-size: 20px;
  width: calc(100% - 141px);
  border: none;
  border-bottom: 1px solid #ededed;

  &:focus {
    outline: none;
  }
`;

const DivWrapperLi = styled.div<{ checked: boolean }>`
  border-bottom: 1px solid #ededed;
  font-size: 18px;
  margin: -23px -13px 0 -14px;
  padding-left: 13%;
  padding-bottom: 2%;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "#787878" : "black")};
`;

interface ToDoItem {
  id: number;
  //index: number;
  value: string;
  done: boolean;
}
const toDoItems = [] as ToDoItem[];
class ToDoListItem extends React.Component<
  { item: ToDoItem; checkItemFn: (item: ToDoItem) => void },
  {}
> {
  constructor(props) {
    super(props);
  }

  onChangeBox = (e) => {
    this.props.checkItemFn(this.props.item);
  };

  render() {
    return (
      <DivWrapperItem>
        <InputCheckbox
          type="checkbox"
          defaultChecked={this.props.item.done}
          onChange={this.onChangeBox}
        />
        <DivWrapperLi checked={this.props.item.done}>
          {this.props.item.value}
        </DivWrapperLi>
      </DivWrapperItem>
    );
  }
}

class ToDoList extends React.Component<
  { items: ToDoItem[]; checkItemFn: (item: ToDoItem) => void },
  {}
> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Ul>
          {this.props.items.map((todo) => (
            <ToDoListItem
              key={todo.id}
              item={todo}
              checkItemFn={this.props.checkItemFn}
            />
          ))}
        </Ul>
      </div>
    );
  }
}

class ToDoForm extends React.Component<
  { addItem: (value: string) => void },
  { inputValue: string }
> {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let newValue = e.target.value;
      // eslint-disable-next-line no-console
      if (!newValue) {
        return;
      }
      this.props.addItem(newValue);
      this.setState({ inputValue: "" });
    }
  };
  render() {
    return (
      <DivWrapperInput>
        <Input
          type="text"
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={this._handleKeyDown}
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
        />
      </DivWrapperInput>
    );
  }
}

export class ToDoApp extends React.Component<{}, { toDoItems: ToDoItem[] }> {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: toDoItems,
    };
  }

  getNumberOfToDosLeft = () => {
    return this.state.toDoItems.filter((todo) => !todo.done).length;
  };

  checkItem = (item: ToDoItem) => {
    this.setState((prevState) => ({
      toDoItems: prevState.toDoItems.map((todo) =>
        todo.id === item.id ? { ...todo, done: !todo.done } : todo
      ),
    }));
  };

  getRandomId = () => {
    let getId = () => {
      return Math.round(Math.random() * 1000 + 1);
    };

    let idExists = (id) => {
      return this.state.toDoItems.filter((todo) => todo.id === id).length > 0;
    };

    let newId = getId();

    while (idExists(newId)) {
      newId = getId();
    }
    return newId;
  };

  addItem = (newToDoText: string) => {
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
  color: #777;
  font-size: small;
  padding-bottom: 10px;
  padding-left: 10px;
`;
