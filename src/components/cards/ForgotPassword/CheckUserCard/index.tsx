import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useComponent } from '../../../../hooks/useComponent';
import { Button } from '../../../buttons/Button';
import Input from '../../../forms/Input';
import { Form } from '../../../forms/Form';
import { CheckUserSchema } from '../../../../validations/CheckUserSchema';
import LogoPrimary from '../../../../assets/images/LogoPrimary.png';
import {
	Container,
	Logo,
	Title,
	Description
} from './styles';
import {
	errorTitleText,
	requiredFieldsText,
	successTitleText,
	warningText,
} from '../../../../constants/messages';
import { SelectInput } from '../../../forms/SelectInput';
import { IForgotPasswordForm } from '../../../../interfaces/IForgotPasswordForm';
import usePassword from '../../../../hooks/usePassword';

const CheckUserCard = () => {
	const navigation = useNavigate();
	const { dialog } = useComponent();
	const { recover, loading, error: passwordError, success: passwordSuccess } = usePassword();
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<IForgotPasswordForm>({
		resolver: yupResolver(CheckUserSchema),
	});

	const onSubmit = async (data: IForgotPasswordForm) => {
		recover(data);
	};

	useEffect(() => {
		if (!passwordSuccess) return;
		dialog(successTitleText, passwordSuccess, [
			{
				text: 'OK',
				onPress: () => navigation('/confirmCode', {
					state: {
						cpf: getValues('cpf'),
						method: getValues('method')
					}
				})
			}
		]);
	}, [passwordSuccess]);

	useEffect(() => {
		if (!passwordError) return;
		dialog(errorTitleText, passwordError);
	}, [passwordError]);

	useEffect(() => {
		if (!Object.keys(errors).length) return;
		dialog(warningText, requiredFieldsText);
	}, [errors]);

	return (
		<Container>
			<Logo src={LogoPrimary} />
			<Title>Informe seu CPF para recuperação de senha</Title>
			<Description>Será enviado um código de autenticação por Email ou SMS</Description>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					control={control}
					name="cpf"
					placeholder="CPF"
					label="Digite o CPF"
					type="text"
					error={errors.cpf?.message}
				/>
				<SelectInput
					label='Tipo de comunicação'
					name='method'
					control={control}
					options={[
						{
							key: 'Email', label: 'Email'
						},
						{
							key: 'SMS', label: 'SMS'
						},
						/* {
							key: 'WhatsApp', label: 'Whatsapp'
						} */
					]}
					error={errors.method?.message}
				/>
				<Button type="submit" loading={loading}>Enviar</Button>
			</Form>
		</Container>
	);
};

export default CheckUserCard;
