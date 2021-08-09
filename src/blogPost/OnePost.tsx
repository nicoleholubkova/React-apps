import { PostState } from "./PostListApp";
import { themes } from "./Theme";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export const OnePost = (props: { post: PostState }) => {
  return (
    <DivWrapper>
      <H2>{props.post.postTitle}</H2>
      <H6>from {props.post.authorName}</H6>
      <ReactMarkdown>{props.post.postText}</ReactMarkdown>
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  display: inline-block;
  margin: 20px;
  padding: 5px 30px;
  background-color: ${themes.quaternaryColor};
  box-shadow: 1px 1px 11px 7px ${themes.primaryBorderShadowColor};
`;

const H2 = styled.h2`
  font-size: 35px;
`;

const H6 = styled.h6`
  font-weight: normal;
`;
