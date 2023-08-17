import { useLocation, useNavigate } from 'react-router';
import GoBackButton from '../../../components/buttons/GoBackButton';
import ConfirmCodeCard from '../../../components/cards/ForgotPassword/ConfirmCodeCard';
import { Container } from './styles';
import { useEffect } from 'react';

const ConfirmCode = () => {
    const { state: forgotForm } = useLocation();
    const navigation = useNavigate();

    useEffect(() => {
        // Caso não tenha props, navegue para o início
        if (!forgotForm) navigation('/');
    }, []);

    return (
        <Container>
            <GoBackButton />
            <ConfirmCodeCard form={forgotForm} />
        </Container>
    );
};

export default ConfirmCode;
