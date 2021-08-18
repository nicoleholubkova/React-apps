import { CategoryJoke } from "./CategoryJoke";
import { Helmet } from "react-helmet";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { RandomJokes } from "./RandomJokes";
import { URL_ALL_CATEGORIES, URL_BASE } from "./Config";
import { themes } from "./Theme";
import { useEffect, useState } from "react";
import loadingGIF from "./Spinner-1s-200px.svg";
import styled from "styled-components";

export const ChunkNorris = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL_ALL_CATEGORIES);
        const data: string[] = await response.json();
        setCategories(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  return (
    <div>
      <Helmet>
        <style>{`body { background-color: ${themes.quinaryColor}}`}</style>
      </Helmet>
      <div>
        <H1>Chuck Norris jokes</H1>
        <Router>
          <DivHomePage>
            <LinkHome to={"/RandomJokes"}>Home Page</LinkHome>
          </DivHomePage>

          {loading && (
            <DivLoading>
              <img src={loadingGIF} alt="Loading" />
            </DivLoading>
          )}
          {error ? (
            <DivError> Unable to get data from ${URL_ALL_CATEGORIES} </DivError>
          ) : null}

          <Ul>
            {categories.map((category) => {
              return (
                <Li key={category}>
                  <LinkCategory to={URL_BASE + category}>
                    {category}
                  </LinkCategory>
                </Li>
              );
            })}
          </Ul>

          <Switch>
            <Route path={"/RandomJokes"}>
              <RandomJokes />
            </Route>
            {categories.map((category, index) => (
              <Route key={index} path={URL_BASE + category}>
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

const DivError = styled.div`
  color: ${themes.secondaryColor};
  font-weight: ${themes.fontBold};
  text-align: ${themes.textAlign};
  margin: 50px;
  text-transform: ${themes.textTransform};
  font-size: 20px;
`;

const LinkHome = styled(Link)`
  text-decoration: ${themes.textDecoration};
  color: ${themes.tertiaryColor};
  font-weight: ${themes.fontBold};

  &:hover {
    color: ${themes.primaryColor};
  }
`;

const DivHomePage = styled.div`
  list-style: none;
  margin: 30px;
  text-align: ${themes.textAlign};
  font-size: 20px;
`;

const LinkCategory = styled(Link)`
  text-decoration: ${themes.textDecoration};
  color: ${themes.tertiaryColor};

  &:hover {
    color: ${themes.primaryColor};
    font-weight: ${themes.fontBold};
  }
`;

const Li = styled.li`
  list-style: none;
  margin: 10px 20px;
  width: 55px;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const DivLoading = styled.div`
  position: relative;
  left: calc(50% - 100px);
`;
