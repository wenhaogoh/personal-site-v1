import { ReactChild } from "react";
import { TitleH1 } from "./TitleElements";

interface TitleProps {
  children: ReactChild;
}

const Title = ({ children }: TitleProps) => {
  return <TitleH1>{children}</TitleH1>;
};

export default Title;
