import { ContactContainer, ContactFormWrapper } from "./ContactElements";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import TextInput from "../TextInput/TextInput";
import { useState } from "react";
import TextArea from "../TextArea/TextArea";
import UnderlinedButton from "../UnderlinedButton/UnderlinedButton";

interface FormState {
  [key: string]: string;
}

const Contact = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const formStateHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    const updatedState: FormState = { ...formState };
    updatedState[field] = event.target.value;
    setFormState(updatedState);
  };

  const formSubmitHandler = () => {
    console.log(formState);
  };

  return (
    <ContactContainer>
      <Title>contact.</Title>
      <Paragraph>
        Leave a message below and I'll get back to you as soon as possible!
      </Paragraph>
      <ContactFormWrapper>
        <TextInput
          label={"name."}
          value={formState["name"]}
          onChange={(event) => formStateHandler(event, "name")}
        />
        <TextInput
          label={"email."}
          value={formState["email"]}
          onChange={(event) => formStateHandler(event, "email")}
        />
        <TextArea
          label={"message."}
          value={formState["message"]}
          onChange={(event) => formStateHandler(event, "message")}
        />
      </ContactFormWrapper>
      <UnderlinedButton onClick={formSubmitHandler}>submit.</UnderlinedButton>
    </ContactContainer>
  );
};

export default Contact;
