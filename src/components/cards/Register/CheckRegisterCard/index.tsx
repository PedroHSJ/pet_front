import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../../forms/Form';
import Input from '../../../forms/Input';
import { Button } from '../../../buttons/Button';
import { useComponent } from '../../../../hooks/useComponent';
import { IRegisterForm } from '../../../../interfaces/IRegisterForm';
import { Register } from '../../../../validations/RegisterSchema';
import LogoPrimary from '../../../../assets/images/LogoPrimary.png';
import { Container, Title, LogoImage } from './styles';

import {
	errorTitleText,
	requiredFieldsText,
	warningText,
} from '../../../../constants/messages';

const CheckRegisterCard = () => {
	const navigate = useNavigate();
	const { dialog } = useComponent();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegisterForm>({
		resolver: yupResolver(Register),
	});

	const onSubmit = async (data: IRegisterForm) => {
        console.log(data)
		navigate('/createAccount')
		// loginWithPassword(data);
	};

	useEffect(() => {
		if (!Object.keys(errors).length) return;
		dialog(warningText, requiredFieldsText);
	}, [errors]);

	return (
		<Container>
			<LogoImage src={LogoPrimary} alt="Logo" />
			<Title>
				Informe os dados a seguir para realizar seu primeiro acesso.
			</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					control={control}
					name="nomeCompleto"
					placeholder="Digite o nome completo"
					label="Digite o nome completo"
					type="text"
					error={errors.nomeCompleto?.message}
				/>
				<Input
					control={control}
					name="cpfOrCns"
					placeholder="Digite o CPF ou o CNS"
					label="CPF ou CNS"
					type="text"
					error={errors.cpfOrCns?.message}
				/>
				<Button type="submit">Entrar</Button>
			</Form>
		</Container>
	);
};

export default CheckRegisterCard;
