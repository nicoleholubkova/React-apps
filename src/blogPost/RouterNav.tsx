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
            <div>
              <Link to={URL_BASE}>All Posts</Link>
            </div>
            <div>
              <Link to={URL_BASE + "NewPost"}>New Post</Link>
            </div>
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
  text-transform: ${themes.primaryTextTransform};
  margin: 30px;
  font-family: ${themes.primaryFont};
  font-weight: bold;
  font-size: 20px;
  a {
    text-decoration: ${themes.primaryTextDecoration};
    text-transform: ${themes.primaryTextTransform};
  }
`;

const DivLink = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
