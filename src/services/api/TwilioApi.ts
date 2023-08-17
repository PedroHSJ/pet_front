import { ITwilioVideo } from '../../interfaces/ITwilioVideo';
import { api } from './index';

const create = async (id: string): Promise<boolean> => {
	const { data } = await api.post(`Teleconsulta/?agendamentoId=${id}`);
	return !!data;
};

const getTeleConsultaById = async (id: string): Promise<ITwilioVideo> => {
	const { data } = await api.get<ITwilioVideo>(`TeleConsulta/${id}`);

	return data;
};

const getUserChatToken = async (id: string): Promise<string> => {
	const { data } = await api.get<string>(
		`TeleConsulta/GetUserChatToken/${id}`,
	);

	return data;
};

export default { create, getUserChatToken, getTeleConsultaById };
