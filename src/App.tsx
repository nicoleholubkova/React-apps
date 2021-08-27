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
        <Nav>
          <DivWrapper>
            <DivWrapperLink>
              <LinkNavig to="/">Home page</LinkNavig>
            </DivWrapperLink>
            <DivWrapperLink>
              <LinkNavig to="/JSHistoryPublicWeb">JS history</LinkNavig>
            </DivWrapperLink>
            <DivWrapperLink>
              <LinkNavig to="/counter">Counter app</LinkNavig>
            </DivWrapperLink>
            <DivWrapperLink>
              <LinkNavig to="/todo">To Do List</LinkNavig>
            </DivWrapperLink>
            <DivWrapperLink>
              <LinkNavig to="/hackertyper">Hacker Typer</LinkNavig>
            </DivWrapperLink>
            <DivWrapperLink>
              <LinkNavig to="/tic-tac-toe">Tic-Tac-Toe</LinkNavig>
            </DivWrapperLink>
            <DivWrapperLink>
              <LinkNavig to="/blogPost">Blog post</LinkNavig>
            </DivWrapperLink>
            <DivWrapperLink>
              <LinkNavig to="/memoryGame">Memory game</LinkNavig>
            </DivWrapperLink>
            <DivWrapperLink>
              <LinkNavig to="/chunkNorris">Chuck Norris jokes</LinkNavig>
            </DivWrapperLink>
            <DivWrapperLink>
              <LinkNavig to="/counterInRedux">Counter in Redux</LinkNavig>
            </DivWrapperLink>
          </DivWrapper>
        </Nav>

        <Switch>
          <Route exact path="/">
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

const DivWrapperLink = styled.div`
  background: ${Theme.senaryColor};
  border: 1px solid ${Theme.secondaryColor};
  padding: 5px;
  text-align: center;
`;

const DivWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const LinkNavig = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${Theme.secondaryColor};
  width: 100%;
  display: inline-block;

  &:hover {
    color: ${Theme.primaryColor};
  }
`;

const Nav = styled.nav`
  max-width: 880px;
  margin: auto;

  @media (max-width: 480px) {
    max-width: 460px;
  }
`;
