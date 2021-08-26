import { themes } from "./Theme";
import styled from "styled-components";

interface NewGameProps {
  startNewGame: () => void;
  moves: number;
}

export const Newgame = (props: NewGameProps) => {
  return (
    <DivWrapper>
      <Button onClick={props.startNewGame}>Start New Game</Button>
      <H4>Moves: {props.moves} </H4>
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${themes.tertiaryColor};
  border-radius: 5px;
  font-family: ${themes.secondaryFont};
  color: ${themes.quinaryColor};
  width: 180px;
  margin: 10px auto;

  &:hover {
    background-color: ${themes.primaryColor};
    cursor: pointer;
  }
`;

const H4 = styled.h4`
  text-align: ${themes.textAlign};
  padding: 5px;
  color: ${themes.secondaryColor};
  font-family: ${themes.secondaryFont};
  margin: 20px auto;
  flex-basis: 100%;
`;
