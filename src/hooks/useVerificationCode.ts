import { useState } from 'react';
import {
    getVerificationCode as getVerificationCodeAPI,
    getAndSaveVerificationCode,
} from '../services/api/VerificationCodeApi';
import { handleGetErrorMessage } from '../utils';

export const useVerificationCode = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getVerificationCode = async (email: string): Promise<void> => {
        try {
            setLoading(true);
            setError('');
            const code = await getVerificationCodeAPI(email);
            setVerificationCode(code);
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const postVerificationCode = async (email: string): Promise<void> => {
        try {
            setLoading(true);
            setError('');
            const code = await getAndSaveVerificationCode(email);
            setVerificationCode(code);
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return {
        getVerificationCode,
        postVerificationCode,
        verificationCode,
        loading,
        error,
    };
};
