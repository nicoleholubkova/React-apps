import { Helmet } from "react-helmet";
import { Theme } from "./Themes";
import logo from "./github.png";
import styled from "styled-components";

export function HomePage() {
  return (
    <DivWrapper>
      <Helmet>
        <style>{`body { background-color: ${Theme.secondaryColor};`}</style>
      </Helmet>
      <H1>Welcome </H1>
      <Paragraph>
        On the top of this page you can take a look at some apps I have created
        in React. Source code for individual apps can be found on Github. Just
        click on the GitHub logo.
      </Paragraph>
      <Link
        href="https://github.com/nicoleholubkova/React-apps"
        target="_blank"
      >
        <ImgLogo src={logo} alt="github logo" />
      </Link>
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  max-width: 880px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    max-width: 460px;
    margin: auto;
  }
`;

const ImgLogo = styled.img`
  width: 150px;
`;

const H1 = styled.h1`
  text-align: center;
  margin-top: 40px;
  text-transform: uppercase;
  color: ${Theme.tertiaryColor};
  font-size: 38px;
`;

const Paragraph = styled.p`
  text-align: center;
  line-height: 2.9;
  color: ${Theme.quaternaryColor};
`;

const Link = styled.a`
  text-decoration: none;
  margin: 50px;
`;
