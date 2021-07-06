import { OuterDiv, InnerDiv } from "./BurgerElements";

interface BurgerProps {
  isMenuOpen: boolean;
  toggleMenu: (state: boolean) => void;
}

const Burger = ({ isMenuOpen, toggleMenu }: BurgerProps) => {
  const toggleBurger = () => {
    toggleMenu(!isMenuOpen);
  };

  return (
    <OuterDiv onClick={toggleBurger}>
      <InnerDiv toggle={isMenuOpen} barId={1} />
      <InnerDiv toggle={isMenuOpen} barId={2} />
      <InnerDiv toggle={isMenuOpen} barId={3} />
    </OuterDiv>
  );
};

export default Burger;
