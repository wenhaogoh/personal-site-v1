import { ReactChild } from "react";
import { UnderlinedLinkA } from "./UnderlinedLinkElements";

interface UnderlinedLinkProps {
  children: ReactChild;
  url: string;
}

const UnderlinedLink = ({ children, url }: UnderlinedLinkProps) => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <UnderlinedLinkA onClick={() => openInNewTab(url)}>
      {children}
    </UnderlinedLinkA>
  );
};

export default UnderlinedLink;
