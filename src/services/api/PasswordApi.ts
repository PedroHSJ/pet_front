import { AxiosResponse } from 'axios';
import { api } from '.';
import { IForgotPasswordForm } from '../../interfaces/IForgotPasswordForm';

async function recoverPassword(data: IForgotPasswordForm): Promise<string> {
	const response = await api.get<unknown, AxiosResponse<string>>(
		`/Individuo/Senha/Recuperar/`,
		{ params: { cpf: data.cpf, metodo: data.method } },
	);
	return response.data;
}

export { recoverPassword };
