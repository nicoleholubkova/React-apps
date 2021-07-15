import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { MyStateComp } from "./counter/Root";
import React from "react";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/todo">To Do</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/counter">
            <MyStateComp />
          </Route>
          <Route path="/todo">
            <h2>There will be my to do list.</h2>
          </Route>
          <Route path="/">
            <h1>Hi</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
