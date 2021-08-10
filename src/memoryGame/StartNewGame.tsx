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
  background-color: #a7a2a9;
  border-radius: 10px;

  &:hover {
    background-color: #222823;
    color: white;
  }
`;

const H5 = styled.h5`
  text-align: center;
  padding: 5px;
  color: #222823;
`;
