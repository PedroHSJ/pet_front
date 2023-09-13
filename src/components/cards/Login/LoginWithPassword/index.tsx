import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../../hooks/auth';
import { useComponent } from '../../../../hooks/useComponent';
import { Container, Logo, ViewTerms } from '../styles';
import { Form } from '../../../forms/Form';
import { Button } from '../../../buttons/Button';
import LogoVerticalPrimary from '../../../../assets/images/LogoPrimary.png';
import { ILoginFormWithPassword } from '../../../../interfaces/ILoginForm';
import { LoginSchemaWithPassword } from '../../../../validations/LoginSchema';
import {
    errorTitleText,
    requiredFieldsText,
    warningText,
} from '../../../../constants/messages';
import { InputComponent } from '../../../forms/NewInput';
import { Checkbox, Typography } from '@material-tailwind/react';
import { SelectComponent } from '../../../forms/NewSelectInput';
import { scopeOptions } from '../../../../utils/options';

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
                [{ text: 'OK', onPress: () => {}, styleButton: 'primary' }],
            );
            return;
        }

        loginWithPassword(data);
    };

    useEffect(() => {
        if (!error) return;
        dialog(errorTitleText, error, [
            {
                text: 'OK',
                onPress: () => {},
                styleButton: 'primary',
            },
        ]);
    }, [error]);

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
                <SelectComponent
                    control={control}
                    name="scope"
                    label="Tipo de usuário"
                    error={errors.scope?.message}
                    options={scopeOptions}
                    defaultValueComponent={scopeOptions[1]}
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
                <Button style="primary" type="submit" loading={loading}>
                    Entrar
                </Button>
            </Form>
        </Container>
    );
};

export default LoginWithPassword;
