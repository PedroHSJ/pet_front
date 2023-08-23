import { useState } from 'react';
import {
    getAllProfessionals,
    getProfessinalByParams,
    postProfessional,
} from '../services/api/ProfissionalApi';
import { IProfessional, IProfessionalDTO } from '../interfaces/IProfessional';
import { handleGetErrorMessage } from '../utils';

interface IGetProfessionalByParams {
    params?: IProfessional | undefined;
    page?: number;
}

export const useProfessional = () => {
    const [loading, setLoading] = useState(false);
    const [professionals, setProfessionals] = useState<IProfessional[]>([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [totalCount, setTotalCount] = useState(0);

    const getAll = async () => {
        try {
            setError('');

            setLoading(true);
            const { items, totalCount } = await getAllProfessionals();
            setProfessionals(items);
            setTotalCount(totalCount);
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const getByParams = async ({ params, page }: IGetProfessionalByParams) => {
        try {
            setLoading(true);
            const { items, totalCount } = await getProfessinalByParams({
                ...params,
                page,
            });
            setProfessionals(items);
            setTotalCount(totalCount);
        } catch (error) {
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const createProfessional = async (professional: IProfessionalDTO) => {
        try {
            setError('');
            setSuccess(false);
            setLoading(true);
            await postProfessional(professional);
            setSuccess(true);
        } catch (error) {
            setSuccess(false);
            setError(handleGetErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        professionals,
        totalCount,
        error,
        success,
        getAll,
        getByParams,
        createProfessional,
    };
};
