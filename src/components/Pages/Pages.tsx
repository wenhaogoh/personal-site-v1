import { PagesContainer } from "./PagesElements";
import Page from "../Page/Page";
import Landing from "../Landing/Landing";
import AboutMe from "../AboutMe/AboutMe";

const Pages = () => {
  return (
    <PagesContainer>
      <Page name="landing">
        <Landing />
      </Page>
      <Page name="aboutMe">
        <AboutMe />
      </Page>
    </PagesContainer>
  );
};

export default Pages;
