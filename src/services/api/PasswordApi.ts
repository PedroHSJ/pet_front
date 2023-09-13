import { AxiosResponse } from 'axios';
import { api } from '.';
import { IForgotPasswordForm } from '../../interfaces/IForgotPasswordForm';

async function recoverPassword(data: IForgotPasswordForm): Promise<string> {
    const response = await api.get<unknown, AxiosResponse<string>>(
        `/professional/verify-email/${data.email}`,
    );
    return response.data;
}

export { recoverPassword };
