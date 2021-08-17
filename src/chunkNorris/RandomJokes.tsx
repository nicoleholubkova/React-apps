import { OneJoke } from "./OneJoke";
import { URL_RANDOM } from "./Config";
import { removeDuplicate } from "./ArrayUtils";
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
  const [error, setError] = useState(false);
  const [loadingJokes, setLoadingJokes] = useState(false);

  useEffect(() => {
    const getJokes = async () => {
      const jokesArray: JokeType[] = [];
      try {
        while (jokesArray.length < NUMBER_OF_JOKES) {
          setLoadingJokes(true);
          const response = await fetch(URL_RANDOM);
          const data: JokeType = await response.json();
          jokesArray.push(data);
          const isDuplicate = removeDuplicate(jokesArray);
          setJokes(isDuplicate);
          setLoadingJokes(false);
        }
      } catch {
        setError(true);
        setLoadingJokes(false);
      }
    };
    getJokes();
  }, []);

  return (
    <div>
      {loadingJokes ? (
        <DivLoading>
          <img src={loadingGIF} alt="Loading" />
        </DivLoading>
      ) : null}

      {error ? (
        <DivError> Unable to get data from ${URL_RANDOM} </DivError>
      ) : null}

      <Ul>
        {jokes.map((joke) => (
          <Li key={joke.id}>
            <OneJoke value={joke.value} />
          </Li>
        ))}
      </Ul>
    </div>
  );
};

const DivLoading = styled.div`
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
const DivError = styled.div`
  color: ${themes.secondaryColor};
  font-weight: ${themes.fontBold};
  text-align: ${themes.textAlign};
  margin: 50px;
  text-transform: ${themes.textTransform};
`;
