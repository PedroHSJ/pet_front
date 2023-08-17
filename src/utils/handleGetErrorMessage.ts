import { AxiosError } from 'axios';

export function handleGetErrorMessage(error: any) {
	if (!error) return '';
	const axiosResponseError = (error as AxiosError).message;
	const apiResponseError = (error as AxiosError).response?.data;
	const validationsErrors = (error as any).response?.data?.errors ?? {};
	if (axiosResponseError?.toLowerCase().includes('network'))
		return 'Serviço indisponível, verifique a conexão com a internet.';
	if (axiosResponseError?.toLowerCase().includes('404'))
		return 'Serviço não encontrado, código de erro 404.';
	//if (error instanceof Error) return error.message;
	if (Object.keys(validationsErrors).length) {
		var errors = '';
		for (error of Object.keys(validationsErrors)) {
			errors += validationsErrors[error] + ' ';
		}
		return errors.trim();
	}
	return apiResponseError as string;
}
