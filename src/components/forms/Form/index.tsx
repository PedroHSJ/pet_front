import { ReactNode } from "react";
import { Container } from "./styles";

interface IFormProps {
  onSubmit: () => any;
  children: ReactNode | string;
}

export const Form = ({ onSubmit, children }: IFormProps): JSX.Element => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit();
  };

  return <Container onSubmit={handleSubmit}>{children}</Container>;
};
