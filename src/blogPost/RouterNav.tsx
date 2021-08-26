import { AllPosts } from "./AllPosts";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NewPost } from "./NewPost";
import { OnePost } from "./OnePost";
import { PostsContext } from "./PostListApp";
import { themes } from "./Theme";
import { useContext } from "react";
import styled from "styled-components";

export const URL_BASE = "/Blogpost/";

export function RouterNav() {
  const { posts } = useContext(PostsContext);
  return (
    <Router>
      <div>
        <Nav>
          <DivLink>
            <LinkNav to={URL_BASE}>All Posts</LinkNav>
            <LinkNav to={URL_BASE + "NewPost"}>New Post</LinkNav>
          </DivLink>
        </Nav>

        <Switch>
          <Route path={URL_BASE + "NewPost"}>
            <NewPost />
          </Route>
          {posts.map((post, index) => (
            <Route
              key={index}
              path={URL_BASE + "Article/" + post.slug + "-" + post.id}
            >
              <OnePost post={post} />
            </Route>
          ))}
          <Route path={URL_BASE}>
            <AllPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Nav = styled.nav`
  margin: 40px;
  font-family: ${themes.secondaryFont};
`;

const LinkNav = styled(Link)`
  text-decoration: ${themes.primaryTextDecoration};
  text-transform: ${themes.primaryTextTransform};
  color: ${themes.primaryColor};
  padding: 10px;
  width: 100%;
  text-align: ${themes.textAlign};
  margin: 2px;
  border: 1px solid ${themes.tertiaryColor};
  border-radius: 5px;

  &:hover {
    color: ${themes.quaternaryColor};
    font-weight: bold;
  }
`;

const DivLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: auto;
`;
