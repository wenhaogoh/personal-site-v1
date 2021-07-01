import { ReactChild } from "react";
import { Element } from "react-scroll";
import { PageContainer } from "./PageElements";

interface PageProps {
  children: ReactChild;
  name: string;
}

const Page = ({ children, name }: PageProps) => {
  return (
    <Element name={name}>
      <PageContainer>{children}</PageContainer>
    </Element>
  );
};

export default Page;
