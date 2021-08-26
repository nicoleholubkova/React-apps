import { MarkdownTextarea } from "markdown-textarea-react";
import { PostsContext } from "./PostListApp";
import { themes } from "./Theme";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import urlSlug from "url-slug";

export const NewPost = () => {
  const { addPost } = useContext(PostsContext);
  const [postTitle, setPostTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [postText, setPostText] = useState("");
  const [slug, setSlug] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    setError("");
    if (postTitle.replace(" ", "") === "") {
      setError("Title is required");
      return;
    }
    if (authorName.replace(" ", "") === "") {
      setError("Author is required");
      return;
    }
    if (postText.replace(" ", "") === "") {
      setError("Text is required");
      return;
    }

    addPost(postTitle, authorName, postText, slug);
    setPostTitle("");
    setAuthorName("");
    setPostText("");
    setSlug("");
  }

  return (
    <div>
      <DivError>{error}</DivError>
      <Form>
        <InputDiv>
          <Label>Post Title</Label>

          <Input
            type="text"
            name="post title"
            placeholder="Post Title"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
              setSlug(urlSlug(e.target.value));
            }}
          />
        </InputDiv>
        <InputDiv>
          <Label>Author Name</Label>
          <Input
            type="text"
            name="author name"
            placeholder="Author's Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <Label>Text Area</Label>
          <Textarea>
            <MarkdownTextarea
              source={postText}
              callback={(val: React.SetStateAction<string>) => setPostText(val)}
              verticalAutoResize={false}
            />
          </Textarea>
        </InputDiv>
        <div>
          <Button onClick={onSubmit}>Submit</Button>
        </div>
      </Form>
    </div>
  );
};

const Textarea = styled.div`
  margin: 5px 22px;
`;

const DivError = styled.div`
  font-size: 17px;
  color: ${themes.quinaryColor};
  padding: 20px 0;
  margin: 0 41%;
`;

const Label = styled.label`
  text-transform: ${themes.primaryTextTransform};
  margin: 5px 22px;
  color: ${themes.primaryColor};
  font-family: ${themes.secondaryFont};
`;

const Button = styled.button`
  margin: 0 20px 20px 20px;
  padding: 10px 20px;
  font-size: 15px;
  position: relative;
  top: 50px;
  border-radius: 5px;
  background: ${themes.tertiaryColor};
  color: ${themes.secondaryColor};

  &:hover {
    background: ${themes.quaternaryColor};
    cursor: pointer;
  }
`;

const Input = styled.input`
  font-size: 14px;
  text-align: ${themes.textAlign};
  padding: 3px 20px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: auto;
`;

const InputDiv = styled.div`
  width: 50%;
  margin: 15px 0 55px 0;
`;
