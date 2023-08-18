import GoBackButton from '../../../components/buttons/GoBackButton';
import CreateAccountCard from '../../../components/cards/Register/CreateAccountCard';
import { Container } from './styles';

const CreateAccount = () => {
    return (
        <Container>
            <GoBackButton />
            <CreateAccountCard />
        </Container>
    );
};

export default CreateAccount;
