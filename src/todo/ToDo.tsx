import { Theme } from "./theme";
import React from "react";
import styled from "styled-components";
interface ToDoItem {
  id: number;
  value: string;
  done: boolean;
}

interface Props {
  item: ToDoItem;
  checkItemFn: (item: ToDoItem) => void;
}
const toDoItems = [] as ToDoItem[];
class ToDoListItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  onChangeBox = (e: any): void => {
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
  _handleKeyDown = (e: any): void => {
    if (e.key !== "Enter") return;

    let newValue = e.target.value;
    // eslint-disable-next-line no-console
    if (!newValue) {
      return;
    }
    this.props.addItem(newValue);
    this.setState({ inputValue: "" });
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

export { ToDoForm, ToDoList };

const InputCheckbox = styled.input`
  outline: none;
  cursor: pointer;
  width: 1.3em;
  height: 1.3em;
  background-color: ${Theme.tertiaryColor};
  border: 1px solid ${Theme.quaternaryColor};
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

const Input = styled.input`
  padding: 10px 60px 10px 80px;
  font-family: ${Theme.secondaryFont};
  font-size: 20px;
  width: calc(100% - 141px);
  border: none;
  border-bottom: 1px solid ${Theme.quaternaryColor};

  &:focus {
    outline: none;
  }
`;

const DivWrapperLi = styled.div<{ checked: boolean }>`
  border-bottom: 1px solid ${Theme.quaternaryColor};
  font-size: 18px;
  margin: -23px -13px 0 -14px;
  padding-left: 13%;
  padding-bottom: 2%;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "#787878" : "black")};
`;
