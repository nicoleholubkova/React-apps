import { Helmet } from "react-helmet";
import { Theme } from "./Themes";
import styled from "styled-components";

export function HomePage() {
  return (
    <div>
      <Helmet>
        <style>{`body { background-color: ${Theme.secondaryColor};`}</style>
      </Helmet>
      <H1>Welcome </H1>
      <Paragraph>
        On the top of this page you can take a look some apps I created in
        React. Source code for individual apps can be found on{" "}
        <Link
          href="https://github.com/nicoleholubkova/React-apps"
          target="_blank"
        >
          Github.
        </Link>
      </Paragraph>
    </div>
  );
}

const H1 = styled.h1`
  text-align: center;
  margin-top: 80px;
  text-transform: uppercase;
  color: ${Theme.tertiaryColor};
`;

const Paragraph = styled.p`
  text-align: center;
  margin-top: 70px;
  line-height: 2.9;
  color: #${Theme.quaternaryColor};
`;

const Link = styled.a`
  text-decoration: none;
  color: ${Theme.quinaryColor};

  &:hover {
    color: ${Theme.tertiaryColor};
  }
`;
