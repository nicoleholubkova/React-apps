import { themes } from "./Theme";
import styled from "styled-components";

export const OneJoke = (props: { value: string }) => {
  return <DivWrapper> {props.value}</DivWrapper>;
};

const DivWrapper = styled.div`
  color: ${themes.tertiaryColor};
`;
