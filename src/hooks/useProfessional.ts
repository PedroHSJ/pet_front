import { useState } from 'react';
import { getAllProfessionals } from '../services/api/ProfissionalApi';
import { IProfessional } from '../interfaces/IProfessional';

export const useProfessional = () => {
    const [loading, setLoading] = useState(false);
    const [professionals, setProfessionals] = useState<IProfessional[]>([]);
    const [error, setError] = useState('');
    const [totalCount, setTotalCount] = useState(0);

    const getAll = async () => {
        try {
            setLoading(true);
            const { items, totalCount } = await getAllProfessionals();
            setProfessionals(items);
            setTotalCount(totalCount);
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    };

    return { loading, professionals, totalCount, error, getAll };
};
