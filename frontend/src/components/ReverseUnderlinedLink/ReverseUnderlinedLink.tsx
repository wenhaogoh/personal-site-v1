import { ReactChild } from "react";
import { ReverseUnderlinedLinkA } from "./ReverseUnderlinedLinkElements";

interface ReverseUnderlinedLinkProps {
  children: ReactChild;
  url: string;
}

const ReverseUnderlinedLink = ({
  children,
  url,
}: ReverseUnderlinedLinkProps) => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <ReverseUnderlinedLinkA onClick={() => openInNewTab(url)}>
      {children}
    </ReverseUnderlinedLinkA>
  );
};

export default ReverseUnderlinedLink;
