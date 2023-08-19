import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../../hooks/auth';
import { useComponent } from '../../../../hooks/useComponent';
import { Container, Logo, ViewTerms } from '../styles';
import { Form } from '../../../forms/Form';
import { Button } from '../../../buttons/Button';
import LogoVerticalPrimary from '../../../../assets/images/pet_logo.png';
import { ILoginFormWithPassword } from '../../../../interfaces/ILoginForm';
import { LoginSchemaWithPassword } from '../../../../validations/LoginSchema';
import { errorTitleText } from '../../../../constants/messages';
import { InputComponent } from '../../../forms/NewInput';
import { Checkbox, Typography } from '@material-tailwind/react';

const LoginWithPassword = () => {
    // const { CheckBox, isCheck } = CheckBoxTerm();
    const [isCheck, setIsCheck] = useState(false);
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
            dialog(
                'Atenção',
                'Aceite os termos de consentimento livre primeiro',
                [{ text: 'OK', onPress: () => {} }],
            );
            return;
        }

        loginWithPassword(data);
    };

    useEffect(() => {
        if (!error) return;
        console.log(error);
        dialog(errorTitleText, error);
    }, [error]);

    useEffect(() => {
        // if (!Object.keys(errors).length) return;
        // dialog(warningText, requiredFieldsText);
        console.log(errors);
    }, [errors]);

    return (
        <Container>
            <Logo src={LogoVerticalPrimary} />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                    control={control}
                    name="email"
                    label="Email"
                    type="text"
                    error={errors.email?.message}
                />
                <InputComponent
                    control={control}
                    name="password"
                    label="Senha"
                    type="password"
                    error={errors.password?.message}
                />
                <ViewTerms>
                    <Checkbox
                        color="green"
                        onChange={() => {
                            setIsCheck(!isCheck);
                        }}
                        label={
                            <Typography className="flex font-medium">
                                Eu concordo com os
                                <Typography
                                    as="a"
                                    href="#"
                                    color="green"
                                    className="font-medium transition-colors hover:text-primary_hover duration-30"
                                >
                                    &nbsp;termos e condições
                                </Typography>
                                .
                            </Typography>
                        }
                    />
                </ViewTerms>
                <Button type="submit" loading={loading}>
                    Entrar
                </Button>
            </Form>
        </Container>
    );
};

export default LoginWithPassword;
