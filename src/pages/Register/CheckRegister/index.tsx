import GoBackButton from '../../../components/buttons/GoBackButton';
import CheckRegisterCard from '../../../components/cards/Register/CheckRegisterCard';
import { Container } from './styles';

const CheckRegister = () => {
	return (
		<Container>
			<GoBackButton />
			<CheckRegisterCard />
		</Container>
	);
};

export default CheckRegister;
