import { api } from '.';

const getVerificationCode = async (email: string): Promise<string> => {
    const { data } = await api.post<string>(`email/send-verification-code`, {
        email,
    });
    return data;
};

const getAndSaveVerificationCode = async (email: string): Promise<string> => {
    const { data } = await api.post<string>(
        `email/send-and-save-verification-code`,
        {
            email,
        },
    );
    return data;
};

export { getVerificationCode, getAndSaveVerificationCode };
