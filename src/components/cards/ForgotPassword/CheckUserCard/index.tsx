import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useComponent } from '../../../../hooks/useComponent';
import { Button } from '../../../buttons/Button';
import { Form } from '../../../forms/Form';
import { CheckUserSchema } from '../../../../validations/CheckUserSchema';
import LogoPrimary from '../../../../assets/images/LogoPrimary.png';
import { Container, Logo, Title, Description } from './styles';
import {
    requiredFieldsText,
    warningText,
} from '../../../../constants/messages';
import { IForgotPasswordForm } from '../../../../interfaces/IForgotPasswordForm';
import { InputComponent } from '../../../forms/NewInput';
import { useProfessional } from '../../../../hooks/useProfessional';

const CheckUserCard = () => {
    const navigation = useNavigate();
    const { dialog } = useComponent();
    const { verifyEmailProfessionalExist, loading } = useProfessional();

    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<IForgotPasswordForm>({
        resolver: yupResolver(CheckUserSchema),
    });

    const onSubmit = async (data: IForgotPasswordForm) => {
        const exist = await verifyEmailProfessionalExist(data.email);
        if (!exist) return dialog(warningText, 'Email não encontrado');

        navigation('/confirmCode', { state: getValues() });
    };

    useEffect(() => {
        if (!Object.keys(errors).length) return;
        dialog(warningText, requiredFieldsText);
    }, [errors]);

    return (
        <Container>
            <Logo src={LogoPrimary} />
            <Title>Informe seu email para recuperação de senha</Title>
            <Description>
                Será enviado um código de autenticação por email
            </Description>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                    control={control}
                    name="email"
                    placeholder="Email"
                    label="Digite o email"
                    type="text"
                    error={errors.email?.message}
                />

                <Button type="submit" loading={loading} style={'primary'}>
                    Enviar
                </Button>
            </Form>
        </Container>
    );
};

export default CheckUserCard;
