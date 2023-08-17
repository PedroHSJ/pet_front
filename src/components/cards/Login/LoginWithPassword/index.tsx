import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../../hooks/auth";
import { useComponent } from "../../../../hooks/useComponent";
import { Container, Logo, ViewTerms } from "../styles";
import { Form } from "../../../forms/Form";
import Input from "../../../forms/Input";
import { Button } from "../../../buttons/Button";
import LogoVerticalPrimary from "../../../../assets/images/pet_logo.png";
import { ILoginFormWithPassword } from "../../../../interfaces/ILoginForm";
import { LoginSchemaWithPassword } from "../../../../validations/LoginSchema";
import {
  errorTitleText,
  requiredFieldsText,
  warningText,
} from "../../../../constants/messages";
import { CheckBoxTerm } from "../../../forms/CheckBoxTerm";

const LoginWithPassword = () => {
  const { CheckBox, isCheck } = CheckBoxTerm();
  const { dialog } = useComponent();
  const { loginWithPassword, error, loading } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormWithPassword>({
    resolver: yupResolver(LoginSchemaWithPassword),
  });

  const onSubmit = async (data: ILoginFormWithPassword) => {
    if (!isCheck) {
      dialog("Atenção", "Aceite os termos de consentimento livre primeiro", [
        { text: "OK", onPress: () => {} },
      ]);
      return;
    }

    loginWithPassword(data);
  };

  useEffect(() => {
    if (!error) return;
    dialog(errorTitleText, error);
  }, [error]);

  useEffect(() => {
    if (!Object.keys(errors).length) return;
    dialog(warningText, requiredFieldsText);
  }, [errors]);

  return (
    <Container>
      <Logo src={LogoVerticalPrimary} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="email"
          placeholder="email@gmail.com"
          label="Digite seu email"
          type="text"
          error={errors.email?.message}
        />
        <Input
          control={control}
          name="password"
          placeholder="Digite sua senha"
          label="Senha"
          type="password"
          error={errors.password?.message}
        />
        <ViewTerms>
          <CheckBox />
        </ViewTerms>
        <Button type="submit" loading={loading}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

export default LoginWithPassword;
