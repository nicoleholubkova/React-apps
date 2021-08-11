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
      <H4>Moves: {props.moves} </H4>
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

const H4 = styled.h4`
  text-align: ${themes.textAlign};
  padding: 5px;
  color: ${themes.secondaryColor};
`;
