import { useState } from 'react';
import { IEstablishment } from '../interfaces/IEstablishment';
import { getAllEstablishments as getAllEstablishmentsApi } from '../services/api/EstablishmentApi';
export const useEstablishment = () => {
    const [loading, setLoading] = useState(false);
    const [establishments, setEstablishments] = useState<IEstablishment[]>([]);
    const [error, setError] = useState('');
    const [totalCount, setTotalCount] = useState(0);

    const getAllEstablishments = async () => {
        try {
            setLoading(true);
            const { items, totalCount } = await getAllEstablishmentsApi();

            setEstablishments(items);
            setTotalCount(totalCount);
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
        totalCount,
        getAllEstablishments,
    };
};
