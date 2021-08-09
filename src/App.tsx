import "./App.css";
import { HackerTyper } from "./hackertyper/HackerTyper";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { MemoryGameApp } from "./memoryGame/MemoryGameApp";
import { MyStateComp } from "./counter/Root";
import { PostListApp } from "./blogPost/PostListApp";
import { TicTacToeApp } from "./tic-tac-toe/TicTacToeApp";
import { ToDoApp } from "./todo/ToDoApp";
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
            <div>
              <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
            </div>
            <div>
              <Link to="/blogPost">Blog post</Link>
            </div>
            <div>
              <Link to="/memoryGame">Memory game</Link>
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
          <Route path="/tic-tac-toe">
            <TicTacToeApp />
          </Route>
          <Route path="/blogPost">
            <PostListApp />
          </Route>
          <Route path="/memoryGame">
            <MemoryGameApp />
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
