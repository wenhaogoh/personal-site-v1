import { Dispatch, SetStateAction } from "react";
import { GlobalStyle, LayoutContainer } from "./LayoutElements";
import Navbar from "../../components/Navbar/Navbar";
import Pages from "../../components/Pages/Pages";

interface LayoutProps {
  setTheme: Dispatch<SetStateAction<string>>;
}

const Layout = ({ setTheme }: LayoutProps) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Navbar setTheme={setTheme} />
      <Pages />
    </LayoutContainer>
  );
};

export default Layout;
