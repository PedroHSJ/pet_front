import { AxiosResponse } from 'axios';
import { api } from '.';
import { IResponseToken } from '../../interfaces/IResponseToken';

const loginWithoutPass = async (cpfOrCns: string) => {
	const response = await api.post<unknown, AxiosResponse<IResponseToken>>(
		'/Token/LoginPortal',
		{
			username: btoa(cpfOrCns),
			audience: btoa('atendtelemedicina'),
		},
	);

	return response.data;
};

export { loginWithoutPass };
