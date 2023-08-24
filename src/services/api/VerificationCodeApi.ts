import { api } from '.';

export const getVerificationCode = async (email: string): Promise<string> => {
    const { data } = await api.post<string>(`email/send-verification-code`, {
        email,
    });
    return data;
};
