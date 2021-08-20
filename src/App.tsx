import "./App.css";
import { ChunkNorris } from "./chunkNorris/ChunkNorrisApp";
import { CounterInRedux, store } from "./counterInRedux/CounterApp";
import { HackerTyper } from "./hackertyper/HackerTyper";
import { HomePage } from "./HomePage";
import { JSHistory } from "./JSHistoryPublicWeb/History";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { MemoryGameApp } from "./memoryGame/MemoryGameApp";
import { MyStateComp } from "./counter/Root";
import { PostListApp } from "./blogPost/PostListApp";
import { Provider } from "react-redux";
import { Theme } from "./Themes";
import { TicTacToeApp } from "./tic-tac-toe/TicTacToeApp";
import { ToDoApp } from "./todo/ToDoApp";
import { text } from "./hackertyper/Code";
import styled from "styled-components";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <DivWrapper>
            <div>
              <Link to="/HomePage">Home page</Link>
            </div>
            <div>
              <Link to="/JSHistoryPublicWeb">JS history</Link>
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
            <div>
              <Link to="/chunkNorris">Chuck Norris jokes</Link>
            </div>
            <div>
              <Link to="/counterInRedux">Counter in Redux</Link>
            </div>
          </DivWrapper>
        </nav>

        <Switch>
          <Route path="/HomePage">
            <HomePage />
          </Route>
          <Route path="/JSHistoryPublicWeb">
            <JSHistory />
          </Route>
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
          <Route path="/chunkNorris">
            <ChunkNorris />
          </Route>
          <Provider store={store}>
            <Route path="/counterInRedux">
              <CounterInRedux />
            </Route>
          </Provider>
        </Switch>
      </div>
    </Router>
  );
}

const DivWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
  margin-top: 40px;
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
  a:hover {
    color: ${Theme.primaryColor};
  }
`;
