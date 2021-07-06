import {
  TextAreaContainer,
  TextAreaLabel,
  TextAreaTextArea,
} from "./TextAreaElements";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({ label, value, onChange }: TextAreaProps) => {
  return (
    <TextAreaContainer>
      <TextAreaLabel>{label}</TextAreaLabel>
      <TextAreaTextArea value={value} onChange={onChange} />
    </TextAreaContainer>
  );
};

export default TextArea;
