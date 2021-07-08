import { Dispatch, SetStateAction } from "react";
import { GlobalStyle, LayoutContainer } from "./LayoutElements";
import Navbar from "../../components/Navbar/Navbar";
import Pages from "../../components/Pages/Pages";
import Footer from "../../components/Footer/Footer";
import { Theme } from "../../consts/Themes";

interface LayoutProps {
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const Layout = ({ setTheme }: LayoutProps) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Navbar setTheme={setTheme} />
      <Pages />
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
