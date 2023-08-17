import { useState } from 'react';
import { getConfig } from '../services/api';
import { IConfig } from '../interfaces/IConfig';
import { handleGetErrorMessage } from '../utils';

const useConfig = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [config, setConfig] = useState<IConfig | undefined>();
	const [type, setType] = useState<'withPassword' | 'withoutPassword' | ''>(
		'',
	);

	const getConfigs = async () => {
		try {
			setLoading(true);
			setError('');
			// configurações retornadas
			const response = await getConfig();
			setConfig(response);
			setType(
				response?.loginComSenha ? 'withPassword' : 'withoutPassword',
			);
		} catch (e) {
			setError(handleGetErrorMessage(e));
		} finally {
			setLoading(false);
		}
	};

	return { getConfigs, loading, error, config, type };
};

export default useConfig;
