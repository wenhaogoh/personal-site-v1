import { ContactContainer, ContactFormWrapper } from "./ContactElements";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import TextInput from "../TextInput/TextInput";
import { useState } from "react";
import TextArea from "../TextArea/TextArea";
import UnderlinedButton from "../UnderlinedButton/UnderlinedButton";
import axios from "axios";
import Loader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormState {
  [key: string]: string;
}

const isEmpty = (str: string) => !str || str.length === 0;

const hasEmptyField = (formState: FormState) =>
  isEmpty(formState["name"].trim()) ||
  isEmpty(formState["email"].trim()) ||
  isEmpty(formState["content"].trim());

const Contact = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  toast.configure();

  const formStateHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    const updatedState: FormState = { ...formState };
    updatedState[field] = event.target.value;
    setFormState(updatedState);
  };

  const formSubmitHandler = () => {
    if (hasEmptyField(formState)) {
      toast.error("Fields cannot be empty!");
      return;
    }
    setIsSubmitting(true);
    axios
      .post("/messages", formState)
      .then(() => {
        toast.success("Message sent!");
      })
      .catch(() => {
        toast.error("Failed to send message! Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
          value={formState["content"]}
          onChange={(event) => formStateHandler(event, "content")}
        />
      </ContactFormWrapper>
      {isSubmitting ? (
        <Loader />
      ) : (
        <UnderlinedButton onClick={formSubmitHandler}>submit.</UnderlinedButton>
      )}
    </ContactContainer>
  );
};

export default Contact;
