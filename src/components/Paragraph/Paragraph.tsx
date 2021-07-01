import { ReactChild } from "react";
import { ParagraphP } from "./ParagraphElements";

interface ParagraphProps {
  children: ReactChild;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <ParagraphP>{children}</ParagraphP>;
};

export default Paragraph;
