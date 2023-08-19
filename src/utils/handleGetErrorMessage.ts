import { AxiosError } from 'axios';
import { ValidationError } from 'yup';

export function handleGetErrorMessage(error: any) {
    if (!error) return '';

    if (error instanceof ValidationError) {
        if (Object.keys(error).length) {
            var errors = '';
            for (error of Object.keys(error)) {
                errors += error[error] + ' ';
            }
            return errors.trim();
        }
    }

    if (error instanceof AxiosError)
        return error.response?.data?.message.message;
    if (error?.message.toLowerCase().includes('network'))
        return 'Serviço indisponível, verifique a conexão com a internet.';
    if (error?.message.toLowerCase().includes('404'))
        return 'Serviço não encontrado, código de erro 404.';

    if (error instanceof Error) return error.message;

    //if (error instanceof Error) return error.message;
}
