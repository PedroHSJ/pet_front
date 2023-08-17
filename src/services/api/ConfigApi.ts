import { AxiosResponse } from 'axios';
import { api } from '.';
import { IConfig } from '../../interfaces/IConfig';

const getConfig = async () => {
	const response = await api.get<unknown, AxiosResponse<IConfig>>('/Config');
	return response.data;
};

export { getConfig };
