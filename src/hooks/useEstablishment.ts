import { useState } from 'react';
import { IEstablishment } from '../interfaces/IEstablishment';
import { getAllEstablishments as getAllEstablishmentsApi } from '../services/api/EstablishmentApi';
export const useEstablishment = () => {
    const [loading, setLoading] = useState(false);
    const [establishments, setEstablishments] = useState<IEstablishment[]>([]);
    const [error, setError] = useState('');

    const getAllEstablishments = async () => {
        try {
            setLoading(true);
            const { items } = await getAllEstablishmentsApi();
            setEstablishments(items);
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        establishments,
        error,
        getAllEstablishments,
    };
};
