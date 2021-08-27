import { Helmet } from "react-helmet";
import { themes } from "./Themes";
import ECMA from "./imgs/ECMAScript.png";
import code from "./imgs/JS code.jpg";
import java from "./imgs/JS vs Java.jpg";
import joke from "./imgs/joke1.jpg";
import logo from "./imgs/768px-Unofficial_JavaScript_logo_2.svg.png";
import styled from "styled-components";

export function JSHistory() {
  return (
    <DivWrapperMain>
      <Helmet>
        <style>{`body { background-color:${themes.primaryColor};}`}</style>
      </Helmet>
      <Header>
        <H1>The History of JavaScript</H1>
        <ImgLogo src={logo} alt="logo" />
      </Header>

      <Navigation>
        <Ul>
          <Li>
            <Link href="#aboutJS">What is JavaScript?</Link>
          </Li>
          <Li>
            <Link href="#JS-vs-Java">JavaScript vs. Java</Link>
          </Li>
          <Li>
            <Link href="#ECMAScript">ECMAScript is born</Link>
          </Li>
          <Li>
            <Link href="#JS-today">JavaScript today</Link>
          </Li>
        </Ul>
      </Navigation>

      <DivWrapper id="aboutJS">
        <H2>What is JavaScript?</H2>

        <ImgAboutJS src={joke} alt="joke" />

        <Paragraph>
          JavaScript is a scripting language that is one of the three core
          languages used to develop websites. Whereas HTML and CSS give a
          website structure and style, JavaScriptlets you add functionality and
          behaviors to your website, allowing your website’s visitors to
          interact withcontent in many imaginative ways.
        </Paragraph>

        <Paragraph>
          JavaScript is primarily a client-side language, meaning it runs on
          your computer within your browser. However, more recently the
          introduction of Node.js hasallowed JavaScript to also execute code on
          servers.
        </Paragraph>

        <Paragraph>
          Since its release, JavaScript has surpassed Java, Flash, and other
          languages because it is relatively easy to learn, has a free and open
          community, and, most importantly,is incredibly useful, allowing
          developers to quickly create apps with audiences in the millions.
        </Paragraph>

        <Paragraph>
          In September 1995, a Netscape programmer named Brandan Eich developed
          a new scripting language in just 10 days. It was originally named
          Mocha, but quickly becameknown as LiveScript and, later, JavaScript.
        </Paragraph>
      </DivWrapper>

      <DivWrapper id="JS-vs-Java">
        <H2>JavaScript vs. Java </H2>

        <ImgJSJava src={java} alt="Java-vs-JS-joke" />

        <Paragraph>
          There’s often some confusion about the two, but JavaScript and Java
          have almost nothing in common. The name JavaScript came from
          Netscape’s support of Java applets within its browser. Many say it was
          also a marketing tactic to divert some attention from Java, which was
          the most buzzed-about language at the time. To run Java programs, the
          code must be first compiled into an executable form. On the other
          hand, JavaScript was created to be interpreted at run time, making it
          much more dynamic.
        </Paragraph>

        <Paragraph>
          JavaScript didn’t exactly get off to the best start. It didn’t perform
          as well, and those developing in Java considered JavaScript more of a
          “UI glue” to be used mostly by designers and other non-engineers. But
          the reality is that having a “glue” language allowed the internet to
          really flourish. Programmers could react better to use events and
          compose interactive components. And due to that, JavaScript spread
          like wildfire and very quickly became the lingua franca of the web.
        </Paragraph>
      </DivWrapper>

      <div id="ECMAScript">
        <H2>ECMAScript is born</H2>
        <ImgECMA src={ECMA} alt="ECMAScript" />

        <Paragraph>
          In 1997, due to JavaScript’s rapid growth, it became clear that the
          language would need to be properly maintained and managed. Therefore,
          Netscape handed the job of creating a language specification to the
          European Computer Manufacturers Association (ECMA), a body founded
          with the goal of standardizing computing. The ECMA specifications were
          labeled ECMA-262 and ECMAScript languages included JavaScript,
          JScript, and ActionScript.
        </Paragraph>

        <Paragraph>
          Between 1997 and 1999, ECMA-262 had three revisions, but nearly 10
          years later, version 4 was abandoned due to differing opinions on the
          direction of the language and its proposed features. Interestingly,
          many of these controversial features, such as generators, iterators,
          and destructuring assignments, have been included in more recent
          ECMAScript specifications.
        </Paragraph>
      </div>

      <DivWrapper id="JS-today">
        <H2>JavaScript today</H2>
        <ImgJSCode src={code} alt="JS-code" />

        <Paragraph>
          From its slightly rocky start, JavaScript has risen to be the most
          popular programming language in the world. A series of JavaScript
          frameworks and libraries, such as Ember, Angular, React, and Vue, have
          been developed to allow powerful and complicated web applications to
          be written using small teams within short time spans. Alongside client
          and server software, it is now even possible to write native mobile
          apps using JavaScript. Unsurprisingly, this is becoming increasingly
          popular due to the ability to share code between the worlds of mobile
          and web.
        </Paragraph>

        <Paragraph>
          With all this choice, it’s somewhat understandable that there has also
          been a movement toward a more grassroots, “vanilla” implementation of
          JavaScript. Web components, small reusable custom browser elements,
          are the latest challenger aiming to be the next breakthrough in the
          JavaScript world. Whatever the next big thing is, it’s clear that
          JavaScript is going to be with us for many years to come.
        </Paragraph>
      </DivWrapper>
    </DivWrapperMain>
  );
}

const DivWrapperMain = styled.div`
  max-width: 880px;
  margin: auto;

  @media (max-width: 480px) {
    max-width: 460px;
    margin: auto;
  }
`;

const Header = styled.header`
  display: flex;
`;

const H1 = styled.h1`
  color: ${themes.secondaryColor};
  font-family: ${themes.primaryFont};
  text-align: ${themes.textAlign};
  font-size: 38px;
  flex-basis: 100%;
  padding-top: 40px;
`;

const Paragraph = styled.p`
  color: ${themes.tertiaryColor};
  font-family: ${themes.secondaryFont};
  line-height: 1.6;
`;

const H2 = styled.h2`
  color: ${themes.tertiaryColor};
  font-family: ${themes.secondaryFont};
  font-size: 33px;
  text-align: ${themes.textAlign};
`;
const Navigation = styled.nav`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 0;
`;

const Li = styled.li`
  text-transform: ${themes.textTransform};
  text-align: ${themes.textAlign};
  flex-basis: 25%;
  border: 1px solid ${themes.tertiaryColor};
  border-radius: 5px;
  margin: 2px;

  @media (max-width: 480px) {
    margin: 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${themes.tertiaryColor};
  font-family: ${themes.secondaryFont};
  display: block;
  padding: 6px;

  &:hover {
    color: ${themes.quaternaryColor};
  }
`;

const ImgJSCode = styled.img`
  max-width: 30%;
  float: right;
  padding-left: 20px;
`;

const ImgECMA = styled.img`
  max-width: 75%;
  display: block;
  margin: auto;
`;

const ImgLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const DivWrapper = styled.div`
  overflow: auto;
`;
const ImgAboutJS = styled.img`
  max-width: 24%;
  float: right;
  padding-left: 20px;
`;

const ImgJSJava = styled.img`
  max-width: 20%;
  float: left;
  padding-right: 20px;
`;
