import { useState } from 'react';
import { IForgotPasswordForm } from '../interfaces/IForgotPasswordForm';
import { handleGetErrorMessage } from '../utils';
import { recoverPassword } from '../services/api';

const usePassword = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const recover = async (data: IForgotPasswordForm) => {
		try {
			setLoading(true);
			setError('');
			const response = await recoverPassword(data);
			setSuccess(response);
		} catch (e) {
			setSuccess('');
			setError(handleGetErrorMessage(e));
		} finally {
			setLoading(false);
		}
	};

	return { recover, loading, error, success };
};

export default usePassword;
