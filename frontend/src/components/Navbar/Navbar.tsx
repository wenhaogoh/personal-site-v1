import {
  NavbarContainer,
  NavbarWrapper,
  NavbarItems,
  NavbarMobile,
  NavbarLinks,
  NavbarScreen,
} from "./NavbarElements";
import { SetStateAction, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Burger from "./Burger/Burger";
import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarLink from "./NavbarLink/NavbarLink";
import { Theme } from "../../consts/Themes";
import { Dispatch } from "react";

interface NavbarProps {
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const Navbar = ({ setTheme }: NavbarProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setTheme(Theme.LIGHT);
    } else {
      setTheme(Theme.DARK);
    }
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = (state: boolean) => {
    setIsMenuOpen(state);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarItems>
          <NavbarLogo to={"landing"} toggleMenu={toggleMenu}>
            wenhao.
          </NavbarLogo>
          <NavbarMobile>
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              style={{ padding: "0.5rem" }}
            />
            <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </NavbarMobile>
        </NavbarItems>
        <NavbarLinks isMenuOpen={isMenuOpen}>
          <NavbarLink to={"aboutMe"} toggleMenu={toggleMenu}>
            about me.
          </NavbarLink>
          <NavbarLink to={"skills"} toggleMenu={toggleMenu}>
            skills.
          </NavbarLink>
          <NavbarLink to={"experience"} toggleMenu={toggleMenu}>
            experience.
          </NavbarLink>
          <NavbarLink to={"projects"} toggleMenu={toggleMenu}>
            projects.
          </NavbarLink>
          <NavbarLink to={"contact"} toggleMenu={toggleMenu}>
            contact.
          </NavbarLink>
          <NavbarScreen>
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              style={{ padding: "0.5rem" }}
            />
          </NavbarScreen>
        </NavbarLinks>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
