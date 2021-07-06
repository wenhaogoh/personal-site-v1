import { UnderlinedButtonContainer } from "./UnderlinedButtonElements";

interface UnderlinedButtonProps {
  children: string;
  onClick: () => void;
}

const UnderlinedButton = ({ children, onClick }: UnderlinedButtonProps) => {
  return (
    <UnderlinedButtonContainer onClick={onClick}>
      {children}
    </UnderlinedButtonContainer>
  );
};

export default UnderlinedButton;
