import { OneJoke } from "./OneJoke";
import { themes } from "./Theme";
import { useEffect, useState } from "react";
import loadingGIF from "./Spinner-1s-200px.svg";
import styled from "styled-components";

const NUMBER_OF_JOKES = 20;

export type JokeType = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

export const RandomJokes = () => {
  const [jokes, setJokes] = useState<JokeType[]>([]);
  const [error, setError] = useState(null as null | string);
  const [loadingJokes, setLoadingJokes] = useState(false);

  const isDuplicate = (jokesArray: JokeType[], joke: JokeType): boolean => {
    return jokesArray.some((j) => j.id === joke.id);
  };

  const getJokes = async () => {
    setLoadingJokes(true);
    const jokesArray: JokeType[] = [];
    while (jokesArray.length < NUMBER_OF_JOKES) {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data: JokeType = await response.json();
      if (!isDuplicate(jokesArray, data)) {
        jokesArray.push(data);
      }
    }
    setJokes(jokesArray);
    setLoadingJokes(false);
  };

  useEffect(() => {
    try {
      setError(null);
      getJokes();
    } catch (err) {
      setError(err.toString());
    }
  }, []);

  return (
    <div>
      <ErrorDiv>{error && <div> Error: {error}</div>}</ErrorDiv>
      <LoadingDiv>
        {loadingJokes && <img src={loadingGIF} alt="Loading" />}
      </LoadingDiv>
      <Ul>
        {jokes.map((joke) => {
          return (
            <Li key={joke.id}>
              <OneJoke value={joke.value} />
            </Li>
          );
        })}
      </Ul>
    </div>
  );
};

const LoadingDiv = styled.div`
  position: relative;
  left: calc(50% - 100px);
`;

const Li = styled.li`
  margin: 15px 20px;
  font-size: 15px;
`;

const Ul = styled.ul`
  list-style: none;
`;
const ErrorDiv = styled.div`
  color: ${themes.secondaryColor};
  font-weight: ${themes.fontBold};
  text-align: ${themes.textAlign};
  margin: 50px;
  text-transform: ${themes.textTransform};
`;
