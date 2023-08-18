import { useState } from 'react';
import { IIndividual } from '../interfaces/IIndividual';
import { handleGetErrorMessage } from '../utils';
import { getIndividualByCpf } from '../services/api';
import { IUser, IUserDTO } from '../interfaces/IUser';
import { getUserById, postUser } from '../services/api/UserApi';

const useUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState<IUser[] | undefined>();

    const getById = async (id: string) => {
        setLoading(true);
        try {
            const { items } = await getUserById(id);
            setUser(items);
        } catch (err) {
            setError(handleGetErrorMessage(err));
        } finally {
            setLoading(false);
        }
    };

    const create = async (user: IUserDTO) => {
        setLoading(true);
        try {
            const { id } = await postUser(user);
            return id;
        } catch (err) {
            setError(handleGetErrorMessage(err));
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        user,
        getById,
        create,
    };
};

export default useUser;
