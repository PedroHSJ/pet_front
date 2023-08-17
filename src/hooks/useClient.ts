import { useState } from 'react';
import { IClient } from '../interfaces/IClient';
import { getAllClients } from '../services/api/ClientApi';

export const useClient = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [clients, setClients] = useState<IClient[]>([]);

    const getAll = async () => {
        setLoading(true);
        try {
            const { items } = await getAllClients();
            setClients(items);
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    };

    return {
        getAll,
        loading,
        error,
        clients,
    };
};
