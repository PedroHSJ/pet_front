import { useEffect, useState } from 'react';
import { Form } from '../../../forms/Form';
import LogoPrimary from '../../../../assets/images/pet_logo.png';

import { useVerificationCode } from '../../../../hooks/useVerificationCode';
import { toast } from 'react-toastify';
import { compare } from 'bcryptjs';
import { Container, LogoImage, Title } from '../CheckRegisterCard/styles';
import { InputComponent } from '../../../forms/NewInput';
import { useForm } from 'react-hook-form';
import { Button } from '../../../buttons/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { IProfessionalDTO } from '../../../../interfaces/IProfessional';
import { Loading } from '../../../resources/Loading';
import { Typography } from '@material-tailwind/react';
import { useProfessional } from '../../../../hooks/useProfessional';

interface ICheckVerificationCodeCard {
    code: string;
}

const CheckVerificationCodeCard = () => {
    const { getVerificationCode, verificationCode, error, loading } =
        useVerificationCode();
    const [text, setText] = useState('');
    const [textCompared, setTextCompared] = useState<boolean>();
    const { control, handleSubmit } = useForm();
    const location = useLocation();
    const professional = location.state as IProfessionalDTO;
    const {
        createProfessional,
        loading: loadingProfessional,
        error: errorProfessional,
        success: successProfessional,
    } = useProfessional();
    const navigate = useNavigate();

    useEffect(() => {
        if (!error) return;
        toast.error(error);
    }, [error]);

    useEffect(() => {
        if (!professional) return;
        getVerificationCode(professional.email);
    }, [professional]);

    const onSubmit = async (data: ICheckVerificationCodeCard) => {
        const { code } = data;
        const codeCompared = await compare(code, verificationCode);
        setTextCompared(codeCompared);
        if (!codeCompared) {
            toast.error('Código incorreto');
            return;
        }
        createProfessional(professional);
    };

    useEffect(() => {
        if (!successProfessional) return;
        toast.success('Cadastro realizado com sucesso');
        navigate('/login');
    }, [successProfessional]);

    useEffect(() => {
        if (!errorProfessional) return;
        toast.error(errorProfessional);
    }, [errorProfessional]);

    return (
        <Container>
            <LogoImage src={LogoPrimary} alt="Logo" />
            <Title>
                Digite o código de verificação enviado para o seu e-mail
            </Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {loading && (
                    <div className="flex justify-center">
                        <Loading />
                        <Typography color="blueGray" size="lg">
                            Enviando código...
                        </Typography>
                    </div>
                )}

                {!loading && (
                    <>
                        <InputComponent
                            label="Código de verificação"
                            name="code"
                            control={control}
                        />

                        <Button style="primary" type="submit">
                            Próximo
                        </Button>
                    </>
                )}

                {loadingProfessional && (
                    <div className="flex justify-center">
                        <Loading />
                        <Typography color="blueGray" size="lg">
                            Criando conta...
                        </Typography>
                    </div>
                )}
            </Form>
        </Container>
    );
};

export default CheckVerificationCodeCard;
