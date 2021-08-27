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
    <DivWrapper>
      <Helmet>
        <style>{`body { background-color: ${themes.quinaryColor}}`}</style>
      </Helmet>

      <H1>Chuck Norris jokes</H1>
      <Router>
        {loading && (
          <DivLoading>
            <img src={loadingGIF} alt="Loading" />
          </DivLoading>
        )}
        {error ? (
          <DivError> Unable to get data from ${URL_ALL_CATEGORIES} </DivError>
        ) : null}

        <DivHomePage>
          <LinkHome to={"/RandomJokes"}>Random jokes</LinkHome>
        </DivHomePage>

        <Ul>
          {categories.map((category) => {
            return (
              <Li key={category}>
                <LinkCategory to={URL_BASE + category}>{category}</LinkCategory>
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
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  margin: auto;
  max-width: 880px;

  @media (max-width: 480px) {
    max-width: 460px;
  }
`;

const H1 = styled.h1`
  text-align: ${themes.textAlign};
  font-family: ${themes.primaryFont};
  color: ${themes.secondaryColor};
  font-size: 38px;
  padding-top: 40px;
`;

const DivError = styled.div`
  color: ${themes.secondaryColor};
  font-family: ${themes.secondaryFont};
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
  font-family: ${themes.secondaryFont};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 10px 10px 0;

  &:hover {
    color: ${themes.primaryColor};
  }
`;

const DivHomePage = styled.div`
  list-style: none;
  margin: 10px auto;
  width: 180px;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #505a5b;
  border-radius: 5px;
`;

const LinkCategory = styled(Link)`
  text-decoration: ${themes.textDecoration};
  color: ${themes.tertiaryColor};
  font-family: ${themes.secondaryFont};
  padding: 10px;
  width: 100%;
  text-align: center;

  &:hover {
    color: ${themes.primaryColor};
    font-weight: ${themes.fontBold};
  }
`;

const Li = styled.li`
  list-style: none;
  margin: 2px;
  border: 1px solid ${themes.tertiaryColor};
  border-radius: 5px;
  display: flex;
  min-width: 110px;
  font-family: ${themes.secondaryFont};
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 0;
`;

const DivLoading = styled.div`
  position: relative;
  left: calc(50% - 100px);
`;
