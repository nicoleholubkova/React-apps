import { CategoryJoke } from "./CategoryJoke";
import { Helmet } from "react-helmet";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { RandomJokes } from "./RandomJokes";
import { themes } from "./Theme";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const ChunkNorris = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState(null as null | string);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://api.chucknorris.io/jokes/categories"
        );
        const data: string[] = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.toString());
      }
    };
    getCategories();
  }, []);

  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #F2EFE9}"}</style>
      </Helmet>
      <div>
        <ErrorDiv>{error && <div> Error: {error}</div>}</ErrorDiv>
        <H1>Chuck Norris jokes</H1>
        <Router>
          <DivHomePage>
            <Link to={"/RandomJokes"}>Home Page</Link>
          </DivHomePage>
          <Ul>
            {categories.map((category, index) => {
              return (
                <Li key={index}>
                  <Link to={"/chunkNorris/" + category}>{category}</Link>
                </Li>
              );
            })}
          </Ul>

          <Switch>
            <Route path={"/RandomJokes"}>
              <RandomJokes />
            </Route>
            {categories.map((category, index) => (
              <Route key={index} path={"/chunkNorris/" + category}>
                <CategoryJoke category={category} />
              </Route>
            ))}
          </Switch>
        </Router>
      </div>
    </div>
  );
};

const H1 = styled.h1`
  text-align: ${themes.textAlign};
  text-transform: ${themes.textTransform};
  font-family: ${themes.primaryFont};
  color: ${themes.quaternaryColor};
  font-size: 38px;
`;

const ErrorDiv = styled.div`
  color: ${themes.secondaryColor};
  font-weight: ${themes.fontBold};
  text-align: ${themes.textAlign};
  margin: 50px;
  text-transform: ${themes.textTransform};
  font-size: 20px;
`;

const DivHomePage = styled.div`
  list-style: none;
  margin: 30px;
  text-align: ${themes.textAlign};
  font-size: 20px;

  a {
    text-decoration: ${themes.textDecoration};
    color: ${themes.tertiaryColor};
    font-weight: ${themes.fontBold};

    &:hover {
      color: ${themes.primaryColor};
    }
  }
`;

const Li = styled.li`
  list-style: none;
  margin: 10px 20px;
  width: 55px;

  a {
    text-decoration: ${themes.textDecoration};
    color: ${themes.tertiaryColor};

    &:hover {
      color: ${themes.primaryColor};
      font-weight: ${themes.fontBold};
    }
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
