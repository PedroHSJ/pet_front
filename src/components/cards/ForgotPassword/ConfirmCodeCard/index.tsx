import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useComponent } from '../../../../hooks/useComponent';
import { Button } from '../../../buttons/Button';
import { Form } from '../../../forms/Form';
import LogoPrimary from '../../../../assets/images/LogoPrimary.png';
import {
    Container,
    Logo,
    Title,
    ForwardContainer,
    ForwardText,
    ForwardButton,
    ForwardButtonLabel,
} from './styles';
import {
    errorTitleText,
    requiredFieldsText,
    warningText,
} from '../../../../constants/messages';
import { ForgotPasswordSchema } from '../../../../validations/ForgotPasswordSchema';
import { IForgotPasswordForm } from '../../../../interfaces/IForgotPasswordForm';
import { InputComponent } from '../../../forms/NewInput';
import { useVerificationCode } from '../../../../hooks/useVerificationCode';
import { toast } from 'react-toastify';
import { compare } from 'bcryptjs';

interface IConfirmCodeCardProps {
    form: IForgotPasswordForm;
}

const ConfirmCodeCard = ({ form }: IConfirmCodeCardProps) => {
    const location = useLocation();
    const state = location.state as IForgotPasswordForm;
    const { dialog } = useComponent();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<{ code: string }>({
        resolver: yupResolver(ForgotPasswordSchema),
    });

    const { postVerificationCode, verificationCode, loading } =
        useVerificationCode();

    useEffect(() => {
        if (!state) return;
        postVerificationCode(state.email);
    }, [state]);

    const onSubmit = async (data: { code: string }) => {
        if (!verificationCode)
            return dialog(errorTitleText, 'Código não encontrado');
        if (!data.code) return dialog(errorTitleText, 'O código é obrigatório');
        const isTrue = await compare(data.code, verificationCode);
        if (!isTrue) return toast.error('Código incorreto, tente novamente');
        toast.success('Código confirmado com sucesso');
    };

    useEffect(() => {
        if (!Object.keys(errors).length) return;
        dialog(warningText, requiredFieldsText);
    }, [errors]);

    return (
        <Container>
            <Logo src={LogoPrimary} />
            <Title>
                Código de autenticação enviado. Verifique sua caixa de entrada
            </Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                    control={control}
                    name="code"
                    placeholder="Digite o código"
                    label="Código de confirmação"
                    type="text"
                    error={errors.code?.message}
                />
                <ForwardContainer>
                    <ForwardText>Não recebeu o código?</ForwardText>
                    <ForwardButton>
                        <ForwardButtonLabel
                            onClick={() => getVerificationCode(state.email)}
                        >
                            Re-enviar
                        </ForwardButtonLabel>
                    </ForwardButton>
                </ForwardContainer>
                <Button
                    type="submit"
                    /* loading={loading} */ style={
                        'primary'
                    } /* loading={loading} */
                >
                    Confirmar
                </Button>
            </Form>
        </Container>
    );
};

export default ConfirmCodeCard;
