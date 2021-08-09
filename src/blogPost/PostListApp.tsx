import { Helmet } from "react-helmet";
import { RouterNav } from "./RouterNav";
import { themes } from "./Theme";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export interface PostState {
  authorName: string;
  postTitle: string;
  postText: string;
  id: number;
  slug: string;
}

export interface PostsContextState {
  posts: PostState[];
  addPost: (
    postTitle: string,
    authorName: string,
    postText: string,
    slug: string
  ) => void;
}

export const PostsContext = React.createContext<PostsContextState>({
  posts: [],
  addPost: () => {},
});

/**
 * Inspiration: https://usehooks.com/useLocalStorage/
 */

const useLocalStorage = (defaultValue: PostState[]) => {
  const [posts, setPostsLocally] = useState(() => {
    try {
      const data = localStorage.getItem("blogPosts");
      return data ? JSON.parse(data) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const setPosts = (value: PostState[] | ((v: PostState[]) => PostState[])) => {
    try {
      const valueToLocalStorage =
        value instanceof Function ? value(posts) : value;
      setPostsLocally(valueToLocalStorage);
      localStorage.setItem("blogPosts", JSON.stringify(valueToLocalStorage));
    } catch {}
  };

  return [posts, setPosts] as const;
};

export const PostListApp = () => {
  const [posts, setPosts] = useLocalStorage([] as PostState[]);

  const addPost = (
    newPostTitle: string,
    newAuthorName: string,
    newPostText: string,
    newSlug: string
  ) => {
    const newPost: PostState = {
      postTitle: newPostTitle,
      authorName: newAuthorName,
      postText: newPostText,
      id: posts.length,
      slug: newSlug,
    };
    setPosts((prevState) => [newPost, ...prevState]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      <div>
        <Helmet>
          <style>{"body { background-color: #CEE5F2}"}</style>
        </Helmet>
        <H1>Blog Post</H1>
        <RouterNav />
      </div>
    </PostsContext.Provider>
  );
};

const H1 = styled.h1`
  color: ${themes.primaryColor};
  text-align: ${themes.textAlign};
  text-transform: ${themes.primaryTextTransform};
  margin: 30px;
  font-family: ${themes.primaryFont};
`;
