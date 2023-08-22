import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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

interface IConfirmCodeCardProps {
    form: IForgotPasswordForm;
}

const ConfirmCodeCard = ({ form }: IConfirmCodeCardProps) => {
    const navigation = useNavigate();
    const { dialog } = useComponent();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<{ code: string }>({
        resolver: yupResolver(ForgotPasswordSchema),
    });

    const onSubmit = async (data: { code: string }) => {
        console.log('Data: ', data);
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
                        <ForwardButtonLabel>Re-enviar</ForwardButtonLabel>
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
