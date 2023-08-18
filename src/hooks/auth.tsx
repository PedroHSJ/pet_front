import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import jwt from 'jwt-decode';
import { loginWithPass, loginWithoutPass } from '../services/api';
import { ILoginFormWithPassword } from '../interfaces/ILoginForm';
import { handleGetErrorMessage, removeMask } from '../utils';
import { IUser } from '../interfaces/IUser';
import useUser from './useUser';
import { getUserById } from '../services/api/UserApi';

interface IAuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    loading: boolean;
    error: string;
    isAuthorized: boolean;
    loginWithoutPassword: (cpfOrCns: string) => void;
    loginWithPassword: (data: ILoginFormWithPassword) => void;
    logout: () => void;
    user: IUser | null;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const userToken = localStorage.getItem('@token');
        if (!userToken) return;
        const jwtToken = jwt<{ exp: string }>(userToken!);
        const userId = localStorage.getItem('@user/id');

        const expirationDate = new Date(+jwtToken.exp * 1000);
        if (expirationDate < new Date()) return;
        setIsAuthorized(true);

        (async () => {
            const { items } = await getUserById(userId!);
            setUser(items[0]);
        })();
    }, []);

    const loginWithoutPassword = async (cpfOrCns: string) => {
        try {
            setLoading(true);
            setError('');
            const response = await loginWithoutPass(removeMask(cpfOrCns));
            const token = response?.access_token;
            localStorage.setItem('@token', token);
            const jwtToken = jwt<{ uid: string }>(token);
            localStorage.setItem('@user/id', jwtToken.uid);
            //localStorage.setItem('@user', JSON.stringify(user));
            setIsAuthorized(true);
        } catch (e) {
            setError(handleGetErrorMessage(e));
        } finally {
            setLoading(false);
        }
    };

    const loginWithPassword = async (data: ILoginFormWithPassword) => {
        try {
            setLoading(true);
            setError('');
            const { token } = await loginWithPass(data);

            localStorage.setItem('@token', token);
            const jwtToken = jwt<{ id: string }>(token);
            localStorage.setItem('@user/id', jwtToken.id);

            const userId = localStorage.getItem('@user/id');
            const { items } = await getUserById(userId!);
            setUser(items[0]);
            //localStorage.setItem('@user', JSON.stringify(user));
            setIsAuthorized(true);
        } catch (e) {
            setError(handleGetErrorMessage(e));
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        localStorage.clear();
        setIsAuthorized(false);
    };

    return (
        <AuthContext.Provider
            value={{
                loading,
                error,
                isAuthorized,
                user,
                loginWithoutPassword,
                loginWithPassword,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };
