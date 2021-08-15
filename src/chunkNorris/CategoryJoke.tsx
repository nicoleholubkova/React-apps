import { JokeType } from "./RandomJokes";
import { OneJoke } from "./OneJoke";
import { themes } from "./Theme";
import { useEffect, useState } from "react";
import loadingGIF from "./Spinner-1s-200px.svg";
import styled from "styled-components";

const NUMBER_OF_CATEGORY_JOKES = 5;
const NUMBER_OF_ATTEMPTS = 20;

export const CategoryJoke = (props: { category: string }) => {
  const [categoryJokes, setCategoryJokes] = useState<JokeType[]>([]);
  const [error, setError] = useState(null as null | string);
  const [loading, setLoading] = useState(false);

  const isDuplicate = (jokesArray: JokeType[], joke: JokeType): boolean => {
    return jokesArray.some((j) => j.id === joke.id);
  };

  const getCatJokes = async () => {
    const jokesArray: JokeType[] = [];
    let counter = 0;
    setLoading(true);
    while (jokesArray.length < NUMBER_OF_CATEGORY_JOKES) {
      counter++;
      const response = await fetch(
        "https://api.chucknorris.io/jokes/random?category=" + props.category
      );
      const data: JokeType = await response.json();
      if (counter > NUMBER_OF_ATTEMPTS) {
        break;
      }
      if (!isDuplicate(jokesArray, data)) {
        jokesArray.push(data);
      }
    }
    setCategoryJokes(jokesArray);
    setLoading(false);
  };

  useEffect(() => {
    try {
      setError(null);
      getCatJokes();
    } catch (err) {
      setError(err.toString());
    }
  }, []);

  return (
    <div>
      <H3>{props.category} jokes</H3>
      <ErrorDiv>{error && <div> Error: {error}</div>}</ErrorDiv>
      <LoadingDiv>
        {loading && <img src={loadingGIF} alt="Loading" />}
      </LoadingDiv>
      <ul>
        {categoryJokes.map((joke, index) => {
          return (
            <Li key={index}>
              <OneJoke value={joke.value} />
            </Li>
          );
        })}
      </ul>
    </div>
  );
};

const H3 = styled.h3`
  text-align: ${themes.textAlign};
  text-transform: ${themes.textTransform};
  color: ${themes.primaryColor};
`;

const Li = styled.li`
  list-style: none;
  margin: 0 10px 20px 0;
`;

const ErrorDiv = styled.div`
  color: ${themes.secondaryColor};
  font-weight: ${themes.fontBold};
  text-align: ${themes.textAlign};
  margin: 50px;
  text-transform: ${themes.textTransform};
`;

const LoadingDiv = styled.div`
  position: relative;
  left: calc(50% - 100px);
`;
