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
import { AxiosError } from 'axios';
import { IProfessional } from '../interfaces/IProfessional';
import { geProfessionalById } from '../services/api/ProfissionalApi';
import { Role } from '../interfaces/IRole';
interface IAuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    loading: boolean;
    error: string;
    isAuthorized: boolean;
    user: IUser | null;
    professional: IProfessional | null;
    loginWithoutPassword: (cpfOrCns: string) => void;
    loginWithPassword: (data: ILoginFormWithPassword) => void;
    logout: () => void;
    getRole: () => string;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [user, setUser] = useState<IUser | null>(null);
    const [professional, setProfessional] = useState<IProfessional | null>(
        null,
    );

    const [scope, setScope] = useState('' as string);

    useEffect(() => {
        const userToken = localStorage.getItem('@token');
        if (!userToken) return;
        const jwtToken = jwt<{ exp: string }>(userToken!);
        const expirationDate = new Date(+jwtToken.exp * 1000);
        if (expirationDate < new Date()) return;
        setIsAuthorized(true);

        // (async () => {
        //     const { items } = await getUserById(userId!);
        //     setUser(items[0]);
        // })();
    }, []);

    useEffect(() => {
        console.log('user', user);
        console.log('professional', professional);
    }, [user, professional]);

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
            if (!userId) return;
            gettingUser(userId);
            //localStorage.setItem('@user', JSON.stringify(user));
            setIsAuthorized(true);
            return;
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        localStorage.clear();
        setIsAuthorized(false);
    };

    const getRole = (): string => {
        // if (!user) return '';
        // return user?.role.name.toString();
        const role = user
            ? user?.role.name.toString()
            : professional?.role.name.toString();
        return role ? role : '';
    };

    const gettingUser = async (id: string) => {
        try {
            const { items: user } = await getUserById(id);
            const { items: professional } = await geProfessionalById(id);
            console.log('gettingUser', user, professional);
            if (user) {
                setUser(user[0]);
                setScope(user[0].role.name.toString());
                localStorage.setItem('@user', JSON.stringify(user[0]));
            }
            if (professional) {
                setProfessional(professional[0]);
                setScope(professional[0].role.name.toString());
                localStorage.setItem('@user', JSON.stringify(professional[0]));
            }
        } catch (e) {
            setError(handleGetErrorMessage(e));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const userId = localStorage.getItem('@user/id');
        if (!userId) return;
        gettingUser(userId);
    }, []);

    useEffect(() => {
        if (!scope) return;

        switch (scope) {
            case 'ADMIN':
                const user = localStorage.getItem('@user');
                setUser(JSON.parse(user!));
                break;
            case 'VETERINARIAN':
                const professional = localStorage.getItem('@user');
                setProfessional(JSON.parse(professional!));
                break;
            default:
                break;
        }
    }, [scope]);

    return (
        <AuthContext.Provider
            value={{
                loading,
                error,
                isAuthorized,
                user,
                professional,
                loginWithoutPassword,
                loginWithPassword,
                logout,
                getRole,
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
