import { Link } from "react-router-dom";
import { PostsContext } from "./PostListApp";
import { URL_BASE } from "./RouterNav";
import { themes } from "./Theme";
import { useContext } from "react";
import styled from "styled-components";

export const AllPosts = () => {
  const { posts } = useContext(PostsContext);

  return (
    <DivWrapper>
      {posts.map((post, index) => {
        return (
          <Link
            key={index}
            to={URL_BASE + "Article/" + post.slug + "-" + post.id}
          >
            <br />
            {post.postTitle}
          </Link>
        );
      })}
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  margin: 25px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  max-width: 880px;

  a {
    text-decoration: ${themes.primaryTextDecoration};
    color: ${themes.tertiaryColor};
    padding: 10px;

    &:hover {
      color: ${themes.primaryColor};
    }
  }
`;
