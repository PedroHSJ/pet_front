import axios, { InternalAxiosRequestConfig } from 'axios';
import { loginWithPass } from './LoginWithPasswordApi';
import { loginWithoutPass } from './LoginWithOutPasswordApi';
import { getConfig } from './ConfigApi';
import { recoverPassword } from './PasswordApi';
import { getIndividualByCpf } from './IndividualApi';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API,
    timeout: 7000,
});

api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<any> => {
        try {
            const token = localStorage.getItem('@token');
            if (token) config.headers.Authorization = `Bearer ${token}`;
            return config;
        } catch (error) {
            console.log('Erro: ', error);
        }
    },
);

export {
    api,
    loginWithPass,
    loginWithoutPass,
    getConfig,
    recoverPassword,
    getIndividualByCpf,
};
