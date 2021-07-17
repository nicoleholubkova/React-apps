import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { MyStateComp } from "./counter/Root";
import { ToDoList } from "./todo/ToDo";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
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
          </DivWrapper>
        </nav>

        <Switch>
          <Route path="/counter">
            <MyStateComp />
          </Route>
          <Route path="/todo">
            <ToDoList />
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
