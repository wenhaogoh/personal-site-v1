import { ReactChild } from "react";
import { NavbarLinkContainer } from "./NavbarLinkElements";
import { Link } from "react-scroll";

interface NavbarLinkProps {
  children: ReactChild;
  to: string;
  toggleMenu: (state: boolean) => void;
  offset?: number;
}

const NavbarLink = ({ children, to, toggleMenu, offset }: NavbarLinkProps) => {
  return (
    <NavbarLinkContainer>
      <Link to={to} smooth onClick={() => toggleMenu(false)} offset={offset}>
        {children}
      </Link>
    </NavbarLinkContainer>
  );
};

export default NavbarLink;
