import { themes } from "./Theme";
import styled from "styled-components";

interface NewGameProps {
  startNewGame: () => void;
  moves: number;
}

export const Newgame = (props: NewGameProps) => {
  return (
    <div>
      <Button onClick={props.startNewGame}>Start New Game</Button>
      <H5>Moves: {props.moves} </H5>
    </div>
  );
};

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 0 20px 46%;
  background-color: ${themes.tertiaryColor};
  border-radius: 10px;

  &:hover {
    background-color: ${themes.secondaryColor};
    color: ${themes.quinaryColor};
  }
`;

const H5 = styled.h5`
  text-align: ${themes.textAlign};
  padding: 5px;
  color: ${themes.secondaryColor};
`;
