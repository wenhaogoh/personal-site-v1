import {
  TextInputContainer,
  TextInputLabel,
  TextInputInput,
} from "./TextInputElements";

interface TextInputProps {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({ label, value, onChange }: TextInputProps) => {
  return (
    <TextInputContainer>
      <TextInputLabel>{label}</TextInputLabel>
      <TextInputInput type="text" onChange={onChange} value={value} />
    </TextInputContainer>
  );
};

export default TextInput;
