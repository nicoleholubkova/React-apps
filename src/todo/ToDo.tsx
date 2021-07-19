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

const DivWrapperLi = styled.div`
  border-bottom: 1px solid #ededed;
  font-size: 18px;
  margin: -23px -13px 0 -14px;
  padding-left: 13%;
  padding-bottom: 2%;
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

interface ToDoItem {
  index: number;
  value: string;
  done: boolean;
}
const toDoItems = [] as ToDoItem[];
// toDoItems.push({
//   index: 0,
//   value: "laundry",
//   done: false,
// });

class ToDoListItem extends React.Component<
  { item: ToDoItem; checkItemFn: any },
  {}
> {
  constructor(props) {
    super(props);
  }

  onChangeBox = (e) => {
    debugger;
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
        <DivWrapperLi>{this.props.item.value}</DivWrapperLi>
      </DivWrapperItem>
    );
  }
}

class ToDoList extends React.Component<
  { items: ToDoItem[]; checkItemFn: any },
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
              key={todo.index}
              item={todo}
              checkItemFn={this.props.checkItemFn}
            />
          ))}
        </Ul>
      </div>
    );
  }
}

class ToDoForm extends React.Component<{ addItem: any }, {}> {
  constructor(props) {
    super(props);
  }
  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let newValue = e.target.value;
      // eslint-disable-next-line no-console
      console.log("it is working");
      this.props.addItem(newValue);
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
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

  checkItem = (item: ToDoItem) => {
    item.done = !item.done;
  };

  addItem = (newToDoText: string) => {
    let newToDo: ToDoItem = {
      index: this.state.toDoItems.length,
      value: newToDoText,
      done: false,
    };
    this.setState((prevState) => ({
      toDoItems: [newToDo, ...prevState.toDoItems],
    }));
  };

  render() {
    return (
      <div>
        <H1>To Do List</H1>
        <DiVWrapperApp>
          <ToDoForm addItem={this.addItem} />
          <ToDoList items={this.state.toDoItems} checkItemFn={this.checkItem} />
        </DiVWrapperApp>
      </div>
    );
  }
}
