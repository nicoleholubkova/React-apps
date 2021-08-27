import { PostState } from "./PostListApp";
import { themes } from "./Theme";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

export const OnePost = (props: { post: PostState }) => {
  return (
    <DivWrapper>
      <H3>{props.post.postTitle}</H3>
      <H6>from {props.post.authorName}</H6>
      <Markdown>{props.post.postText}</Markdown>
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  margin: auto;
  padding: 5px 30px;
  background-color: ${themes.quaternaryColor};
  box-shadow: 1px 1px 11px 7px ${themes.primaryBorderShadowColor};
  color: ${themes.primaryColor};
`;

const H3 = styled.h3`
  font-size: 35px;
`;

const H6 = styled.h6`
  font-weight: normal;
`;
