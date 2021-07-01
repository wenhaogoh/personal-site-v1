import { ReactChild } from "react";
import { NavbarLinkContainer } from "./NavbarLinkElements";
import { Link } from "react-scroll";

interface NavbarLinkProps {
  children: ReactChild;
  to: string;
  toggleMenu: (state: boolean) => void;
}

const NavbarLink = ({ children, to, toggleMenu }: NavbarLinkProps) => {
  return (
    <NavbarLinkContainer>
      <Link to={to} smooth onClick={() => toggleMenu(false)}>
        {children}
      </Link>
    </NavbarLinkContainer>
  );
};

export default NavbarLink;
