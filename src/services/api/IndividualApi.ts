import { AxiosResponse } from 'axios';
import { api } from '.';
import { IIndividual } from '../../interfaces/IIndividual';

async function getIndividualByCpf(cpf: string): Promise<IIndividual> {
	const response = await api.get<unknown, AxiosResponse<IIndividual>>(
		`/Individuo?cpf=${cpf}`,
	);
	console.log('Response API individual: ', response);
	return response.data.items[0];
}

export { getIndividualByCpf };
