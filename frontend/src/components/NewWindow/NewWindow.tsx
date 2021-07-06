import { NewWindowWrapper } from "./NewWindowElements";
import { ReactComponent as NewWindowIcon } from "../../resources/others/NewWindow.svg";

interface NewWindowProps {
  url: string;
}

const NewWindow = ({ url }: NewWindowProps) => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <NewWindowWrapper onClick={() => openInNewTab(url)}>
      <NewWindowIcon />
    </NewWindowWrapper>
  );
};

export default NewWindow;
