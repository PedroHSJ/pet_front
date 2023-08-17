import GoBackButton from '../../../components/buttons/GoBackButton';
import CheckUserCard from '../../../components/cards/ForgotPassword/CheckUserCard';
import { Container } from './styles';

const CheckUser = () => {
	return (
		<Container>
			<GoBackButton />
			<CheckUserCard />
		</Container>
	);
};

export default CheckUser;
