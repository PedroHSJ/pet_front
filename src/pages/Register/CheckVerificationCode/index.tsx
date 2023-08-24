import GoBackButton from '../../../components/buttons/GoBackButton';
import CheckVerificationCodeCard from '../../../components/cards/Register/CheckVerificationCode';
import { Container } from '../CheckRegister/styles';

export const CheckVerificationCode = () => {
    return (
        <Container>
            <GoBackButton />
            <CheckVerificationCodeCard />
        </Container>
    );
};
