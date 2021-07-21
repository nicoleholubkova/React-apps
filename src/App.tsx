import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { MyStateComp } from "./counter/Root";

import { HackerTyper } from "./hackertyper/HackerTyper";
import { ToDoApp } from "./todo/ToDo";
import { text } from "./hackertyper/Code";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
  a:hover {
    color: red;
  }
`;

const Paragraph = styled.p`
  font-size: 180px;
  text-align: center;
`;

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <DivWrapper>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/counter">Counter</Link>
            </div>
            <div>
              <Link to="/todo">To Do List</Link>
            </div>
            <div>
              <Link to="/hackertyper">Hacker Typer</Link>
            </div>
          </DivWrapper>
        </nav>

        <Switch>
          <Route path="/counter">
            <MyStateComp />
          </Route>
          <Route path="/todo">
            <ToDoApp />
          </Route>
          <Route path="/hackertyper">
            <HackerTyper code={text} />
          </Route>
          <Route path="/">
            <Paragraph>&#128144;</Paragraph>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
